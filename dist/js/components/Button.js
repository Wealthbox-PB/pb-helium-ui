var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
var Button = function (_a, ref) {
    var _b = _a.active, active = _b === void 0 ? false : _b, children = _a.children, className = _a.className, _c = _a.focus, focus = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, _e = _a.square, square = _e === void 0 ? false : _e, _f = _a.type, type = _f === void 0 ? "button" : _f, _g = _a.variant, variant = _g === void 0 ? "positive" : _g, props = __rest(_a, ["active", "children", "className", "focus", "size", "square", "type", "variant"]);
    return (React.createElement("button", __assign({ ref: ref, type: type, className: classNames("h-btn h-btn--".concat(variant, " h-btn--").concat(size), className, {
            'h-btn--active': active,
            'h-btn--focus': focus,
            'h-btn--square': square,
        }) }, props), children));
};
var ButtonRef = React.forwardRef(Button);
export { ButtonRef as Button };
//# sourceMappingURL=Button.js.map