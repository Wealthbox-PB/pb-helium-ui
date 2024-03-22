import React, { useEffect, MutableRefObject, useMemo, useState, useRef, useCallback } from 'react';
import classNames from 'classnames';
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  limitShift,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useTypeahead,
  size,
} from '@floating-ui/react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { DropdownContext } from './DropdownContext';
import { Portal, PortalProps } from '../Portal';

interface RenderOpenerProps {
  ref: (node: ReferenceType | null) => void;
  open: boolean;
  activeIndex: number | null;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onClick?: (e: any) => void;
}

interface DropdownProps {
  /** Content for the dropdown. */
  children: JSX.Element | JSX.Element[];
  /** The dropdown opener element. Use the destructured "ref", "open", "activeIndex" and "...props" in the
   * params to spread them onto the opener element for correct functionality. */
  renderOpener: (props: RenderOpenerProps) => JSX.Element;
  /** Adds class names to the dropdown element. */
  className?: string;
  /** Controls whether the dropdown should be dismissible by clicking off of it, or using the `esc`
   * key. */
  dismissible?: boolean;
  /** Controls whether the dropdown should flip it's orientation based on the available space in the browser
   * window. */
  flip?: boolean;
  /** Controls the height of the dropdown. */
  height?: string;
  /** Controls the initial focus element. */
  initialFocusEl?: number | MutableRefObject<HTMLElement | null> | undefined;
  /** Controls the initial active index. */
  initialActiveIndex?: number | null;
  /** Controls the maximum height of the dropdown. */
  maxHeight?: number;
  /** Controls the minimum height of the dropdown. */
  minHeight?: number;
  /** Callback function when the dropdown is closed. */
  onClose?: () => void;
  /** Callback function when the dropdown is opened. */
  onOpen?: () => void;
  /** Controls whether the dropdown is open or not. */
  open?: boolean;
  /** Props passed into the Portal element. */
  portalProps?: Omit<PortalProps, `children`>;
  /** Controls the placement of the dropdown. */
  placement?: Placement;
  /** Controls whether the active index should be reset when the dropdown content changes. */
  resetActiveIndex?: boolean | undefined;
  /** Controls whether the focus should be returned to the opener when the dropdown is closed. */
  returnFocus?: boolean | undefined;
  /** Controls whether the dropdown should toggle open when the opener is clicked. */
  toggleOpenOnOpenerClick?: boolean;
  /** Controls whether the dropdown menu items should have typeahead functionality. */
  typeahead?: boolean;
  /** Controls whether the dropdown menu items should have virtual focus, or the default native focus which
   * would be moved from the opener to the dropdown items when open. */
  virtualFocus?: boolean;
  /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
   * element. */
  width?: `auto` | `full` | number;
}

const Dropdown = ({
  children,
  className,
  flip: flipProp = true,
  minHeight,
  placement = `bottom-end`,
  renderOpener,
  width = `auto`,
  maxHeight,
  height = `auto`,
  open: openProp = false,
  dismissible = true,
  typeahead: typeaheadProp = true,
  onOpen = () => {},
  onClose = () => {},
  initialFocusEl,
  returnFocus = true,
  virtualFocus = false,
  toggleOpenOnOpenerClick = true,
  resetActiveIndex = true,
  initialActiveIndex = null,
  portalProps,
}: DropdownProps) => {
  const [open, setOpen] = useState(openProp);
  const previousOpenState = useRef(open);
  const onOpenCallback = useCallback(onOpen, [onOpen]);
  const onCloseCallback = useCallback(onClose, [onClose]);
  const [activeIndex, setActiveIndex] = useState<number | null>(initialActiveIndex);

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  useEffect(() => {
    if (previousOpenState.current !== open) {
      open ? onOpenCallback?.() : onCloseCallback?.();
    }
    previousOpenState.current = open;
  }, [open, onOpenCallback, onCloseCallback]);

  const {
    x,
    y,
    refs: { setReference, setFloating },
    strategy,
    context,
  } = useFloating({
    open,
    whileElementsMounted: autoUpdate,
    placement: placement,
    strategy: `absolute`,
    middleware: [
      offset(4),
      flip({ mainAxis: flipProp }),
      shift({ padding: 4, limiter: limitShift() }),
      size({
        apply({ availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight:
              height === `auto`
                ? maxHeight
                  ? `${Math.min(maxHeight, availableHeight) - 4}px`
                  : `${availableHeight - 4}px`
                : null,
            minHeight: height == `auto` ? (minHeight ? `${minHeight - 4}px` : null) : null,
            height: height,
            width: width === `full` ? `${rects.reference.width}px` : width === `auto` ? null : width + `px`,
          });
        },
      }),
    ],
    onOpenChange: (open) => {
      if (toggleOpenOnOpenerClick) {
        setOpen(open);
      }
    },
  });

  const elementsRef = React.useRef<HTMLElement[]>([]);
  const labelsRef = React.useRef<(string | null)[]>([]);

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: virtualFocus,
    loop: true,
  });

  const typeahead = useTypeahead(context, {
    enabled: typeaheadProp,
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    useDismiss(context, { enabled: dismissible }),
    useClick(context),
    listNavigation,
    typeahead,
  ]);

  const dropdownContext = useMemo(
    () => ({ activeIndex, getItemProps, setOpen }),
    [activeIndex, getItemProps, setOpen],
  );

  useEffect(() => {
    if (resetActiveIndex) {
      setActiveIndex(initialActiveIndex);
    }
  }, [children, initialActiveIndex, resetActiveIndex]);

  return (
    <>
      {renderOpener({
        open,
        ref: setReference,
        activeIndex,
        ...getReferenceProps({
          onClick(e) {
            if (toggleOpenOnOpenerClick) {
              setOpen(!open);
            }
            e.stopPropagation();
            // Normalize button focus while clicking on Safari.
            (e.currentTarget as HTMLButtonElement).focus();
          },
          open,
          tabIndex: 0,
        }),
      })}
      {open ? (
        <DropdownContext.Provider value={dropdownContext}>
          <Portal
            className={classNames(`h-floating-ui h-floating-ui--dropdowns`, portalProps?.className)}
            {...portalProps}
          >
            <FloatingFocusManager context={context} initialFocus={initialFocusEl} returnFocus={returnFocus}>
              <div
                ref={setFloating}
                className={classNames(`h-dropdown h-overflow-auto`, className)}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                }}
                role="menu"
                {...getFloatingProps({
                  // Pressing tab dismisses the menu due to the modal
                  // focus management on the root menu.
                  onKeyDown(event) {
                    if (dismissible && event.key === `Tab`) {
                      setOpen(false);
                    }
                  },
                })}
              >
                <ul className="h-dropdown__menu">
                  <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                    {children}
                  </FloatingList>
                </ul>
              </div>
            </FloatingFocusManager>
          </Portal>
        </DropdownContext.Provider>
      ) : null}
    </>
  );
};

export { Dropdown };
