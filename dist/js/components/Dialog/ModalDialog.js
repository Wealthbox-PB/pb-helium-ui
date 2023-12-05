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
import { useDialog } from './useDialog';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogContext } from './DialogContext';
import { CSSTransition } from 'react-transition-group';
var ModalDialog = function (_a) {
    var _b = _a.animateIn, animateIn = _b === void 0 ? true : _b, _c = _a.animateOut, animateOut = _c === void 0 ? true : _c, _d = _a.animationDirection, animationDirection = _d === void 0 ? "up" : _d, _e = _a.backdrop, backdrop = _e === void 0 ? true : _e, backdropClassName = _a.backdropClassName, children = _a.children, closeDialog = _a.closeDialog, dialogClassName = _a.dialogClassName, initialFocusEl = _a.initialFocusEl, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size, _f = _a.trapPaused, trapPaused = _f === void 0 ? false : _f;
    var _g = useDialog({
        backdrop: backdrop,
        closeDialog: closeDialog,
        dialogClassName: dialogClassName,
        animationClassName: "h-dialog__fade-in-and-".concat(animationDirection),
        dialogRole: "dialog",
        initialFocusEl: initialFocusEl,
        open: open,
        position: position,
        returnFocusEl: returnFocusEl,
        size: size,
        trapPaused: trapPaused,
    }), getDialogRootProps = _g.getDialogRootProps, getDialogContainerProps = _g.getDialogContainerProps, getDialogProps = _g.getDialogProps, ariaLabelSelector = _g.ariaLabelSelector, ariaDescriptionSelector = _g.ariaDescriptionSelector;
    var timeout = 250;
    var nodeRef = useRef(null);
    var _h = useState(false), visible = _h[0], setVisible = _h[1];
    useEffect(function () {
        if (open) {
            setVisible(true);
        }
    }, [open]);
    return (React.createElement(React.Fragment, null, open || visible ? (React.createElement(DialogContext.Provider, { value: { ariaLabelSelector: ariaLabelSelector, ariaDescriptionSelector: ariaDescriptionSelector, closeDialog: closeDialog } },
        React.createElement(Portal, { className: "h-dialog-portal" },
            React.createElement(CSSTransition, { nodeRef: nodeRef, in: open && visible, appear: animateIn || animateOut, timeout: timeout, enter: animateIn, exit: animateOut, classNames: "h-dialog-", onExited: function () { return setVisible(false); } },
                React.createElement("div", __assign({}, getDialogRootProps(), { ref: nodeRef }),
                    React.createElement("div", __assign({}, getDialogContainerProps()),
                        backdrop ? React.createElement(DialogBackdrop, { className: backdropClassName }) : null,
                        React.createElement("div", __assign({}, getDialogProps()), children))))))) : null));
};
export { ModalDialog };
//# sourceMappingURL=ModalDialog.js.map