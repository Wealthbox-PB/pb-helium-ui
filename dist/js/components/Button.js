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
export function buttonClassNames(_a) {
    var _b;
    var active = _a.active, className = _a.className, disabled = _a.disabled, focus = _a.focus, size = _a.size, square = _a.square, variant = _a.variant;
    return classNames("h-btn h-btn--".concat(size), className, (_b = {}, _b["h-btn--".concat(variant)] = variant, _b), {
        'h-btn--active': active,
        'h-btn--focus': focus,
        'h-btn--square': square,
        'h-btn--disabled': disabled,
    });
}
var Button = function (_a, ref) {
    var _b = _a.active, active = _b === void 0 ? false : _b, children = _a.children, className = _a.className, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.focus, focus = _d === void 0 ? false : _d, _e = _a.size, size = _e === void 0 ? "md" : _e, _f = _a.square, square = _f === void 0 ? false : _f, _g = _a.type, type = _g === void 0 ? "button" : _g, _h = _a.variant, variant = _h === void 0 ? "positive" : _h, props = __rest(_a, ["active", "children", "className", "disabled", "focus", "size", "square", "type", "variant"]);
    return (React.createElement("button", __assign({ ref: ref, type: type, className: buttonClassNames({ active: active, className: className, disabled: disabled, focus: focus, size: size, square: square, variant: variant }), disabled: disabled }, props), children));
};
var ButtonRef = React.forwardRef(Button);
export { ButtonRef as Button };
//# sourceMappingURL=Button.js.map