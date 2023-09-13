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
import { Dropdown } from './Dropdown';
import { Button } from 'components/Button';
import classNames from 'classnames';
var IconDropdown = function (_a) {
    var _b = _a.buttonAriaLabel, buttonAriaLabel = _b === void 0 ? "" : _b, _c = _a.buttonClass, buttonClass = _c === void 0 ? "" : _c, _d = _a.buttonId, buttonId = _d === void 0 ? "" : _d, children = _a.children, _e = _a.iconClass, iconClass = _e === void 0 ? "" : _e, _f = _a.iconName, iconName = _f === void 0 ? "dots" : _f, _g = _a.placement, placement = _g === void 0 ? "bottom-end" : _g, _h = _a.size, size = _h === void 0 ? "xs" : _h, _j = _a.variant, variant = _j === void 0 ? "border-hover" : _j;
    return (React.createElement(Dropdown, { renderOpener: function (_a) {
            var ref = _a.ref, props = __rest(_a, ["ref"]);
            return (React.createElement(Button, __assign({ variant: variant, size: size, ref: ref, "aria-label": buttonAriaLabel, square: true, id: buttonId, className: buttonClass }, props),
                React.createElement("span", { className: classNames("h-icon-".concat(iconName), iconClass) })));
        }, placement: placement }, children));
};
export { IconDropdown };
//# sourceMappingURL=IconDropdown.js.map