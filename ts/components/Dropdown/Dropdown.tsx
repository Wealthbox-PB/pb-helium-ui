import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import {
  useDismiss,
  useFloating,
  useInteractions,
  useClick,
  autoUpdate,
  offset,
  flip,
  shift,
  limitShift,
  FloatingPortal,
  useListNavigation,
  FloatingList,
  FloatingFocusManager,
  useTypeahead,
} from '@floating-ui/react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { DropdownContext } from './DropdownContext';

interface RenderOpenerProps {
  ref: (node: ReferenceType | null) => void;
}
interface DropdownProps {
  renderOpener: (props: RenderOpenerProps) => React.ReactNode;
  children: JSX.Element | JSX.Element[];
  placement?: Placement;
}

const Dropdown = ({ renderOpener, placement = `bottom-end`, children }: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
    middleware: [offset(4), flip(), shift({ padding: 4, limiter: limitShift() })],
    onOpenChange: setOpen,
  });

  const elementsRef = React.useRef<HTMLElement[]>([]);
  const labelsRef = React.useRef<(string | null)[]>([]);

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    useDismiss(context),
    useClick(context),
    listNavigation,
    typeahead,
  ]);

  const dropdownContext = useMemo(() => ({ activeIndex, getItemProps }), [activeIndex, getItemProps]);

  return (
    <>
      {renderOpener({
        ref: setReference,
        ...getReferenceProps({
          onClick(e) {
            setOpen(!open);
            e.stopPropagation();
            // Normalize button focus while clicking on Safari.
            (e.currentTarget as HTMLButtonElement).focus();
          },
          onKeyPress(e) {
            // This stops propagation up to the parent onKeyPress, which then triggers both the onKeyPress and
            //   the onClick because buttons trigger key presses as clicks
            e.stopPropagation();
          },
          open,
          tabIndex: 0,
        }),
      })}
      {open ? (
        <DropdownContext.Provider value={dropdownContext}>
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <div
                ref={setFloating}
                className={classNames(`h-dropdown`, { 'd-block': open })}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                }}
                role="menu"
                {...getFloatingProps({
                  onClick() {
                    setOpen(false);
                  },
                  // Pressing tab dismisses the menu due to the modal
                  // focus management on the root menu.
                  onKeyDown(event) {
                    if (event.key === `Tab`) {
                      setOpen(false);
                    }
                  },
                })}
              >
                <ul>
                  <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                    {children}
                  </FloatingList>
                </ul>
              </div>
            </FloatingFocusManager>
          </FloatingPortal>
        </DropdownContext.Provider>
      ) : null}
    </>
  );
};

export { Dropdown };
