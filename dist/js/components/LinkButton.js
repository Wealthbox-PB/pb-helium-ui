import React from 'react';
import classNames from 'classnames';
var LinkButton = function (_a) {
    var _b;
    var _c = _a.active, active = _c === void 0 ? false : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? "" : _d, _e = _a.focus, focus = _e === void 0 ? false : _e, href = _a.href, _f = _a.isExternal, isExternal = _f === void 0 ? false : _f, _g = _a.size, size = _g === void 0 ? "md" : _g, _h = _a.square, square = _h === void 0 ? false : _h, _j = _a.variant, variant = _j === void 0 ? "positive" : _j;
    return (React.createElement("a", { href: href, target: isExternal ? "_blank" : undefined, rel: isExternal ? "noopener noreferrer" : undefined, className: classNames("h-btn h-btn--" + variant + " h-btn--" + size, className, (_b = {},
            _b["h-btn--active"] = active,
            _b["h-btn--focus"] = focus,
            _b["h-btn--square"] = square,
            _b)) }, children));
};
export { LinkButton };
//# sourceMappingURL=LinkButton.js.map