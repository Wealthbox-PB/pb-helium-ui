/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import {
  arrow as middlewareArrow,
  autoUpdate,
  flip,
  FloatingPortal,
  limitShift,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import classNames from 'classnames';
import { Button } from 'components/Button';

interface RenderOpenerProps {
  ref: (node: ReferenceType | null) => void;
}

interface PopoverProps {
  renderOpener: (props: RenderOpenerProps) => JSX.Element | void;
  children: JSX.Element | JSX.Element[];
  placement?: Placement;
  trigger?: `click` | `hover`;
  arrow?: boolean;
  open?: boolean;
  size?: `sm` | `md` | `lg` | `xl`;
  theme?: `light` | `dark` | `primary`;
  className?: string;
  bodyClassName?: string;
  closeInPopover?: boolean;
  closeDialog?: () => void;
}

const Popover = ({
  renderOpener,
  placement = `top`,
  children,
  trigger = `hover`,
  arrow = true,
  open: openProp = false,
  size,
  theme = `light`,
  className,
  bodyClassName,
  closeInPopover,
}: PopoverProps) => {
  const [open, setOpen] = useState(openProp);
  const arrowRef = useRef(null);

  const {
    x,
    y,
    refs: { setReference, setFloating },
    strategy,
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    placement: currentPlacement,
  } = useFloating({
    open,
    whileElementsMounted: autoUpdate,
    placement,
    strategy: `absolute`,
    middleware: [
      offset(20),
      flip(),
      shift({ padding: 4, limiter: limitShift() }),
      middlewareArrow({ element: arrowRef, padding: 4 }),
    ],
    onOpenChange: setOpen,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useDismiss(context),
    useHover(context, { enabled: trigger === `hover`, handleClose: safePolygon() }),
    useClick(context, { enabled: trigger === `click` }),
  ]);

  const staticSide: string = {
    top: `bottom`,
    right: `left`,
    bottom: `top`,
    left: `right`,
  }[currentPlacement.split(`-`)[0]]!;

  const { isMounted, styles } = useTransitionStyles(context);

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
            // the onClick because buttons trigger key presses as clicks
            e.stopPropagation();
          },
          open,
          tabIndex: 0,
        }),
      })}
      {isMounted ? (
        <FloatingPortal>
          <div
            ref={setFloating}
            className={classNames(
              `h-popover`,
              { [`h-popover--${size}`]: size },
              { [`h-popover--${theme}`]: theme },
              className
            )}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              ...styles,
            }}
            role="menu"
            {...getFloatingProps({
              // Pressing tab dismisses the menu due to the modal
              // focus management on the root menu.
              onKeyDown(event) {
                if (event.key === `Tab`) {
                  setOpen(false);
                }
              },
            })}
          >
            <div className={classNames(`h-popover__body`, bodyClassName)}>
              <div className="h-popover__body__content">{children}</div>
              {closeInPopover ? (
                <>
                  <Button
                    className="h-popover__close"
                    variant="border-hover"
                    size="xs"
                    square
                    style={{ marginTop: `-0.25rem` }}
                    onClick={() => setOpen(false)}
                    aria-label="Close popover"
                  >
                    <span className="h-icon-delete" aria-hidden="true"></span>
                  </Button>
                </>
              ) : null}
            </div>
            {arrow ? (
              <div
                className={classNames(`h-popover__arrow`, `h-popover__arrow--${currentPlacement}`)}
                ref={arrowRef}
                style={{
                  left: arrowX != null ? `${arrowX}px` : ``,
                  top: arrowY != null ? `${arrowY}px` : ``,
                  right: ``,
                  bottom: ``,
                  [staticSide]: `-20px`,
                }}
              ></div>
            ) : null}
          </div>
        </FloatingPortal>
      ) : null}
    </>
  );
};

export { Popover };
