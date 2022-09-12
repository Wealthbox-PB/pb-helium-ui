import React from 'react';
import classNames from 'classnames';
var DialogFooter = function (_a) {
    var children = _a.children, _b = _a.footerBackground, footerBackground = _b === void 0 ? true : _b, _c = _a.footerClassName, footerClassName = _c === void 0 ? "" : _c;
    return (React.createElement("footer", { className: classNames("h-dialog__footer", footerClassName, {
            'h-dialog__footer--with-background': footerBackground,
        }) }, children ? (React.createElement("div", { className: "h-dialog__footer-cta-container", "data-testid": "h-dialog__footer-cta-container" }, children)) : null));
};
export { DialogFooter };
//# sourceMappingURL=DialogFooter.js.map