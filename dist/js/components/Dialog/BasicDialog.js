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
import { DialogPortal } from './DialogPortal';
import { DialogBackdrop } from './DialogBackdrop';
import { useDialog } from './useDialog';
import { DialogContext } from './DialogContext';
export var BasicDialog = function (_a) {
    var open = _a.open, size = _a.size, position = _a.position, initialFocusEl = _a.initialFocusEl, returnFocusEl = _a.returnFocusEl, _b = _a.closeDialog, closeDialog = _b === void 0 ? function () { } : _b, children = _a.children, _c = _a.trapPaused, trapPaused = _c === void 0 ? false : _c, dialogClassName = _a.dialogClassName, _d = _a.dialogRole, dialogRole = _d === void 0 ? "dialog" : _d, _e = _a.backdrop, backdrop = _e === void 0 ? true : _e, backdropClassName = _a.backdropClassName;
    var _f = useDialog({
        closeDialog: closeDialog,
        open: open,
        initialFocusEl: initialFocusEl,
        returnFocusEl: returnFocusEl,
        trapPaused: trapPaused,
        size: size,
        position: position,
        dialogClassName: dialogClassName,
        dialogRole: dialogRole,
        backdrop: backdrop,
    }), getRootProps = _f.getRootProps, getDialogProps = _f.getDialogProps, ariaLabelSelector = _f.ariaLabelSelector, ariaDescriptionSelector = _f.ariaDescriptionSelector;
    return (React.createElement(React.Fragment, null, open ? (React.createElement(DialogContext.Provider, { value: { ariaLabelSelector: ariaLabelSelector, ariaDescriptionSelector: ariaDescriptionSelector, closeDialog: closeDialog } },
        React.createElement(DialogPortal, null,
            React.createElement("div", __assign({}, getRootProps()),
                backdrop ? React.createElement(DialogBackdrop, { className: backdropClassName }) : null,
                React.createElement("div", __assign({}, getDialogProps()), children))))) : null));
};
//# sourceMappingURL=BasicDialog.js.map