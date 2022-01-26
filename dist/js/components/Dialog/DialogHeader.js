import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';
var DialogHeader = function (_a) {
    var _b = _a.ariaLabelSelector, ariaLabelSelector = _b === void 0 ? "" : _b, children = _a.children, closeDialog = _a.closeDialog, _c = _a.closeInHeader, closeInHeader = _c === void 0 ? true : _c, _d = _a.headerClassName, headerClassName = _d === void 0 ? "" : _d;
    var context = useDialogContext();
    var handleClose = closeDialog || context.closeDialog;
    return (React.createElement("div", { className: classNames("h-dialog__header", headerClassName) },
        React.createElement("h3", { className: "h-dialog__heading", id: ariaLabelSelector || context.ariaLabelSelector }, children),
        closeInHeader ? (React.createElement("button", { type: "button", className: "h-dialog__close", "aria-label": "Close Dialog", onClick: handleClose },
            React.createElement("span", { "aria-hidden": "true", className: "h-icon-delete--lg" }))) : null));
};
export { DialogHeader };
//# sourceMappingURL=DialogHeader.js.map