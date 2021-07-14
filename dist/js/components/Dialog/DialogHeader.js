import React from "react";
var HeliumDialogHeader = function (_a) {
    var _b = _a.headerClass, headerClass = _b === void 0 ? "" : _b, ariaLabelSelector = _a.ariaLabelSelector, isModalDialog = _a.isModalDialog, children = _a.children, closeDialog = _a.closeDialog, closeInHeader = _a.closeInHeader;
    return (React.createElement("div", { className: "h-react-dialog__header " + headerClass },
        React.createElement("h3", { className: "h-react-dialog__heading", id: ariaLabelSelector }, children),
        (isModalDialog && closeDialog && closeInHeader) &&
            React.createElement("button", { type: "button", className: "h-react-dialog__close", "aria-label": "Close Dialog", onClick: closeDialog },
                React.createElement("span", { "aria-hidden": "true", className: "h-icon-delete--lg" }))));
};
export { HeliumDialogHeader };
//# sourceMappingURL=DialogHeader.js.map