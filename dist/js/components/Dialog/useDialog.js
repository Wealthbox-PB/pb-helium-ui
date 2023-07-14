import { createFocusTrap } from 'focus-trap';
import { useCloseWithEscapeKey } from '../../hooks/useCloseWithEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useState, useEffect, useRef, useCallback } from 'react';
import { randomString } from '../../helpers/random_string';
import classNames from 'classnames';
var dialogContainerClassname = "h-dialog";
var ariaSelectorPrefix = "".concat(dialogContainerClassname, "-aria");
var sizeClasses = {
    small: "sm",
    medium: "md",
    large: "lg",
    xl: "xl",
    xxl: "xxl",
    full: "full-screen",
};
export function useDialog(_a) {
    var backdrop = _a.backdrop, _b = _a.closeDialog, closeDialog = _b === void 0 ? function () { } : _b, dialogClassName = _a.dialogClassName, dialogRole = _a.dialogRole, initialFocusEl = _a.initialFocusEl, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size, trapPaused = _a.trapPaused;
    var _c = useState(trapPaused), isTrapPaused = _c[0], setIsTrapPaused = _c[1];
    var dialogContainerRef = useRef(null);
    var dialogRef = useRef(null);
    var uniqueSuffixRef = useRef(randomString());
    var ariaLabelSelector = createSelector(ariaSelectorPrefix, "label", uniqueSuffixRef.current);
    var ariaDescriptionSelector = createSelector(ariaSelectorPrefix, "description", uniqueSuffixRef.current);
    useScrollLock(open && backdrop);
    useCloseWithEscapeKey(dialogContainerRef, closeDialog, open);
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
        var ref = dialogContainerRef.current;
        ref === null || ref === void 0 ? void 0 : ref.classList.add("".concat(dialogContainerClassname, "--open"));
        return function () { return ref === null || ref === void 0 ? void 0 : ref.classList.remove("".concat(dialogContainerClassname, "--open")); };
    });
    var getDialogRootProps = useCallback(function () {
        return {
            className: classNames("h-dialog-wrapper", { 'h-pointer-events-none': !backdrop }),
        };
    }, [backdrop]);
    var getDialogContainerProps = useCallback(function () {
        var _a;
        return {
            ref: dialogContainerRef,
            className: classNames(dialogContainerClassname, "".concat(dialogContainerClassname, "-").concat(uniqueSuffixRef.current), getDialogSize(size), getDialogPosition(position), (_a = {},
                _a["".concat(dialogContainerClassname, "--backdrop-none")] = !backdrop,
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
            className: classNames("".concat(dialogContainerClassname, "__el"), dialogClassName),
        };
    }, [dialogClassName]);
    useEffect(function () {
        var container = dialogContainerRef.current;
        var handleCloseEvent = function () { return closeDialog(); };
        container === null || container === void 0 ? void 0 : container.addEventListener("modal:close", handleCloseEvent);
        return function () { return container === null || container === void 0 ? void 0 : container.removeEventListener("modal:close", handleCloseEvent); };
    }, [dialogContainerRef, closeDialog, open]);
    return {
        getDialogRootProps: getDialogRootProps,
        getDialogContainerProps: getDialogContainerProps,
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
        return "".concat(dialogContainerClassname, "--").concat(sizeClasses[size]);
    }
    return "";
}
function getDialogPosition(position) {
    if (position === void 0) { position = "center"; }
    var getPositionClass = function (axis, position) {
        return position === "center" ? "center-".concat(axis) : position;
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
        return "".concat(dialogContainerClassname, "--").concat(y);
    }
    else {
        return "".concat(dialogContainerClassname, "--").concat(getPositionClass("y", y), " ").concat(dialogContainerClassname, "--").concat(getPositionClass("x", x));
    }
}
//# sourceMappingURL=useDialog.js.map