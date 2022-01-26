import React from 'react';
import { Button } from '../Button';
var DialogFooterActions = function (_a) {
    var _b = _a.buttonSize, buttonSize = _b === void 0 ? "md" : _b, _c = _a.cancel, cancel = _c === void 0 ? "" : _c, cancelRef = _a.cancelRef, _d = _a.cancelVariant, cancelVariant = _d === void 0 ? "secondary" : _d, _e = _a.confirm, confirm = _e === void 0 ? "" : _e, _f = _a.confirmVariant, confirmVariant = _f === void 0 ? "positive" : _f, _g = _a.onCancel, onCancel = _g === void 0 ? function () { } : _g, _h = _a.onConfirm, onConfirm = _h === void 0 ? function () { } : _h;
    return (React.createElement(React.Fragment, null, cancel || confirm ? (React.createElement(React.Fragment, null,
        cancel ? (React.createElement(Button, { onClick: onCancel, variant: cancelVariant, size: buttonSize, ref: cancelRef }, cancel)) : null,
        confirm ? (React.createElement(Button, { onClick: onConfirm, variant: confirmVariant, size: buttonSize, className: "h-btn-margin-left" }, confirm)) : null)) : (React.createElement(Button, { onClick: onCancel, ref: cancelRef }, "OK"))));
};
export { DialogFooterActions };
//# sourceMappingURL=DialogFooterActions.js.map