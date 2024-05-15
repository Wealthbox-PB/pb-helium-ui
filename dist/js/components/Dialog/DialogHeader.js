import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';
var DialogHeader = function (_a) {
    var ariaLabelSelector = _a.ariaLabelSelector, children = _a.children, closeDialog = _a.closeDialog, _b = _a.closeInHeader, closeInHeader = _b === void 0 ? true : _b, headerClassName = _a.headerClassName;
    var context = useDialogContext();
    var handleClose = closeDialog || context.closeDialog;
    return (React.createElement("div", { className: classNames("h-dialog__header", headerClassName), "data-testid": "h-dialog__header" },
        children ? (React.createElement("h3", { className: "h-dialog__heading", id: ariaLabelSelector || context.ariaLabelSelector }, children)) : null,
        closeInHeader ? (React.createElement("button", { type: "button", className: "h-dialog__close", "aria-label": "Close Dialog", onClick: handleClose },
            React.createElement("span", { "aria-hidden": "true", className: "h-icon-delete--lg" }))) : null));
};
export { DialogHeader };
//# sourceMappingURL=DialogHeader.js.map