import React, { useEffect, useRef } from 'react';
import { createFocusTrap } from 'focus-trap';
import { useCloseWithEscapeKey } from '../../hooks/useCloseWithEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import { HeliumDialogPortal } from './DialogPortal';
import { HeliumDialogHeader } from './DialogHeader';
import { HeliumDialogBody } from './DialogBody';
import { HeliumDialogFooter } from './DialogFooter';
var dialogSelectorPrefix = "h-react-dialog";
var ariaSelectorPrefix = dialogSelectorPrefix + "-aria";
var dialogEl = dialogSelectorPrefix + "__el";
var HeliumDialog = function (_a) {
    var open = _a.open, _b = _a.isModalDialog, isModalDialog = _b === void 0 ? true : _b, size = _a.size, position = _a.position, initialFocusEl = _a.initialFocusEl, returnFocusEl = _a.returnFocusEl, closeDialog = _a.closeDialog, submitHandler = _a.submitHandler, header = _a.header, headerClass = _a.headerClass, _c = _a.closeInHeader, closeInHeader = _c === void 0 ? true : _c, bodyClass = _a.bodyClass, children = _a.children, _d = _a.hasFooter, hasFooter = _d === void 0 ? true : _d, footer = _a.footer, _e = _a.footerBackground, footerBackground = _e === void 0 ? true : _e;
    var wrapperRef = useRef(null);
    var dialogRef = useRef(null);
    var dialogSelectorSuffixRef = useRef(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    var ariaLabelSelector = createSelector(ariaSelectorPrefix, "label", dialogSelectorSuffixRef.current);
    var ariaDescriptionSelector = createSelector(ariaSelectorPrefix, "description", dialogSelectorSuffixRef.current);
    var uniqueDialogWrapperEl = dialogSelectorPrefix + "-" + dialogSelectorSuffixRef.current;
    var uniqueDialogEl = "." + uniqueDialogWrapperEl + " ." + dialogEl;
    var getDialogAriaRole = function (isModalDialog) { return (isModalDialog ? "dialog" : "alertdialog"); };
    useScrollLock("html", open);
    useCloseWithEscapeKey(wrapperRef, closeDialog, open);
    useEffect(function () {
        if (document.querySelector(uniqueDialogEl) === null) {
            return;
        }
        else {
            var trapOptions = {
                allowOutsideClick: true,
                fallbackFocus: uniqueDialogEl,
                initialFocus: initialFocusEl,
                setReturnFocus: returnFocusEl,
            };
            var trap_1 = createFocusTrap(uniqueDialogEl, trapOptions);
            trap_1.activate();
            return function () {
                trap_1.deactivate();
            };
        }
    }, [uniqueDialogEl, initialFocusEl, returnFocusEl, open]);
    useEffect(function () {
        var ref = wrapperRef.current;
        ref === null || ref === void 0 ? void 0 : ref.classList.add("h-react-dialog--open");
        return function () { return ref === null || ref === void 0 ? void 0 : ref.classList.remove("h-react-dialog--open"); };
    });
    return (React.createElement(React.Fragment, null, open && (React.createElement(HeliumDialogPortal, null,
        React.createElement("div", { ref: wrapperRef, className: "h-react-dialog " + uniqueDialogWrapperEl + " " + getDialogSize(size) + " " + getDialogPosition(position), role: getDialogAriaRole(isModalDialog), "aria-modal": "true", "aria-labelledby": ariaLabelSelector, "aria-describedby": ariaDescriptionSelector },
            React.createElement("button", { type: "button", className: "h-react-dialog__backdrop", onClick: closeDialog, "aria-label": "Close Dialog" }),
            React.createElement("div", { ref: dialogRef, tabIndex: -1, className: dialogEl },
                header && (React.createElement(HeliumDialogHeader, { headerClass: headerClass, isModalDialog: isModalDialog, closeDialog: closeDialog, closeInHeader: closeInHeader, ariaLabelSelector: ariaLabelSelector }, header)),
                React.createElement(HeliumDialogBody, { bodyClass: bodyClass, ariaDescriptionSelector: ariaDescriptionSelector }, children),
                hasFooter && (React.createElement(HeliumDialogFooter, { closeDialog: closeDialog, submitHandler: submitHandler, footerBackground: footerBackground }, footer))))))));
};
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
export { HeliumDialog };
//# sourceMappingURL=Dialog.js.map