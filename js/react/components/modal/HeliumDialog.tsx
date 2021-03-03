import React, { useEffect, useRef } from "react";
import * as focusTrap from 'focus-trap';
import { useCloseWithEscapeKey } from "../../hooks/useCloseWithEscapeKey";
import { useScrollLock } from "../../hooks/useScrollLock";
import { HeliumDialogPortal } from "./HeliumDialogPortal";
import { HeliumDialogHeader } from "./HeliumDialogHeader";
import { HeliumDialogBody } from "./HeliumDialogBody";
import { HeliumDialogFooter } from "./HeliumDialogFooter";

interface HeliumDialogProps {
  open: boolean;
  isModalDialog?: boolean;
  size?: string;
  position?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  closeDialog: () => void;
  submitHandler?: () => void;
  hasHeader?: boolean;
  header?: string | JSX.Element[] | JSX.Element;
  headerClass?: string;
  closeInHeader?: boolean;
  hasBody?: boolean;
  bodyClass?: string;
  children: string | JSX.Element[] | JSX.Element;
  hasFooter?: boolean;
  footer?: string | JSX.Element[] | JSX.Element;
  footerBackground?: boolean;
}

const dialogSelectorPrefix = `h-react-dialog`;
const ariaSelectorPrefix = `h-react-dialog-aria`;
const dialogEl = `h-react-dialog__el`;

const createSelector = (
    prefix: string,
    type: string | null,
    suffix: string | number | null
  ): string => {
  return `${prefix}-${type}-${suffix}`;
};

const getDialogSize = (size = `medium`): string => {
  const sizeClasses: {[key: string]: string} = {
    'small': `sm`,
    'medium': `md`,
    'large': `lg`,
    'full' : `full-screen`
  }
  return sizeClasses.hasOwnProperty(size) ? `${dialogSelectorPrefix}--${sizeClasses[size]}`: ``;
};

const getDialogPosition = (position: string = 'center'): string => {
  const getPositionClass = (axis: string, position: string) => {
    return position === `center` ? `center-${axis}` : position;
  }

  const [y, x] = position.toLowerCase().split(` `);

  if (!x) {
    return `${dialogSelectorPrefix}--${y}`;
  } else {
    return `${dialogSelectorPrefix}--${getPositionClass(`y`, y)} ${dialogSelectorPrefix}--${getPositionClass(`x`, x)}`;
  }
}

const HeliumDialog: React.FC<HeliumDialogProps> = ({
  open,
  isModalDialog = true,
  size,
  position,
  initialFocusEl,
  closeDialog,
  submitHandler,
  hasHeader = true,
  header,
  headerClass,
  closeInHeader = true,
  hasBody = true,
  bodyClass,
  children,
  hasFooter = true,
  footer,
  footerBackground = true
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Should this stuff be in useEffect?
  const dialogSelectorSuffix = Math.floor(Math.random() * 10000);
  const dialogSelectorWithUniqueId = `${dialogSelectorPrefix}-${dialogSelectorSuffix}`;
  const ariaLabelSelector = createSelector(ariaSelectorPrefix, `label`, dialogSelectorSuffix);
  const ariaDescriptionSelector = createSelector(ariaSelectorPrefix, `description`, dialogSelectorSuffix);
  const dialogSelectorEl = `.${dialogSelectorWithUniqueId} .${dialogEl}`;
  const getDialogAriaRole = (isModalDialog: boolean): string => isModalDialog ? `dialog` : `alertdialog`;

  useScrollLock(`html`, open);
  useCloseWithEscapeKey(wrapperRef, closeDialog, open);

  useEffect(() => {
    // If the modal dialog element does not exist yet, return
    if (document.querySelector(dialogSelectorEl) === null) {
      return
    }
    else {
      const trapOptions = { allowOutsideClick: true, fallbackFocus: dialogSelectorEl, initialFocus: initialFocusEl };
      const trap = focusTrap.createFocusTrap(dialogSelectorEl, trapOptions);
      trap.activate();
      return () => {
        trap.deactivate()
      };
    };
  })

  useEffect(() => {
    const ref = wrapperRef.current;
    ref?.classList.add(`h-react-dialog--open`);
    return () => {
      ref?.classList.remove(`h-react-dialog--open`);
    }
  });

  return (
    <>
      { open &&
        <HeliumDialogPortal>
          <div ref={wrapperRef}
               className={`h-react-dialog ${dialogSelectorWithUniqueId} ${getDialogSize(size)} ${getDialogPosition(position)}`}
               aria-modal="true"
               role="dialog"
          >
            <div className="h-react-dialog__backdrop" onClick={() => closeDialog()}></div>
            <div ref={dialogRef}
                 tabIndex={-1}
                 className={dialogEl}
                 role={getDialogAriaRole(isModalDialog)}
                 aria-labelledby={ariaLabelSelector}
                 aria-describedby={ariaDescriptionSelector}
            >
              { hasHeader &&
                <HeliumDialogHeader
                  headerClass={headerClass}
                  isModalDialog={isModalDialog}
                  closeDialog={closeDialog}
                  closeInHeader={closeInHeader}
                  ariaLabelSelector={ariaLabelSelector}
                >
                  {header}
                </HeliumDialogHeader>
              }
              { hasBody &&
                <HeliumDialogBody bodyClass={bodyClass} ariaDescriptionSelector={ariaDescriptionSelector}>
                  {children}
                </HeliumDialogBody>
              }
              { hasFooter &&
                <HeliumDialogFooter
                  closeDialog={closeDialog}
                  submitHandler={submitHandler}
                  footerBackground={footerBackground}
                >
                  {footer}
                </HeliumDialogFooter>
              }
            </div>
          </div>
        </HeliumDialogPortal>
      }
    </>
  )
}

export { HeliumDialog };
