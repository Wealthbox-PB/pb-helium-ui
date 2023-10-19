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
    var _b;
    var _c = _a.active, active = _c === void 0 ? false : _c, children = _a.children, className = _a.className, _d = _a.focus, focus = _d === void 0 ? false : _d, _e = _a.size, size = _e === void 0 ? "md" : _e, _f = _a.square, square = _f === void 0 ? false : _f, _g = _a.type, type = _g === void 0 ? "button" : _g, _h = _a.variant, variant = _h === void 0 ? "positive" : _h, props = __rest(_a, ["active", "children", "className", "focus", "size", "square", "type", "variant"]);
    return (React.createElement("button", __assign({ ref: ref, type: type, className: classNames("h-btn h-btn--".concat(size), (_b = {}, _b["h-btn--".concat(variant)] = variant, _b), {
            'h-btn--active': active,
            'h-btn--focus': focus,
            'h-btn--square': square,
        }, className) }, props), children));
};
var ButtonRef = React.forwardRef(Button);
export { ButtonRef as Button };
//# sourceMappingURL=Button.js.map