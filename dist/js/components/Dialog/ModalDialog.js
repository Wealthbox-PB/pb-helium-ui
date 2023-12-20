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
import { useDialog } from '../../hooks/useDialog';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogContext } from './DialogContext';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
var ModalDialog = function (_a) {
    var _b = _a.animateIn, animateIn = _b === void 0 ? true : _b, _c = _a.animateOut, animateOut = _c === void 0 ? true : _c, _d = _a.animationDirection, animationDirection = _d === void 0 ? "up" : _d, _e = _a.animationDistance, animationDistance = _e === void 0 ? "md" : _e, _f = _a.backdrop, backdrop = _f === void 0 ? true : _f, backdropClassName = _a.backdropClassName, children = _a.children, closeDialog = _a.closeDialog, dialogClassName = _a.dialogClassName, initialFocusEl = _a.initialFocusEl, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size, _g = _a.trapPaused, trapPaused = _g === void 0 ? false : _g;
    var _h = useDialog({
        backdrop: backdrop,
        closeDialog: closeDialog,
        dialogClassName: dialogClassName,
        animationDirection: animationDirection,
        animationDistance: animationDistance,
        dialogRole: "dialog",
        initialFocusEl: initialFocusEl,
        open: open,
        position: position,
        returnFocusEl: returnFocusEl,
        size: size,
        trapPaused: trapPaused,
    }), getDialogRootProps = _h.getDialogRootProps, getDialogContainerProps = _h.getDialogContainerProps, getDialogProps = _h.getDialogProps, ariaLabelSelector = _h.ariaLabelSelector, ariaDescriptionSelector = _h.ariaDescriptionSelector;
    var timeout = 250;
    var nodeRef = useRef(null);
    var _j = useState(false), visible = _j[0], setVisible = _j[1];
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
                        backdrop ? (React.createElement(DialogBackdrop, { className: classNames("h-transition-element h-transition-element--fade-in", backdropClassName) })) : null,
                        React.createElement("div", __assign({}, getDialogProps()), children))))))) : null));
};
export { ModalDialog };
//# sourceMappingURL=ModalDialog.js.map