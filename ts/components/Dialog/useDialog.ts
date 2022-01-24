import { createFocusTrap } from 'focus-trap';
import { useCloseWithEscapeKey } from '../../hooks/useCloseWithEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useState, useEffect, useRef } from 'react';
import { randomString } from '../../helpers/random_string';
import classNames from 'classnames';

const dialogSelectorPrefix = `h-react-dialog`;
const ariaSelectorPrefix = `${dialogSelectorPrefix}-aria`;

export function useDialog({
  closeDialog = () => {},
  open,
  initialFocusEl,
  returnFocusEl,
  trapPaused,
  size,
  position,
  dialogRole,
}) {
  const [isTrapPaused, setIsTrapPaused] = useState<boolean>(trapPaused);

  const rootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogSelectorSuffixRef = useRef<string>(randomString());

  const ariaLabelSelector = createSelector(ariaSelectorPrefix, `label`, dialogSelectorSuffixRef.current);
  const ariaDescriptionSelector = createSelector(
    ariaSelectorPrefix,
    `description`,
    dialogSelectorSuffixRef.current
  );
  const uniqueDialogRootEl = `${dialogSelectorPrefix}-${dialogSelectorSuffixRef.current}`;

  useScrollLock(`html`, open);
  useCloseWithEscapeKey(rootRef, closeDialog, open);

  useEffect(() => {
    setIsTrapPaused(trapPaused);
  }, [trapPaused]);

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    const trapOptions = {
      allowOutsideClick: true,
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
    const ref = rootRef.current;
    ref?.classList.add(`h-react-dialog--open`);
    return () => ref?.classList.remove(`h-react-dialog--open`);
  });

  function getRootProps() {
    return {
      ref: rootRef,
      className: classNames(
        `h-react-dialog`,
        uniqueDialogRootEl,
        getDialogSize(size),
        getDialogPosition(position)
      ),
      role: dialogRole,
      'aria-modal': true,
      'aria-labelledby': ariaLabelSelector,
      'aria-describedby': ariaDescriptionSelector,
    };
  }

  return {
    getRootProps,
    dialogRef,
    ariaLabelSelector,
    ariaDescriptionSelector,
  };
}

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
