import { createFocusTrap } from 'focus-trap';
import { useCloseWithEscapeKey } from '../../hooks/useCloseWithEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useState, useEffect, useRef } from 'react';
import { randomString } from '../../helpers/random_string';
import classNames from 'classnames';
var dialogSelectorPrefix = "h-react-dialog";
var ariaSelectorPrefix = dialogSelectorPrefix + "-aria";
export function useDialog(_a) {
    var _b = _a.closeDialog, closeDialog = _b === void 0 ? function () { } : _b, open = _a.open, initialFocusEl = _a.initialFocusEl, returnFocusEl = _a.returnFocusEl, trapPaused = _a.trapPaused, size = _a.size, position = _a.position, dialogRole = _a.dialogRole;
    var _c = useState(trapPaused), isTrapPaused = _c[0], setIsTrapPaused = _c[1];
    var rootRef = useRef(null);
    var dialogRef = useRef(null);
    var dialogSelectorSuffixRef = useRef(randomString());
    var ariaLabelSelector = createSelector(ariaSelectorPrefix, "label", dialogSelectorSuffixRef.current);
    var ariaDescriptionSelector = createSelector(ariaSelectorPrefix, "description", dialogSelectorSuffixRef.current);
    var uniqueDialogRootEl = dialogSelectorPrefix + "-" + dialogSelectorSuffixRef.current;
    useScrollLock("html", open);
    useCloseWithEscapeKey(rootRef, closeDialog, open);
    useEffect(function () {
        setIsTrapPaused(trapPaused);
    }, [trapPaused]);
    useEffect(function () {
        if (!dialogRef.current) {
            return;
        }
        var trapOptions = {
            allowOutsideClick: true,
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
        ref === null || ref === void 0 ? void 0 : ref.classList.add("h-react-dialog--open");
        return function () { return ref === null || ref === void 0 ? void 0 : ref.classList.remove("h-react-dialog--open"); };
    });
    function getRootProps() {
        return {
            ref: rootRef,
            className: classNames("h-react-dialog", uniqueDialogRootEl, getDialogSize(size), getDialogPosition(position)),
            role: dialogRole,
            'aria-modal': true,
            'aria-labelledby': ariaLabelSelector,
            'aria-describedby': ariaDescriptionSelector,
        };
    }
    return {
        getRootProps: getRootProps,
        dialogRef: dialogRef,
        ariaLabelSelector: ariaLabelSelector,
        ariaDescriptionSelector: ariaDescriptionSelector,
    };
}
function createSelector(prefix, type, suffix) {
    return prefix + "-" + type + "-" + suffix;
}
function getDialogSize(size) {
    if (size === void 0) { size = "medium"; }
    var sizeClasses = {
        small: "sm",
        medium: "md",
        large: "lg",
        full: "full-screen",
    };
    return Object.prototype.hasOwnProperty.call(sizeClasses, size)
        ? dialogSelectorPrefix + "--" + sizeClasses[size]
        : "";
}
function getDialogPosition(position) {
    if (position === void 0) { position = "center"; }
    var getPositionClass = function (axis, position) {
        return position === "center" ? "center-" + axis : position;
    };
    var _a = position.toLowerCase().split(" "), y = _a[0], x = _a[1];
    if (!x) {
        return dialogSelectorPrefix + "--" + y;
    }
    else {
        return dialogSelectorPrefix + "--" + getPositionClass("y", y) + " " + dialogSelectorPrefix + "--" + getPositionClass("x", x);
    }
}
//# sourceMappingURL=useDialog.js.map