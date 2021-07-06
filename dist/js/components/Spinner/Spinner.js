import React from 'react';
import classNames from 'classnames';
import { base64SpinnerImg } from './base_64_spinner_img';
var HeliumSpinner = function (_a) {
    var modifierClass = _a.modifierClass, _b = _a.screenReaderText, screenReaderText = _b === void 0 ? "Loading" : _b, size = _a.size;
    return (React.createElement("div", { className: classNames("h-spinner", {
            'h-spinner--sm': size === "small",
            'h-spinner--lg': size === "large",
        }, modifierClass, "h-line-height-1"), role: "status" },
        React.createElement("img", { src: base64SpinnerImg, className: "h-img-fluid", alt: "Spinner", loading: "eager" }),
        React.createElement("span", { className: "visually-hidden" }, screenReaderText)));
};
export { HeliumSpinner };
//# sourceMappingURL=Spinner.js.map