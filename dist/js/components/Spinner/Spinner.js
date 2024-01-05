import React from 'react';
import classNames from 'classnames';
import { base64SpinnerImg, base64SpinnerImgDark } from './base_64_spinner_img';
var Spinner = function (_a) {
    var _b;
    var modifierClass = _a.modifierClass, _c = _a.screenReaderText, screenReaderText = _c === void 0 ? "Loading" : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, _e = _a.theme, theme = _e === void 0 ? "light" : _e;
    var parsedSize = size === "small" ? "sm" : size === "large" ? "lg" : size;
    return (React.createElement("div", { className: classNames("h-spinner", "h-line-height-1", (_b = {},
            _b["h-spinner--".concat(parsedSize)] = size !== "md",
            _b), modifierClass), role: "status" },
        React.createElement("img", { src: theme === "dark" ? base64SpinnerImgDark : base64SpinnerImg, className: "h-img-fluid", alt: "Spinner", loading: "eager" }),
        React.createElement("span", { className: "visually-hidden" }, screenReaderText)));
};
export { Spinner };
//# sourceMappingURL=Spinner.js.map