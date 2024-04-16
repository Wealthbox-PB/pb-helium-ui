import React from 'react';
import { Button } from '../Button';
import classNames from 'classnames';
var DialogFooterActions = function (_a) {
    var _b = _a.buttonSize, buttonSize = _b === void 0 ? "md" : _b, _c = _a.cancel, cancel = _c === void 0 ? "" : _c, cancelRef = _a.cancelRef, _d = _a.cancelVariant, cancelVariant = _d === void 0 ? "secondary" : _d, _e = _a.confirm, confirm = _e === void 0 ? "" : _e, confirmRef = _a.confirmRef, _f = _a.confirmVariant, confirmVariant = _f === void 0 ? "positive" : _f, confirmClassName = _a.confirmClassName, _g = _a.confirmType, confirmType = _g === void 0 ? "button" : _g, _h = _a.onCancel, onCancel = _h === void 0 ? function () { } : _h, _j = _a.onConfirm, onConfirm = _j === void 0 ? function () { } : _j;
    return (React.createElement(React.Fragment, null, cancel || confirm ? (React.createElement(React.Fragment, null,
        cancel ? (React.createElement(Button, { onClick: onCancel, variant: cancelVariant, size: buttonSize, ref: cancelRef }, cancel)) : null,
        confirm ? (React.createElement(Button, { ref: confirmRef, onClick: onConfirm, variant: confirmVariant, size: buttonSize, className: classNames("h-btn-margin-left", confirmClassName), type: confirmType }, confirm)) : null)) : (React.createElement(Button, { onClick: onCancel, ref: cancelRef }, "OK"))));
};
export { DialogFooterActions };
//# sourceMappingURL=DialogFooterActions.js.map