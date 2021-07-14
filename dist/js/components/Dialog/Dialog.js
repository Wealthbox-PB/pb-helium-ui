import React, { useEffect, useRef } from "react";
import * as focusTrap from 'focus-trap';
import { useCloseWithEscapeKey } from "../../hooks/useCloseWithEscapeKey";
import { useScrollLock } from "../../hooks/useScrollLock";
import { HeliumDialogPortal } from "./DialogPortal";
import { HeliumDialogHeader } from "./DialogHeader";
import { HeliumDialogBody } from "./DialogBody";
import { HeliumDialogFooter } from "./DialogFooter";
var dialogSelectorPrefix = "h-react-dialog";
var ariaSelectorPrefix = dialogSelectorPrefix + "-aria";
var dialogEl = dialogSelectorPrefix + "__el";
var HeliumDialog = function (_a) {
    var open = _a.open, _b = _a.isModalDialog, isModalDialog = _b === void 0 ? true : _b, size = _a.size, position = _a.position, initialFocusEl = _a.initialFocusEl, closeDialog = _a.closeDialog, submitHandler = _a.submitHandler, _c = _a.hasHeader, hasHeader = _c === void 0 ? true : _c, header = _a.header, headerClass = _a.headerClass, _d = _a.closeInHeader, closeInHeader = _d === void 0 ? true : _d, _e = _a.hasBody, hasBody = _e === void 0 ? true : _e, bodyClass = _a.bodyClass, children = _a.children, _f = _a.hasFooter, hasFooter = _f === void 0 ? true : _f, footer = _a.footer, _g = _a.footerBackground, footerBackground = _g === void 0 ? true : _g;
    var wrapperRef = useRef(null);
    var dialogRef = useRef(null);
    // Should this stuff be in useEffect?
    var dialogSelectorSuffix = Math.floor(Math.random() * 10000);
    var ariaLabelSelector = createSelector(ariaSelectorPrefix, "label", dialogSelectorSuffix);
    var ariaDescriptionSelector = createSelector(ariaSelectorPrefix, "description", dialogSelectorSuffix);
    var uniqueDialogWrapperEl = dialogSelectorPrefix + "-" + dialogSelectorSuffix;
    var uniqueDialogEl = "." + uniqueDialogWrapperEl + " ." + dialogEl;
    var getDialogAriaRole = function (isModalDialog) { return isModalDialog ? "dialog" : "alertdialog"; };
    useScrollLock("html", open);
    useCloseWithEscapeKey(wrapperRef, closeDialog, open);
    useEffect(function () {
        if (document.querySelector(uniqueDialogEl) === null) {
            return;
        }
        else {
            var trapOptions = { allowOutsideClick: true, fallbackFocus: uniqueDialogEl, initialFocus: initialFocusEl };
            var trap_1 = focusTrap.createFocusTrap(uniqueDialogEl, trapOptions);
            trap_1.activate();
            return function () {
                trap_1.deactivate();
            };
        }
        ;
    }, [uniqueDialogEl, initialFocusEl]);
    useEffect(function () {
        var ref = wrapperRef.current;
        ref === null || ref === void 0 ? void 0 : ref.classList.add("h-react-dialog--open");
        return function () { return ref === null || ref === void 0 ? void 0 : ref.classList.remove("h-react-dialog--open"); };
    });
    return (React.createElement(React.Fragment, null, open &&
        React.createElement(HeliumDialogPortal, null,
            React.createElement("div", { ref: wrapperRef, className: "h-react-dialog " + uniqueDialogWrapperEl + " " + getDialogSize(size) + " " + getDialogPosition(position), "aria-modal": "true", role: "dialog" },
                React.createElement("div", { className: "h-react-dialog__backdrop", onClick: closeDialog }),
                React.createElement("div", { ref: dialogRef, tabIndex: -1, className: dialogEl, role: getDialogAriaRole(isModalDialog), "aria-labelledby": ariaLabelSelector, "aria-describedby": ariaDescriptionSelector },
                    hasHeader &&
                        React.createElement(HeliumDialogHeader, { headerClass: headerClass, isModalDialog: isModalDialog, closeDialog: closeDialog, closeInHeader: closeInHeader, ariaLabelSelector: ariaLabelSelector }, header),
                    hasBody &&
                        React.createElement(HeliumDialogBody, { bodyClass: bodyClass, ariaDescriptionSelector: ariaDescriptionSelector }, children),
                    hasFooter &&
                        React.createElement(HeliumDialogFooter, { closeDialog: closeDialog, submitHandler: submitHandler, footerBackground: footerBackground }, footer))))));
};
function createSelector(prefix, type, suffix) {
    return prefix + "-" + type + "-" + suffix;
}
;
function getDialogSize(size) {
    if (size === void 0) { size = "medium"; }
    var sizeClasses = {
        'small': "sm",
        'medium': "md",
        'large': "lg",
        'full': "full-screen"
    };
    return sizeClasses.hasOwnProperty(size) ? dialogSelectorPrefix + "--" + sizeClasses[size] : "";
}
;
function getDialogPosition(position) {
    if (position === void 0) { position = 'center'; }
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