var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { useDialog } from './useDialog';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogContext } from './DialogContext';
import classNames from 'classnames';
var ModalDialog = function (_a) {
    var _b = _a.backdrop, backdrop = _b === void 0 ? true : _b, backdropClassName = _a.backdropClassName, children = _a.children, closeDialog = _a.closeDialog, dialogClassName = _a.dialogClassName, initialFocusEl = _a.initialFocusEl, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size, _c = _a.trapPaused, trapPaused = _c === void 0 ? false : _c;
    var _d = useDialog({
        backdrop: backdrop,
        closeDialog: closeDialog,
        dialogClassName: dialogClassName,
        dialogRole: "dialog",
        initialFocusEl: initialFocusEl,
        open: open,
        position: position,
        returnFocusEl: returnFocusEl,
        size: size,
        trapPaused: trapPaused,
    }), getRootProps = _d.getRootProps, getDialogProps = _d.getDialogProps, ariaLabelSelector = _d.ariaLabelSelector, ariaDescriptionSelector = _d.ariaDescriptionSelector;
    return (React.createElement(React.Fragment, null, open ? (React.createElement(DialogContext.Provider, { value: { ariaLabelSelector: ariaLabelSelector, ariaDescriptionSelector: ariaDescriptionSelector, closeDialog: closeDialog } },
        React.createElement(Portal, { className: "h-dialog-portal" },
            React.createElement("div", { className: classNames("h-dialog-wrapper", { 'h-pointer-events-none': !backdrop }) },
                React.createElement("div", __assign({}, getRootProps()),
                    backdrop ? React.createElement(DialogBackdrop, { className: backdropClassName }) : null,
                    React.createElement("div", __assign({}, getDialogProps()), children)))))) : null));
};
export { ModalDialog };
//# sourceMappingURL=ModalDialog.js.map