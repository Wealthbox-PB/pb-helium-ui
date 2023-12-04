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
import React, { useRef } from 'react';
import { AlertDialog } from './AlertDialog';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { DialogFooterActions } from './DialogFooterActions';
export var SimpleAlertDialog = function (_a) {
    var _b = _a.animationDirection, animationDirection = _b === void 0 ? "up" : _b, backdropClassName = _a.backdropClassName, buttonSize = _a.buttonSize, _c = _a.cancel, cancel = _c === void 0 ? "" : _c, _d = _a.cancelVariant, cancelVariant = _d === void 0 ? "secondary" : _d, children = _a.children, _e = _a.confirm, confirm = _e === void 0 ? "" : _e, _f = _a.confirmVariant, confirmVariant = _f === void 0 ? "positive" : _f, _g = _a.closeInHeader, closeInHeader = _g === void 0 ? false : _g, closeDialog = _a.closeDialog, dialogClassName = _a.dialogClassName, _h = _a.header, header = _h === void 0 ? "" : _h, headerClassName = _a.headerClassName, _j = _a.onCancel, onCancel = _j === void 0 ? function () { } : _j, _k = _a.onConfirm, onConfirm = _k === void 0 ? function () { } : _k, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size;
    var leastDestructiveRef = useRef(null);
    return (React.createElement(AlertDialog, __assign({}, {
        animationDirection: animationDirection,
        backdropClassName: backdropClassName,
        closeDialog: closeDialog,
        dialogClassName: dialogClassName,
        leastDestructiveRef: leastDestructiveRef,
        open: open,
        position: position,
        returnFocusEl: returnFocusEl,
        size: size,
    }),
        React.createElement(React.Fragment, null,
            header ? (React.createElement(DialogHeader, { headerClassName: headerClassName, closeDialog: closeDialog, closeInHeader: closeInHeader }, header)) : null,
            React.createElement(DialogBody, null, children),
            React.createElement(DialogFooter, null,
                React.createElement(DialogFooterActions, __assign({}, {
                    buttonSize: buttonSize,
                    cancel: cancel,
                    cancelRef: leastDestructiveRef,
                    cancelVariant: cancelVariant,
                    confirm: confirm,
                    confirmVariant: confirmVariant,
                    onCancel: onCancel,
                    onConfirm: onConfirm,
                }))))));
};
//# sourceMappingURL=SimpleAlertDialog.js.map