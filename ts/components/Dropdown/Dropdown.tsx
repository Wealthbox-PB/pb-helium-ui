import classNames from 'classnames';
import React, { useState } from 'react';
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
} from '@floating-ui/react';
import type { Placement, ReferenceType } from '@floating-ui/react';

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

  const { getReferenceProps, getFloatingProps } = useInteractions([useDismiss(context), useClick(context)]);

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
        <FloatingPortal>
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
            <ul>{children}</ul>
          </div>
        </FloatingPortal>
      ) : null}
    </>
  );
};

export { Dropdown };
