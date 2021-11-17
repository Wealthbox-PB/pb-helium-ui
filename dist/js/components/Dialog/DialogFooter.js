import React from 'react';
var HeliumDialogFooter = function (_a) {
    var children = _a.children, _b = _a.footerBackground, footerBackground = _b === void 0 ? true : _b, _c = _a.footerClass, footerClass = _c === void 0 ? "" : _c, closeDialog = _a.closeDialog, submitHandler = _a.submitHandler;
    return (React.createElement("div", { className: "h-react-dialog__footer " + (footerBackground && "h-react-dialog__footer--with-background") + " " + footerClass }, children ? (children) : (React.createElement("div", { className: "h-react-dialog__footer-cta-container" },
        React.createElement("button", { onClick: closeDialog, className: "h-btn h-btn--secondary" }, "Cancel"),
        submitHandler && (React.createElement("button", { onClick: submitHandler, className: "h-btn h-btn--positive h-btn-margin-left" }, "Submit"))))));
};
export { HeliumDialogFooter };
//# sourceMappingURL=DialogFooter.js.map