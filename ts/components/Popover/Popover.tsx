/* eslint-disable max-len */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  arrow as middlewareArrow,
  autoUpdate,
  flip,
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
import { Button } from '../Button';
import { Portal, PortalProps } from '../Portal';

interface RenderOpenerProps {
  ref: (node: ReferenceType | null) => void;
  onClick?: (e: any) => void;
  onKeyPress?: (e: any) => void;
}

interface PopoverProps {
  /** Content for the popover. */
  children: JSX.Element | JSX.Element[];
  /** The popover opener element. Use the destructured "ref" and "...props" to spread them onto the
   * opener element */
  renderOpener: (props: RenderOpenerProps) => JSX.Element | void;
  /** Controls whether the popover should have an arrow or not. */
  arrow?: boolean;
  /** Adds class names to the popover body element. */
  bodyClassName?: string;
  /** Adds class names to the popover element. */
  className?: string;
  /** Controls whether the popover should be dismissible by clicking off of it, or using the `esc`
   * key. */
  dismissible?: boolean;
  /** Controls whether the popover should flip it's orientation based on the available space in the browser
   * window */
  flip?: boolean;
  /** Add distance between the reference and floating element */
  offset?: number;
  /** Callback function when the popover is closed */
  onClose?: () => void;
  /** Callback function when the popover is opened */
  onOpen?: () => void;
  /** Controls whether the popover is open or not. */
  open?: boolean;
  openOnLoad?: boolean;
  /** Controls the placement of the popover. */
  placement?: Placement;
  /** Props passed into the Portal element. */
  portalProps?: Omit<PortalProps, `children`>;
  /** Controls whether the popover should have a close button or not. */
  showCloseButton?: boolean;
  /** Controls the size of the popover. */
  size?: `sm` | `md` | `lg` | `xl`;
  /** Controls the color theme of the popover. */
  theme?: `light` | `dark` | `primary`;
  /** Controls the open trigger of the popover. */
  trigger?: `click` | `hover`;
}

const Popover = ({
  renderOpener,
  placement = `top`,
  children,
  trigger = `hover`,
  arrow = true,
  open: openProp,
  dismissible = true,
  flip: flipProp = true,
  openOnLoad = false,
  size,
  theme = `light`,
  className,
  bodyClassName,
  showCloseButton,
  offset: offsetProp = 8,
  onOpen = () => {},
  onClose = () => {},
  portalProps,
}: PopoverProps) => {
  const [internalOpenState, setInternalOpenState] = useState(openOnLoad || openProp);
  const previousOpenState = useRef(internalOpenState);
  const onOpenCallback = useCallback(onOpen, [onOpen]);
  const onCloseCallback = useCallback(onClose, [onClose]);
  const arrowRef = useRef(null);
  const arrowElHeight = 11;

  useEffect(() => {
    setInternalOpenState(openProp);
  }, [openProp]);

  useEffect(() => {
    if (previousOpenState.current !== internalOpenState) {
      internalOpenState ? onOpenCallback?.() : onCloseCallback?.();
    }
    previousOpenState.current = internalOpenState;
  }, [internalOpenState, onOpenCallback, onCloseCallback]);

  const {
    x,
    y,
    refs: { setReference, setFloating },
    strategy,
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    placement: currentPlacement,
  } = useFloating({
    open: internalOpenState,
    whileElementsMounted: autoUpdate,
    placement,
    strategy: `absolute`,
    middleware: [
      offset(offsetProp + (arrow ? arrowElHeight : 0)),
      flip({ mainAxis: flipProp }),
      shift({ padding: 4, limiter: limitShift() }),
      middlewareArrow({ element: arrowRef, padding: 4 }),
    ],
    onOpenChange: (open) => {
      setInternalOpenState(open);
    },
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useDismiss(context, { enabled: dismissible }),
    useHover(context, {
      enabled: showCloseButton === true && internalOpenState ? false : trigger === `hover` ? true : false,
      handleClose: safePolygon(),
    }),
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
            setInternalOpenState(!internalOpenState);
            e.stopPropagation();
            // Normalize button focus while clicking on Safari.
            (e.currentTarget as HTMLButtonElement).focus();
          },
          onKeyPress(e) {
            // This stops propagation up to the parent onKeyPress, which then triggers both the onKeyPress and
            // the onClick because buttons trigger key presses as clicks
            e.stopPropagation();
          },
          open: internalOpenState,
          tabIndex: 0,
        }),
      })}
      {isMounted ? (
        <Portal
          className={classNames(`h-floating-ui h-floating-ui--popovers`, portalProps?.className)}
          selector={portalProps?.selector}
        >
          <div
            ref={setFloating}
            className={classNames(
              `h-popover`,
              { [`h-popover--${size}`]: size },
              { [`h-popover--${theme}`]: theme },
              className,
            )}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              ...styles,
            }}
            role="menu"
            {...getFloatingProps()}
          >
            <div className={classNames(`h-popover__body`, bodyClassName)}>
              <div className="h-popover__body__content">{children}</div>
              {showCloseButton ? (
                <>
                  <Button
                    className="h-popover__close"
                    variant="border-hover"
                    size="xs"
                    square
                    style={{ marginTop: `-0.25rem` }}
                    onClick={() => setInternalOpenState(false)}
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
        </Portal>
      ) : null}
    </>
  );
};

export { Popover };
