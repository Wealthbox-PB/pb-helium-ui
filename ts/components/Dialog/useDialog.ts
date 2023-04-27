import { createFocusTrap } from 'focus-trap';
import { useCloseWithEscapeKey } from '../../hooks/useCloseWithEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useState, useEffect, useRef, useCallback } from 'react';
import { randomString } from '../../helpers/random_string';
import classNames from 'classnames';

const dialogContainerClassname = `h-dialog`;
const ariaSelectorPrefix = `${dialogContainerClassname}-aria`;
const sizeClasses: { [key: string]: string } = {
  small: `sm`,
  medium: `md`,
  large: `lg`,
  xl: `xl`,
  xxl: `xxl`,
  full: `full-screen`,
};

export function useDialog({
  backdrop,
  closeDialog = () => {},
  dialogClassName,
  dialogRole,
  initialFocusEl,
  open,
  position,
  returnFocusEl,
  size,
  trapPaused,
}) {
  const [isTrapPaused, setIsTrapPaused] = useState<boolean>(trapPaused);

  const dialogContainerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const uniqueSuffixRef = useRef<string>(randomString());

  const ariaLabelSelector = createSelector(ariaSelectorPrefix, `label`, uniqueSuffixRef.current);
  const ariaDescriptionSelector = createSelector(ariaSelectorPrefix, `description`, uniqueSuffixRef.current);

  useScrollLock(open && backdrop);
  useCloseWithEscapeKey(dialogContainerRef, closeDialog, open);

  useEffect(() => {
    setIsTrapPaused(trapPaused);
  }, [trapPaused]);

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    if (isTrapPaused) {
      return;
    }

    const trapOptions = {
      allowOutsideClick: true,
      escapeDeactivates: false,
      fallbackFocus: dialogRef.current,
      initialFocus: initialFocusEl,
      setReturnFocus: returnFocusEl,
    };

    const trap = createFocusTrap(dialogRef.current, trapOptions);
    trap.activate();

    if (isTrapPaused) {
      trap.pause();
    } else {
      trap.unpause();
    }
    return () => {
      trap.deactivate();
    };
  }, [returnFocusEl, open, isTrapPaused, initialFocusEl]);

  useEffect(() => {
    const ref = dialogContainerRef.current;
    ref?.classList.add(`${dialogContainerClassname}--open`);
    return () => ref?.classList.remove(`${dialogContainerClassname}--open`);
  });

  const getDialogRootProps = useCallback(() => {
    return {
      className: classNames(`h-dialog-wrapper`, { 'h-pointer-events-none': !backdrop }),
    };
  }, [backdrop]);

  const getDialogContainerProps = useCallback(() => {
    return {
      ref: dialogContainerRef,
      className: classNames(
        dialogContainerClassname,
        `${dialogContainerClassname}-${uniqueSuffixRef.current}`,
        getDialogSize(size),
        getDialogPosition(position),
        {
          [`${dialogContainerClassname}--backdrop-none`]: !backdrop,
        }
      ),
      role: dialogRole,
      'aria-modal': true,
      'aria-labelledby': ariaLabelSelector,
      'aria-describedby': ariaDescriptionSelector,
    };
  }, [ariaDescriptionSelector, ariaLabelSelector, backdrop, dialogRole, position, size]);

  const getDialogProps = useCallback(() => {
    return {
      ref: dialogRef,
      tabIndex: -1,
      className: classNames(`${dialogContainerClassname}__el`, dialogClassName),
    };
  }, [dialogClassName]);

  useEffect(() => {
    const container = dialogContainerRef.current;
    const handleCloseEvent = () => closeDialog();
    container?.addEventListener(`modal:close`, handleCloseEvent);

    return () => container?.removeEventListener(`modal:close`, handleCloseEvent);
  }, [dialogContainerRef, closeDialog]);

  return {
    getDialogRootProps,
    getDialogContainerProps,
    getDialogProps,
    ariaLabelSelector,
    ariaDescriptionSelector,
  };
}

function createSelector(...parts): string {
  return parts.join(`-`);
}

const sizeKeys = Object.keys(sizeClasses);
function getDialogSize(size = `medium`): string {
  if (sizeKeys.includes(size)) {
    return `${dialogContainerClassname}--${sizeClasses[size]}`;
  }
  return ``;
}

function getDialogPosition(position: string = `center`): string {
  const getPositionClass = (axis: string, position: string) => {
    return position === `center` ? `center-${axis}` : position;
  };

  // Test cases, in a loop in the function, via a map
  // "top left" => .h-dialog--top.h-dialog--left
  // "top center" => .h-dialog--top.h-dialog--center-x
  // "top right" => .h-dialog--top.h-dialog--right
  // "center left" => .h-dialog--left.h-dialog--center-y
  // "center center" => .h-dialog--center-y.h-dialog--center-x || .h-dialog--center
  // "center right" => .h-dialog--center-y.h-dialog--right
  // "bottom left" => .h-dialog--bottom.h-dialog--left
  // "bottom center" => .h-dialog--bottom.h-dialog--center-x
  // "bottom right" => .h-dialog--bottom.h-dialog--right

  const [y, x] = position.toLowerCase().split(` `);

  if (!x) {
    return `${dialogContainerClassname}--${y}`;
  } else {
    return `${dialogContainerClassname}--${getPositionClass(
      `y`,
      y
    )} ${dialogContainerClassname}--${getPositionClass(`x`, x)}`;
  }
}
