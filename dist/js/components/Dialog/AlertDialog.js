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
import { DialogPortal } from './DialogPortal';
import { DialogBackdrop } from './DialogBackdrop';
import { useDialog } from './useDialog';
import { DialogContext } from './DialogContext';
export var AlertDialog = function (_a) {
    var open = _a.open, size = _a.size, position = _a.position, initialFocusEl = _a.initialFocusEl, returnFocusEl = _a.returnFocusEl, leastDestructiveRef = _a.leastDestructiveRef, children = _a.children, dialogClassName = _a.dialogClassName, backdropClassName = _a.backdropClassName;
    // "alertdialogs usually do not have header close buttons, so we check if it's a modal, if it has a
    //   modal close function to actually close it, AND we also allow consumers to potentially remove the close
    //   from the header if they want it to appear as an alert and still keep the role="dialog". This is
    //   because, the role="alertdialog" is only when an alert, error, or warning occurs. In other words, when a
    //   dialog's information and controls require the user's immediate attention alertdialog should be used
    //   instead of dialog.
    var closeDialog = function () { };
    var _b = useDialog({
        closeDialog: closeDialog,
        open: open,
        initialFocusEl: initialFocusEl,
        returnFocusEl: returnFocusEl,
        size: size || "small",
        position: position,
        dialogClassName: dialogClassName,
        trapPaused: false,
        dialogRole: "alertdialog",
        backdrop: true,
    }), getRootProps = _b.getRootProps, getDialogProps = _b.getDialogProps, ariaLabelSelector = _b.ariaLabelSelector, ariaDescriptionSelector = _b.ariaDescriptionSelector;
    useEffect(function () {
        var _a;
        (_a = leastDestructiveRef === null || leastDestructiveRef === void 0 ? void 0 : leastDestructiveRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [leastDestructiveRef]);
    return (React.createElement(React.Fragment, null, open ? (React.createElement(DialogContext.Provider, { value: { ariaLabelSelector: ariaLabelSelector, ariaDescriptionSelector: ariaDescriptionSelector, closeDialog: closeDialog } },
        React.createElement(DialogPortal, null,
            React.createElement("div", __assign({}, getRootProps()),
                React.createElement(DialogBackdrop, { className: backdropClassName, closeDialog: closeDialog }),
                React.createElement("div", __assign({}, getDialogProps()), children))))) : null));
};
//# sourceMappingURL=AlertDialog.js.map