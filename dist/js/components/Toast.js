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
import { useDialog } from '../hooks/useDialog';
import { Portal } from './Portal';
import { DialogContext } from './Dialog/DialogContext';
import { CSSTransition } from 'react-transition-group';
var Toast = function (_a) {
    var _b = _a.animateIn, animateIn = _b === void 0 ? true : _b, _c = _a.animateOut, animateOut = _c === void 0 ? true : _c, children = _a.children, closeToast = _a.closeToast, className = _a.className, _d = _a.delay, delay = _d === void 0 ? 0 : _d, open = _a.open, size = _a.size;
    var timeout = 250;
    var nodeRef = useRef(null);
    var _e = useState(false), visible = _e[0], setVisible = _e[1];
    var _f = useState(true), delayed = _f[0], setDelayed = _f[1];
    var _g = useDialog({
        backdrop: false,
        closeDialog: closeToast,
        dialogClassName: className,
        animationDirection: "left",
        animationDistance: "md",
        dialogRole: "dialog",
        initialFocusEl: undefined,
        open: open || visible,
        position: "bottom right",
        returnFocusEl: undefined,
        size: size,
        trapPaused: false,
        trapFocus: false,
    }), getDialogRootProps = _g.getDialogRootProps, getDialogContainerProps = _g.getDialogContainerProps, getDialogProps = _g.getDialogProps, ariaLabelSelector = _g.ariaLabelSelector, ariaDescriptionSelector = _g.ariaDescriptionSelector;
    useEffect(function () {
        var timeoutId = setTimeout(function () {
            if (open) {
                setVisible(true);
            }
            setDelayed(false);
        }, delay);
        return function () { return clearTimeout(timeoutId); };
    }, [open]);
    return (React.createElement(React.Fragment, null, !delayed && visible ? (React.createElement(DialogContext.Provider, { value: { ariaLabelSelector: ariaLabelSelector, ariaDescriptionSelector: ariaDescriptionSelector, closeDialog: closeToast } },
        React.createElement(Portal, { className: "h-dialog-portal" },
            React.createElement(CSSTransition, { nodeRef: nodeRef, in: open && visible, appear: animateIn || animateOut, timeout: timeout, enter: animateIn, exit: animateOut, classNames: "h-transition-", onExited: function () { return setVisible(false); } },
                React.createElement("div", __assign({}, getDialogRootProps(), { ref: nodeRef }),
                    React.createElement("div", __assign({}, getDialogContainerProps()),
                        React.createElement("div", __assign({}, getDialogProps()), children))))))) : null));
};
export { Toast };
//# sourceMappingURL=Toast.js.map