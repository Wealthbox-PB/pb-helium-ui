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
const modalDialogEl = `h-react-dialog__el`;

const createSelector = (
    prefix: string,
    type: string | null,
    suffix: string | number | null
  ): string => {
  return `${prefix}-${type}-${suffix}`;
};

const setDialogSize = (size?: string) => {
  if (size) {
    switch(size.toLowerCase()) {
      case `small`:
        return `${dialogSelectorPrefix}--sm`;
      case `large`:
        return `${dialogSelectorPrefix}--lg`;
      case `full`:
        return `${dialogSelectorPrefix}--full-screen`;
      default:
        return ``;
    }
  } else {
    return ``;
  }
}

const setDialogPosition = (position?: string) => {
  if (position) {
    switch(position.toLocaleLowerCase()) {
      case `top`:
        return `${dialogSelectorPrefix}--top`;
      case `right`:
        return `${dialogSelectorPrefix}--right`;
      case `bottom`:
        return `${dialogSelectorPrefix}--bottom`;
      case `left`:
        return `${dialogSelectorPrefix}--bottom`;
      case `top right`:
        return `${dialogSelectorPrefix}--top ${dialogSelectorPrefix}--right`;
      case `top left`:
        return `${dialogSelectorPrefix}--top ${dialogSelectorPrefix}--left`;
      case `top center`:
        return `${dialogSelectorPrefix}--top ${dialogSelectorPrefix}--center`;
      case `center center`:
        return `${dialogSelectorPrefix}--center-y ${dialogSelectorPrefix}--center-x`;
      case `center right`:
        return `${dialogSelectorPrefix}--center-y ${dialogSelectorPrefix}--right`;
      case `center left`:
        return `${dialogSelectorPrefix}--center-y ${dialogSelectorPrefix}--left`;
      case `bottom right`:
        return `${dialogSelectorPrefix}--bottom ${dialogSelectorPrefix}--right`;
      case `bottom left`:
        return `${dialogSelectorPrefix}--bottom ${dialogSelectorPrefix}--left`;
      case `bottom center`:
        return `${dialogSelectorPrefix}--bottom ${dialogSelectorPrefix}--center`;
      default:
        return ``;
    }
  }
  else {
    return ``;
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
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const modalDialogRef = useRef<HTMLDivElement>(null);

  // Should this stuff be in useEffect?
  const dialogSelectorSuffix = Math.floor(Math.random() * 10000);
  const dialogSelectorId = `${dialogSelectorPrefix}-${dialogSelectorSuffix}`;
  const ariaLabelSelector = createSelector(ariaSelectorPrefix, `label`, dialogSelectorSuffix);
  const ariaDescriptionSelector = createSelector(ariaSelectorPrefix, `description`, dialogSelectorSuffix);
  const modalDialogElSelector = `.${dialogSelectorId} .${modalDialogEl}`;
  const setDialogAriaRole = (isModalDialog: boolean): string => isModalDialog ? `dialog` : `alertdialog`;

  useScrollLock(`html`, open);
  useCloseWithEscapeKey(modalWrapperRef, closeDialog, open);

  useEffect(() => {
    // If the modal dialog element does not exist yet, return
    if (document.querySelector(modalDialogElSelector) === null) {
      return
    }
    else {
      const trapOptions = { allowOutsideClick: true, fallbackFocus: modalDialogElSelector, initialFocus: initialFocusEl };
      const trap = focusTrap.createFocusTrap(modalDialogElSelector, trapOptions);
      trap.activate();
      return () => {
        trap.deactivate()
      };
    };
  })

  useEffect(() => {
    const ref = modalWrapperRef.current;
    ref?.classList.add(`h-react-dialog--open`);
    return () => {
      ref?.classList.remove(`h-react-dialog--open`);
    }
  });

  return (
    <>
      { open &&
        <HeliumDialogPortal>
          <div ref={modalWrapperRef}
               className={`h-react-dialog ${dialogSelectorId} ${setDialogSize(size)} ${setDialogPosition(position)}`}
               aria-modal="true"
               role="dialog"
          >
            <div className="h-react-dialog__backdrop" onClick={() => closeDialog()}></div>
            <div ref={modalDialogRef}
                 tabIndex={-1}
                 className={modalDialogEl}
                 role={setDialogAriaRole(isModalDialog)}
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
