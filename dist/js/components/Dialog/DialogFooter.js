import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';
var DialogFooter = function (_a) {
    var children = _a.children, _b = _a.footerBackground, footerBackground = _b === void 0 ? true : _b, _c = _a.footerClassName, footerClassName = _c === void 0 ? "" : _c, closeDialog = _a.closeDialog, submitHandler = _a.submitHandler;
    var context = useDialogContext();
    return (React.createElement("div", { className: classNames("h-dialog__footer", footerClassName, {
            'h-dialog__footer--with-background': footerBackground,
        }) }, children ? (children) : (React.createElement("div", { className: "h-dialog__footer-cta-container" },
        React.createElement("button", { type: "button", onClick: closeDialog || context.closeDialog, className: "h-btn h-btn--secondary" }, "Cancel"),
        submitHandler ? (React.createElement("button", { onClick: submitHandler, className: "h-btn h-btn--positive h-btn-margin-left" }, "Submit")) : null))));
};
export { DialogFooter };
//# sourceMappingURL=DialogFooter.js.map