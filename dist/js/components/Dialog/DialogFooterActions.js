import React from 'react';
import { Button } from '../Button';
import classNames from 'classnames';
var DialogFooterActions = function (_a) {
    var _b = _a.buttonSize, buttonSize = _b === void 0 ? "md" : _b, cancel = _a.cancel, cancelRef = _a.cancelRef, _c = _a.cancelVariant, cancelVariant = _c === void 0 ? "secondary" : _c, confirm = _a.confirm, confirmRef = _a.confirmRef, _d = _a.confirmVariant, confirmVariant = _d === void 0 ? "positive" : _d, confirmClassName = _a.confirmClassName, _e = _a.confirmType, confirmType = _e === void 0 ? "button" : _e, _f = _a.onCancel, onCancel = _f === void 0 ? function () { } : _f, _g = _a.onConfirm, onConfirm = _g === void 0 ? function () { } : _g;
    return (React.createElement(React.Fragment, null, cancel || confirm ? (React.createElement(React.Fragment, null,
        cancel ? (React.createElement(Button, { onClick: onCancel, variant: cancelVariant, size: buttonSize, ref: cancelRef }, cancel)) : null,
        confirm ? (React.createElement(Button, { ref: confirmRef, onClick: onConfirm, variant: confirmVariant, size: buttonSize, className: classNames("h-btn-margin-left", confirmClassName), type: confirmType }, confirm)) : null)) : (React.createElement(Button, { onClick: onCancel, ref: cancelRef }, "OK"))));
};
export { DialogFooterActions };
//# sourceMappingURL=DialogFooterActions.js.map