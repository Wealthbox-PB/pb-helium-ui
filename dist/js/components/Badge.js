import React from 'react';
import classNames from 'classnames';
export var Badge = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, contentClassName = _a.contentClassName, iconClassName = _a.iconClassName, _c = _a.scale, scale = _c === void 0 ? "base" : _c, _d = _a.variant, variant = _d === void 0 ? "info" : _d;
    return (React.createElement("span", { className: classNames("h-badge h-badge--".concat(variant), (_b = {}, _b["h-badge--".concat(scale)] = scale !== "base", _b), className), "data-testid": "h-badge" },
        iconClassName ? (React.createElement("span", { className: classNames("h-badge__icon", iconClassName), "aria-hidden": "true", "data-testid": "h-badge__icon" })) : null,
        React.createElement("span", { className: classNames("h-badge__content", contentClassName), "data-testid": "h-badge__content" }, children)));
};
//# sourceMappingURL=Badge.js.map