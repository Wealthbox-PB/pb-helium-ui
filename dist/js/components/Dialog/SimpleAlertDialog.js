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
    var backdropClassName = _a.backdropClassName, buttonSize = _a.buttonSize, _b = _a.cancel, cancel = _b === void 0 ? "" : _b, _c = _a.cancelVariant, cancelVariant = _c === void 0 ? "secondary" : _c, children = _a.children, _d = _a.confirm, confirm = _d === void 0 ? "" : _d, _e = _a.confirmVariant, confirmVariant = _e === void 0 ? "positive" : _e, dialogClassName = _a.dialogClassName, _f = _a.header, header = _f === void 0 ? "" : _f, _g = _a.onCancel, onCancel = _g === void 0 ? function () { } : _g, _h = _a.onConfirm, onConfirm = _h === void 0 ? function () { } : _h, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size;
    var leastDestructiveRef = useRef(null);
    return (React.createElement(AlertDialog, __assign({}, {
        backdropClassName: backdropClassName,
        dialogClassName: dialogClassName,
        leastDestructiveRef: leastDestructiveRef,
        open: open,
        position: position,
        returnFocusEl: returnFocusEl,
        size: size,
    }),
        React.createElement(React.Fragment, null,
            header ? React.createElement(DialogHeader, { closeInHeader: false }, header) : "",
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