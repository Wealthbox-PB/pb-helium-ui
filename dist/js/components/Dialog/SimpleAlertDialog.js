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
    var _b = _a.header, header = _b === void 0 ? "" : _b, _c = _a.cancel, cancel = _c === void 0 ? "" : _c, _d = _a.cancelVariant, cancelVariant = _d === void 0 ? "secondary" : _d, _e = _a.confirm, confirm = _e === void 0 ? "" : _e, _f = _a.confirmVariant, confirmVariant = _f === void 0 ? "positive" : _f, open = _a.open, size = _a.size, position = _a.position, returnFocusEl = _a.returnFocusEl, _g = _a.onCancel, onCancel = _g === void 0 ? function () { } : _g, _h = _a.onConfirm, onConfirm = _h === void 0 ? function () { } : _h, children = _a.children, dialogClassName = _a.dialogClassName, backdropClassName = _a.backdropClassName;
    var leastDestructiveRef = useRef(null);
    return (React.createElement(AlertDialog, __assign({}, {
        open: open,
        size: size,
        position: position,
        returnFocusEl: returnFocusEl,
        dialogClassName: dialogClassName,
        backdropClassName: backdropClassName,
        leastDestructiveRef: leastDestructiveRef,
    }),
        React.createElement(React.Fragment, null,
            header ? React.createElement(DialogHeader, { closeInHeader: false }, header) : "",
            React.createElement(DialogBody, null, children),
            React.createElement(DialogFooter, null,
                React.createElement(DialogFooterActions, __assign({}, {
                    cancel: cancel,
                    confirm: confirm,
                    cancelRef: leastDestructiveRef,
                    cancelVariant: cancelVariant,
                    confirmVariant: confirmVariant,
                    onCancel: onCancel,
                    onConfirm: onConfirm,
                }))))));
};
//# sourceMappingURL=SimpleAlertDialog.js.map