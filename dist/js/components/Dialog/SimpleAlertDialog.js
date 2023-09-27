import React, { useRef } from 'react';
import { AlertDialog } from './AlertDialog';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { DialogFooterActions } from './DialogFooterActions';
export var SimpleAlertDialog = function (_a) {
    var backdropClassName = _a.backdropClassName, buttonSize = _a.buttonSize, _b = _a.cancel, cancel = _b === void 0 ? "" : _b, _c = _a.cancelVariant, cancelVariant = _c === void 0 ? "secondary" : _c, children = _a.children, _d = _a.confirm, confirm = _d === void 0 ? "" : _d, _e = _a.confirmVariant, confirmVariant = _e === void 0 ? "positive" : _e, _f = _a.closeInHeader, closeInHeader = _f === void 0 ? false : _f, closeDialog = _a.closeDialog, dialogClassName = _a.dialogClassName, _g = _a.header, header = _g === void 0 ? "" : _g, headerClassName = _a.headerClassName, _h = _a.onCancel, onCancel = _h === void 0 ? function () { } : _h, _j = _a.onConfirm, onConfirm = _j === void 0 ? function () { } : _j, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size;
    var leastDestructiveRef = useRef(null);
    return (React.createElement(AlertDialog, { backdropClassName: backdropClassName, closeDialog: closeDialog, dialogClassName: dialogClassName, leastDestructiveRef: leastDestructiveRef, open: open, position: position, returnFocusEl: returnFocusEl, size: size },
        React.createElement(React.Fragment, null,
            header ? (React.createElement(DialogHeader, { headerClassName: headerClassName, closeDialog: closeDialog, closeInHeader: closeInHeader }, header)) : null,
            React.createElement(DialogBody, null, children),
            React.createElement(DialogFooter, null,
                React.createElement(DialogFooterActions, { buttonSize: buttonSize, cancel: cancel, cancelRef: leastDestructiveRef, cancelVariant: cancelVariant, confirm: confirm, confirmVariant: confirmVariant, onCancel: onCancel, onConfirm: onConfirm })))));
};
//# sourceMappingURL=SimpleAlertDialog.js.map