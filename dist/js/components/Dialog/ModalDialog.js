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
var ModalDialog = function (_a) {
    var open = _a.open, size = _a.size, position = _a.position, initialFocusEl = _a.initialFocusEl, returnFocusEl = _a.returnFocusEl, closeDialog = _a.closeDialog, children = _a.children, _b = _a.trapPaused, trapPaused = _b === void 0 ? false : _b, dialogClassName = _a.dialogClassName, _c = _a.backdrop, backdrop = _c === void 0 ? true : _c, backdropClassName = _a.backdropClassName;
    var _d = useDialog({
        closeDialog: closeDialog,
        open: open,
        initialFocusEl: initialFocusEl,
        returnFocusEl: returnFocusEl,
        trapPaused: trapPaused,
        size: size,
        position: position,
        dialogClassName: dialogClassName,
        dialogRole: "dialog",
        backdrop: backdrop,
    }), getRootProps = _d.getRootProps, getDialogProps = _d.getDialogProps, ariaLabelSelector = _d.ariaLabelSelector, ariaDescriptionSelector = _d.ariaDescriptionSelector;
    return (React.createElement(React.Fragment, null, open ? (React.createElement(DialogContext.Provider, { value: { ariaLabelSelector: ariaLabelSelector, ariaDescriptionSelector: ariaDescriptionSelector, closeDialog: closeDialog } },
        React.createElement(Portal, { className: "h-dialog-portal" },
            React.createElement("div", __assign({}, getRootProps()),
                backdrop ? React.createElement(DialogBackdrop, { className: backdropClassName }) : null,
                React.createElement("div", __assign({}, getDialogProps()), children))))) : null));
};
export { ModalDialog };
//# sourceMappingURL=ModalDialog.js.map