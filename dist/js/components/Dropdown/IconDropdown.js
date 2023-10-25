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
import { Button } from '../Button';
import classNames from 'classnames';
var IconDropdown = function (_a) {
    var ariaLabel = _a.ariaLabel, className = _a.className, buttonId = _a.buttonId, children = _a.children, iconClassName = _a.iconClassName, _b = _a.iconName, iconName = _b === void 0 ? "dots" : _b, _c = _a.size, size = _c === void 0 ? "xs" : _c, _d = _a.variant, variant = _d === void 0 ? "border-hover" : _d, rest = __rest(_a, ["ariaLabel", "className", "buttonId", "children", "iconClassName", "iconName", "size", "variant"]);
    return (React.createElement(Dropdown, __assign({ renderOpener: function (_a) {
            var ref = _a.ref, props = __rest(_a, ["ref"]);
            return (React.createElement(Button, __assign({ variant: variant, size: size, ref: ref, "aria-label": ariaLabel, square: true, id: buttonId, className: className }, props),
                React.createElement("span", { className: classNames("h-icon-".concat(iconName), iconClassName) })));
        } }, rest), children));
};
export { IconDropdown };
//# sourceMappingURL=IconDropdown.js.map