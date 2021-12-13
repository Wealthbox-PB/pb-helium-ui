import React, { useState, useEffect, useRef } from 'react';
import { createFocusTrap } from 'focus-trap';
import { useCloseWithEscapeKey } from '../../hooks/useCloseWithEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import { HeliumDialogPortal } from './DialogPortal';
import { HeliumDialogHeader } from './DialogHeader';
import { HeliumDialogBody } from './DialogBody';
import { HeliumDialogFooter } from './DialogFooter';
import classNames from 'classnames';

interface HeliumDialogProps {
  open: boolean;
  isModalDialog?: boolean;
  size?: string;
  position?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  closeDialog: () => void;
  submitHandler?: () => void;
  header?: string | JSX.Element[] | JSX.Element;
  headerClass?: string;
  closeInHeader?: boolean;
  bodyClass?: string;
  children: string | JSX.Element[] | JSX.Element;
  hasFooter?: boolean;
  footer?: string | JSX.Element[] | JSX.Element;
  footerBackground?: boolean;
  trapPaused?: boolean;
  dialogElClass?: string;
}

const dialogSelectorPrefix = `h-react-dialog`;
const ariaSelectorPrefix = `${dialogSelectorPrefix}-aria`;
const dialogEl = `${dialogSelectorPrefix}__el`;

const HeliumDialog = ({
  open,
  isModalDialog = true,
  size,
  position,
  initialFocusEl,
  returnFocusEl,
  closeDialog,
  submitHandler,
  header,
  headerClass,
  closeInHeader = true,
  bodyClass,
  children,
  hasFooter = true,
  footer,
  footerBackground = true,
  trapPaused = false,
  dialogElClass,
}: HeliumDialogProps) => {
  const [isTrapPaused, setIsTrapPaused] = useState<boolean>(trapPaused);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogSelectorSuffixRef = useRef<string>(
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  );

  const ariaLabelSelector = createSelector(ariaSelectorPrefix, `label`, dialogSelectorSuffixRef.current);
  const ariaDescriptionSelector = createSelector(
    ariaSelectorPrefix,
    `description`,
    dialogSelectorSuffixRef.current
  );
  const uniqueDialogWrapperEl = `${dialogSelectorPrefix}-${dialogSelectorSuffixRef.current}`;
  const uniqueDialogEl = `.${uniqueDialogWrapperEl} .${dialogEl}`;
  const getDialogAriaRole = (isModalDialog: boolean): string => (isModalDialog ? `dialog` : `alertdialog`);

  useScrollLock(`html`, open);
  useCloseWithEscapeKey(wrapperRef, closeDialog, open);

  useEffect(() => {
    setIsTrapPaused(trapPaused);
  }, [trapPaused]);

  useEffect(() => {
    if (document.querySelector(uniqueDialogEl) === null) {
      return;
    } else {
      const trapOptions = {
        allowOutsideClick: true,
        fallbackFocus: uniqueDialogEl,
        initialFocus: initialFocusEl,
        setReturnFocus: returnFocusEl,
      };
      const trap = createFocusTrap(uniqueDialogEl, trapOptions);
      trap.activate();
      if (isTrapPaused) {
        trap.pause();
      } else {
        trap.unpause();
      }
      return () => {
        trap.deactivate();
      };
    }
  }, [uniqueDialogEl, initialFocusEl, returnFocusEl, open, isTrapPaused]);

  useEffect(() => {
    const ref = wrapperRef.current;
    ref?.classList.add(`h-react-dialog--open`);
    return () => ref?.classList.remove(`h-react-dialog--open`);
  });

  return (
    <>
      {open && (
        <HeliumDialogPortal>
          <div
            ref={wrapperRef}
            className={classNames(
              `h-react-dialog`,
              uniqueDialogWrapperEl,
              getDialogSize(size),
              getDialogPosition(position)
            )}
            role={getDialogAriaRole(isModalDialog)}
            aria-modal="true"
            aria-labelledby={ariaLabelSelector}
            aria-describedby={ariaDescriptionSelector}
          >
            <button
              type="button"
              className="h-react-dialog__backdrop"
              onClick={closeDialog}
              aria-label="Close Dialog"
            ></button>
            <div ref={dialogRef} tabIndex={-1} className={classNames(dialogEl, dialogElClass)}>
              {header && (
                <HeliumDialogHeader
                  headerClass={headerClass}
                  isModalDialog={isModalDialog}
                  closeDialog={closeDialog}
                  closeInHeader={closeInHeader}
                  ariaLabelSelector={ariaLabelSelector}
                >
                  {header}
                </HeliumDialogHeader>
              )}
              <HeliumDialogBody bodyClass={bodyClass} ariaDescriptionSelector={ariaDescriptionSelector}>
                {children}
              </HeliumDialogBody>
              {hasFooter && (
                <HeliumDialogFooter
                  closeDialog={closeDialog}
                  submitHandler={submitHandler}
                  footerBackground={footerBackground}
                >
                  {footer}
                </HeliumDialogFooter>
              )}
            </div>
          </div>
        </HeliumDialogPortal>
      )}
    </>
  );
};

function createSelector(prefix: string, type: string | null, suffix: string | number | null): string {
  return `${prefix}-${type}-${suffix}`;
}

function getDialogSize(size = `medium`): string {
  const sizeClasses: { [key: string]: string } = {
    small: `sm`,
    medium: `md`,
    large: `lg`,
    full: `full-screen`,
  };
  return Object.prototype.hasOwnProperty.call(sizeClasses, size)
    ? `${dialogSelectorPrefix}--${sizeClasses[size]}`
    : ``;
}

function getDialogPosition(position: string = `center`): string {
  const getPositionClass = (axis: string, position: string) => {
    return position === `center` ? `center-${axis}` : position;
  };

  const [y, x] = position.toLowerCase().split(` `);

  if (!x) {
    return `${dialogSelectorPrefix}--${y}`;
  } else {
    return `${dialogSelectorPrefix}--${getPositionClass(`y`, y)} ${dialogSelectorPrefix}--${getPositionClass(
      `x`,
      x
    )}`;
  }
}

export { HeliumDialog };
