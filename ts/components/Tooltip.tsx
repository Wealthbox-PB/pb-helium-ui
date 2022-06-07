import React, { cloneElement, useRef, useState } from 'react';
import {
  offset,
  flip,
  arrow,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss,
  useTransitionStyles,
  Placement,
  Boundary,
} from '@floating-ui/react';
import classNames from 'classnames';
import Parser from 'html-react-parser';
import { Portal } from './Portal';

interface TooltipProps {
  title: string;
  hideArrow?: boolean;
  placement?: Placement;
  children: JSX.Element;
  boundary?: string;
  width?: null | `lg` | `full`;
}

export const Tooltip = ({
  children,
  title,
  placement = `top`,
  width = null,
  hideArrow = false,
  boundary,
}: TooltipProps) => {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    placement: currentPlacement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(8),
      flip({
        boundary: boundary ? (document.querySelector(boundary) as Boundary) : `clippingAncestors`,
      }),
      shift({ padding: 4 }),
      arrow({ element: arrowRef, padding: 8 }),
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
      {cloneElement(children, getReferenceProps({ ref: reference, ...children.props }))}
      {open && isMounted ? (
        <Portal className="h-floating-ui h-floating-ui--tooltips">
          <div
            {...getFloatingProps({
              ref: floating,
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
            {!hideArrow && (
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
            )}
          </div>
        </Portal>
      ) : null}
    </>
  );
};
