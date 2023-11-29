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
import { Portal } from '../Portal';

interface RenderOpenerProps {
  ref: (node: ReferenceType | null) => void;
  open: boolean;
  activeIndex: number | null;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onKeyDown?: (e: any) => void;
}

interface DropdownProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  flip?: boolean;
  minHeight?: number;
  maxHeight?: number;
  height?: string;
  virtualFocus?: boolean;
  placement?: Placement;
  renderOpener: (props: RenderOpenerProps) => JSX.Element;
  width?: `auto` | `full` | number;
  open?: boolean;
  dismissible?: boolean;
  toggleOpenOnOpenerClick?: boolean;
  typeahead?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  initialFocusEl?: number | MutableRefObject<HTMLElement | null> | undefined;
  returnFocus?: boolean | undefined;
  resetActiveIndex?: boolean | undefined;
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
}: DropdownProps) => {
  const [open, setOpen] = useState(openProp);
  const previousOpenState = useRef(open);
  const onOpenCallback = useCallback(onOpen, [onOpen]);
  const onCloseCallback = useCallback(onClose, [onClose]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
    [activeIndex, getItemProps, setOpen]
  );

  useEffect(() => {
    if (resetActiveIndex) {
      setActiveIndex(0);
    }
  }, [children, resetActiveIndex]);

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
          <Portal className="h-floating-ui h-floating-ui--dropdowns">
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
