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
import React, { forwardRef } from 'react';
import classNames from 'classnames';
var Checkbox = function (_a, ref) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.indeterminate, indeterminate = _c === void 0 ? false : _c, label = _a.label, labelClass = _a.labelClass, size = _a.size, props = __rest(_a, ["checked", "indeterminate", "label", "labelClass", "size"]);
    return (React.createElement("label", { className: classNames("h-checkbox h-checkbox--animate", labelClass, {
            'h-checkbox--sm': size === "small",
            'h-checkbox--lg': size === "large",
        }) },
        React.createElement("input", __assign({ className: classNames("h-checkbox__elm", {
                'h-checkbox__elm--indeterminate': indeterminate,
                'h-checkbox__elm--checked': checked,
            }), type: "checkbox", checked: checked, ref: ref }, props)),
        React.createElement("span", { className: "h-checkbox__container" }),
        label ? React.createElement("span", { className: "h-checkbox__label-content" }, label) : null));
};
var CheckboxRef = forwardRef(Checkbox);
export { CheckboxRef as Checkbox };
//# sourceMappingURL=Checkbox.js.map