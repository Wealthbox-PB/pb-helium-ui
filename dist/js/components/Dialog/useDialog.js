import { createFocusTrap } from 'focus-trap';
import { useCloseWithEscapeKey } from '../../hooks/useCloseWithEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useState, useEffect, useRef, useCallback } from 'react';
import { randomString } from '../../helpers/random_string';
import classNames from 'classnames';
var rootDialogClassName = "h-dialog";
var ariaSelectorPrefix = rootDialogClassName + "-aria";
var sizeClasses = {
    small: "sm",
    medium: "md",
    large: "lg",
    full: "full-screen",
};
export function useDialog(_a) {
    var backdrop = _a.backdrop, _b = _a.closeDialog, closeDialog = _b === void 0 ? function () { } : _b, dialogClassName = _a.dialogClassName, dialogRole = _a.dialogRole, initialFocusEl = _a.initialFocusEl, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size, trapPaused = _a.trapPaused;
    var _c = useState(trapPaused), isTrapPaused = _c[0], setIsTrapPaused = _c[1];
    var rootRef = useRef(null);
    var dialogRef = useRef(null);
    var uniqueSuffixRef = useRef(randomString());
    var ariaLabelSelector = createSelector(ariaSelectorPrefix, "label", uniqueSuffixRef.current);
    var ariaDescriptionSelector = createSelector(ariaSelectorPrefix, "description", uniqueSuffixRef.current);
    useScrollLock(open && backdrop);
    useCloseWithEscapeKey(rootRef, closeDialog, open);
    useEffect(function () {
        setIsTrapPaused(trapPaused);
    }, [trapPaused]);
    useEffect(function () {
        if (!dialogRef.current) {
            return;
        }
        if (isTrapPaused) {
            return;
        }
        var trapOptions = {
            allowOutsideClick: true,
            escapeDeactivates: false,
            fallbackFocus: dialogRef.current,
            initialFocus: initialFocusEl,
            setReturnFocus: returnFocusEl,
        };
        var trap = createFocusTrap(dialogRef.current, trapOptions);
        trap.activate();
        if (isTrapPaused) {
            trap.pause();
        }
        else {
            trap.unpause();
        }
        return function () {
            trap.deactivate();
        };
    }, [returnFocusEl, open, isTrapPaused, initialFocusEl]);
    useEffect(function () {
        var ref = rootRef.current;
        ref === null || ref === void 0 ? void 0 : ref.classList.add(rootDialogClassName + "--open");
        return function () { return ref === null || ref === void 0 ? void 0 : ref.classList.remove(rootDialogClassName + "--open"); };
    });
    var getRootProps = useCallback(function () {
        var _a;
        return {
            ref: rootRef,
            className: classNames(rootDialogClassName, rootDialogClassName + "-" + uniqueSuffixRef.current, getDialogSize(size), getDialogPosition(position), (_a = {},
                _a[rootDialogClassName + "--backdrop-none"] = !backdrop,
                _a)),
            role: dialogRole,
            'aria-modal': true,
            'aria-labelledby': ariaLabelSelector,
            'aria-describedby': ariaDescriptionSelector,
        };
    }, [ariaDescriptionSelector, ariaLabelSelector, backdrop, dialogRole, position, size]);
    var getDialogProps = useCallback(function () {
        return {
            ref: dialogRef,
            tabIndex: -1,
            className: classNames(rootDialogClassName + "__el", dialogClassName),
        };
    }, [dialogClassName]);
    return {
        getRootProps: getRootProps,
        getDialogProps: getDialogProps,
        ariaLabelSelector: ariaLabelSelector,
        ariaDescriptionSelector: ariaDescriptionSelector,
    };
}
function createSelector() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return parts.join("-");
}
var sizeKeys = Object.keys(sizeClasses);
function getDialogSize(size) {
    if (size === void 0) { size = "medium"; }
    if (sizeKeys.includes(size)) {
        return rootDialogClassName + "--" + sizeClasses[size];
    }
    return "";
}
function getDialogPosition(position) {
    if (position === void 0) { position = "center"; }
    var getPositionClass = function (axis, position) {
        return position === "center" ? "center-" + axis : position;
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
    var _a = position.toLowerCase().split(" "), y = _a[0], x = _a[1];
    if (!x) {
        return rootDialogClassName + "--" + y;
    }
    else {
        return rootDialogClassName + "--" + getPositionClass("y", y) + " " + rootDialogClassName + "--" + getPositionClass("x", x);
    }
}
//# sourceMappingURL=useDialog.js.map