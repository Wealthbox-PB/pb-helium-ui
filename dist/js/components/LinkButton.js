import React from 'react';
import classNames from 'classnames';
var LinkButton = function (_a) {
    var _b = _a.active, active = _b === void 0 ? false : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.focus, focus = _d === void 0 ? false : _d, href = _a.href, _e = _a.isExternal, isExternal = _e === void 0 ? false : _e, _f = _a.size, size = _f === void 0 ? "md" : _f, _g = _a.square, square = _g === void 0 ? false : _g, _h = _a.variant, variant = _h === void 0 ? "positive" : _h;
    return (React.createElement("a", { href: href, target: isExternal ? "_blank" : undefined, rel: isExternal ? "noopener noreferrer" : undefined, className: classNames("h-btn h-btn--" + variant + " h-btn--" + size, className, {
            'h-btn--active': active,
            'h-btn--focus': focus,
            'h-btn--square': square,
        }) }, children));
};
export { LinkButton };
//# sourceMappingURL=LinkButton.js.map