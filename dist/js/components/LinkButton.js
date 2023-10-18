import React from 'react';
import classNames from 'classnames';
var LinkButton = function (_a) {
    var _b = _a.active, active = _b === void 0 ? false : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.focus, focus = _d === void 0 ? false : _d, href = _a.href, _e = _a.isExternal, isExternal = _e === void 0 ? false : _e, _f = _a.onClick, onClick = _f === void 0 ? function () { } : _f, _g = _a.size, size = _g === void 0 ? "md" : _g, _h = _a.square, square = _h === void 0 ? false : _h, _j = _a.variant, variant = _j === void 0 ? "positive" : _j;
    return (React.createElement("a", { onClick: onClick, href: href, target: isExternal ? "_blank" : undefined, rel: isExternal ? "noopener noreferrer" : undefined, className: classNames("h-btn h-btn--".concat(variant, " h-btn--").concat(size), className, {
            'h-btn--active': active,
            'h-btn--focus': focus,
            'h-btn--square': square,
        }) }, children));
};
export { LinkButton };
//# sourceMappingURL=LinkButton.js.map