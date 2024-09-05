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
import React, { useRef } from 'react';
import { Label } from './Label';
import { Button } from './Button';
import { randomString } from '../helpers/random_string';
import classNames from 'classnames';
var SelectInput = function (_a, ref) {
    var className = _a.className, _b = _a.id, id = _b === void 0 ? randomString() : _b, label = _a.label, labelClassName = _a.labelClassName, _c = _a.multiSelect, multiSelect = _c === void 0 ? false : _c, _d = _a.placeholder, placeholder = _d === void 0 ? "Select..." : _d, _e = _a.type, type = _e === void 0 ? "button" : _e, value = _a.value, props = __rest(_a, ["className", "id", "label", "labelClassName", "multiSelect", "placeholder", "type", "value"]);
    var uniqueIDRef = useRef(randomString());
    return (React.createElement(React.Fragment, null,
        label ? (React.createElement(Label, { labelClassName: labelClassName, htmlFor: id ? id : uniqueIDRef.current }, label)) : null,
        React.createElement(Button, __assign({ id: id ? id : uniqueIDRef.current, type: type, ref: ref, className: classNames("h-select h-align-start h-font-weight-normal h-color-text-darker", className, {
                'py-0': multiSelect,
            }), variant: null }, props), multiSelect ? (React.createElement("div", { className: "h-overflow-hidden d-flex align-items-center text-nowrap" }, (value === null || value === void 0 ? void 0 : value.length) && Array.isArray(value) ? (value.map(function (item, i) { return (React.createElement("span", { key: i, className: "py-1 px-2 h-border-radius h-color-background-blue-100 me-1 h-font-size-sm" }, item)); })) : (React.createElement("span", { className: "h-text-ellipsis" }, placeholder)))) : (React.createElement("span", { className: "h-text-ellipsis" }, value || placeholder)))));
};
var SelectInputRef = React.forwardRef(SelectInput);
export { SelectInputRef as SelectInput };
//# sourceMappingURL=SelectInput.js.map