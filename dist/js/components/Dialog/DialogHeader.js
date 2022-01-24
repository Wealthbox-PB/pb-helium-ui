import React, { useContext } from 'react';
import { DialogContext } from './DialogContext';
var DialogHeader = function (_a) {
    var _b = _a.headerClass, headerClass = _b === void 0 ? "" : _b, _c = _a.ariaLabelSelector, ariaLabelSelector = _c === void 0 ? "" : _c, _d = _a.dialogRole, dialogRole = _d === void 0 ? "dialog" : _d, children = _a.children, closeDialog = _a.closeDialog, _e = _a.closeInHeader, closeInHeader = _e === void 0 ? true : _e;
    var context = useContext(DialogContext);
    return (React.createElement("div", { className: "h-react-dialog__header " + headerClass },
        React.createElement("h3", { className: "h-react-dialog__heading", id: ariaLabelSelector || context.ariaLabelSelector }, children),
        dialogRole === "dialog" && closeDialog && closeInHeader && (React.createElement("button", { type: "button", className: "h-react-dialog__close", "aria-label": "Close Dialog", onClick: closeDialog },
            React.createElement("span", { "aria-hidden": "true", className: "h-icon-delete--lg" })))));
};
export { DialogHeader };
//# sourceMappingURL=DialogHeader.js.map