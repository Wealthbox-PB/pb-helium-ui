import React, { cloneElement, useRef, useState } from 'react';
import {
  arrow as middlewareArrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';
import type { Boundary, Placement } from '@floating-ui/react';
import classNames from 'classnames';
import Parser from 'html-react-parser';
import { Portal, PortalProps } from './Portal';

interface TooltipProps {
  /** Element that is wrapped in the tooltip. */
  children: JSX.Element;
  /** Content for the tooltip. */
  title: string;
  /** Controls whether the tooltip should have an arrow or not. */
  arrow?: boolean;
  /** Set the clipping element of the tooltip. */
  boundary?: string;
  /** Callback function when the tooltip is closed */
  onClose?: () => void;
  /** Callback function when the tooltip is opened */
  onOpen?: () => void;
  /** Controls whether the tooltip is open or not. */
  open?: boolean;
  /** Controls the placement of the tooltip. */
  placement?: Placement;
  /** Props passed into the Portal element. */
  portalProps?: Omit<PortalProps, `children`>;
  /** Controls the width of the tooltip. */
  width?: `base` | `wide` | `full`;
}

export const Tooltip = ({
  children,
  title,
  placement = `top`,
  width = `base`,
  arrow = true,
  boundary,
  open = false,
  onOpen,
  onClose,
  portalProps,
}: TooltipProps) => {
  const [hovered, setHovered] = useState(false);
  const arrowRef = useRef(null);

  const {
    x,
    y,
    refs: { setReference, setFloating },
    strategy,
    context,
    placement: currentPlacement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    placement,
    open: open || hovered,
    onOpenChange: (open) => {
      setHovered(open);
      open ? onOpen?.() : onClose?.();
    },
    middleware: [
      offset(8),
      flip({
        boundary: boundary ? (document.querySelector(boundary) as Boundary) : `clippingAncestors`,
      }),
      shift({ padding: 4 }),
      middlewareArrow({ element: arrowRef, padding: 4 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: `tooltip` }),
    useDismiss(context),
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
      {cloneElement(children, getReferenceProps({ ref: setReference, ...children.props }))}
      {isMounted ? (
        <Portal
          className={classNames(`h-floating-ui h-floating-ui--tooltips`, portalProps?.className)}
          {...portalProps}
        >
          <div
            {...getFloatingProps({
              ref: setFloating,
              className: classNames(`h-tooltip`, { [`h-tooltip--${width}`]: width }),
              style: {
                position: strategy,
                top: y ?? ``,
                left: x ?? ``,
                ...styles,
              },
            })}
          >
            {Parser(title)}
            {arrow ? (
              <div
                className={classNames(`h-tooltip__arrow`, `h-tooltip__arrow--${currentPlacement}`)}
                ref={arrowRef}
                style={{
                  left: arrowX != null ? `${arrowX}px` : ``,
                  top: arrowY != null ? `${arrowY}px` : ``,
                  right: ``,
                  bottom: ``,
                  [staticSide]: `-6px`,
                }}
              ></div>
            ) : null}
          </div>
        </Portal>
      ) : null}
    </>
  );
};
