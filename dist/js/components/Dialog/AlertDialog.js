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
import React, { useEffect } from 'react';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { useDialog } from './useDialog';
import { DialogContext } from './DialogContext';
export var AlertDialog = function (_a) {
    var backdropClassName = _a.backdropClassName, children = _a.children, closeDialog = _a.closeDialog, dialogClassName = _a.dialogClassName, leastDestructiveRef = _a.leastDestructiveRef, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size;
    // alertdialogs usually do not have header close buttons, so we check if it's a modal, if it has a
    // modal close function to actually close it, AND we also allow consumers to potentially remove the close
    // from the header if they want it to appear as an alert and still keep the role="dialog". This is
    // because, the role="alertdialog" is only when an alert, error, or warning occurs. In other words, when a
    // dialog's information and controls require the user's immediate attention alertdialog should be used
    // instead of dialog.
    var _b = useDialog({
        backdrop: true,
        closeDialog: closeDialog,
        dialogClassName: dialogClassName,
        dialogRole: "alertdialog",
        initialFocusEl: undefined,
        open: open,
        position: position,
        returnFocusEl: returnFocusEl,
        size: size || "small",
        trapPaused: false,
    }), getDialogRootProps = _b.getDialogRootProps, getDialogContainerProps = _b.getDialogContainerProps, getDialogProps = _b.getDialogProps, ariaLabelSelector = _b.ariaLabelSelector, ariaDescriptionSelector = _b.ariaDescriptionSelector;
    useEffect(function () {
        var _a;
        (_a = leastDestructiveRef === null || leastDestructiveRef === void 0 ? void 0 : leastDestructiveRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [leastDestructiveRef]);
    return (React.createElement(React.Fragment, null, open ? (React.createElement(DialogContext.Provider, { value: { ariaLabelSelector: ariaLabelSelector, ariaDescriptionSelector: ariaDescriptionSelector, closeDialog: closeDialog } },
        React.createElement(Portal, { className: "h-dialog-portal" },
            React.createElement("div", __assign({}, getDialogRootProps()),
                React.createElement("div", __assign({}, getDialogContainerProps()),
                    React.createElement(DialogBackdrop, { className: backdropClassName, closeDialog: function () { } }),
                    React.createElement("div", __assign({}, getDialogProps()), children)))))) : null));
};
//# sourceMappingURL=AlertDialog.js.map