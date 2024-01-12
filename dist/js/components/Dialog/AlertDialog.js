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
import React, { useRef, useState, useEffect } from 'react';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { useDialog } from '../../hooks/useDialog';
import { DialogContext } from './DialogContext';
import { CSSTransition } from 'react-transition-group';
export var AlertDialog = function (_a) {
    var _b = _a.animateIn, animateIn = _b === void 0 ? true : _b, _c = _a.animateOut, animateOut = _c === void 0 ? true : _c, backdropClassName = _a.backdropClassName, children = _a.children, closeDialog = _a.closeDialog, dialogClassName = _a.dialogClassName, leastDestructiveRef = _a.leastDestructiveRef, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size;
    // alertdialogs usually do not have header close buttons, so we check if it's a modal, if it has a
    // modal close function to actually close it, AND we also allow consumers to potentially remove the close
    // from the header if they want it to appear as an alert and still keep the role="dialog". This is
    // because, the role="alertdialog" is only when an alert, error, or warning occurs. In other words, when a
    // dialog's information and controls require the user's immediate attention alertdialog should be used
    // instead of dialog.
    var _d = useDialog({
        animationDirection: "up",
        animationDistance: "md",
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
    }), getDialogRootProps = _d.getDialogRootProps, getDialogContainerProps = _d.getDialogContainerProps, getDialogProps = _d.getDialogProps, ariaLabelSelector = _d.ariaLabelSelector, ariaDescriptionSelector = _d.ariaDescriptionSelector;
    useEffect(function () {
        var _a;
        (_a = leastDestructiveRef === null || leastDestructiveRef === void 0 ? void 0 : leastDestructiveRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [leastDestructiveRef]);
    var timeout = 250;
    var nodeRef = useRef(null);
    var _e = useState(false), visible = _e[0], setVisible = _e[1];
    useEffect(function () {
        if (open) {
            setVisible(true);
        }
    }, [open]);
    return (React.createElement(React.Fragment, null, open || visible ? (React.createElement(DialogContext.Provider, { value: { ariaLabelSelector: ariaLabelSelector, ariaDescriptionSelector: ariaDescriptionSelector, closeDialog: closeDialog } },
        React.createElement(Portal, { className: "h-dialog-portal" },
            React.createElement(CSSTransition, { nodeRef: nodeRef, in: open && visible, appear: animateIn || animateOut, timeout: timeout, enter: animateIn, exit: animateOut, classNames: "h-transition-", onExited: function () { return setVisible(false); } },
                React.createElement("div", __assign({}, getDialogRootProps(), { ref: nodeRef }),
                    React.createElement("div", __assign({}, getDialogContainerProps()),
                        React.createElement(DialogBackdrop, { className: backdropClassName, closeDialog: function () { } }),
                        React.createElement("div", __assign({}, getDialogProps()), children))))))) : null));
};
//# sourceMappingURL=AlertDialog.js.map