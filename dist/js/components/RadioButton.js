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
import classNames from 'classnames';
import { Label } from './Label';
import { randomString } from '../helpers/random_string';
var RadioButton = function (_a, ref) {
    var disabled = _a.disabled, _b = _a.id, id = _b === void 0 ? randomString() : _b, label = _a.label, _c = _a.buttonSize, buttonSize = _c === void 0 ? "large" : _c, _d = _a.variant, variant = _d === void 0 ? "default" : _d, rest = __rest(_a, ["disabled", "id", "label", "buttonSize", "variant"]);
    var uniqueIDRef = useRef(randomString());
    return (React.createElement("label", { "data-testid": "h-radio", className: classNames("h-radio h-radio--animate", {
            'h-radio--sm': buttonSize === "small",
            'h-radio--lg': buttonSize === "large",
            'h-radio--pill-button': variant === "pill",
        }) },
        React.createElement("input", __assign({ ref: ref, className: "h-radio__elm", disabled: disabled, id: id ? id : uniqueIDRef.current, type: "radio" }, rest)),
        React.createElement("span", { className: "h-radio__container" }),
        label ?
            React.createElement(Label, { labelClassName: disabled ? "h-radio__label-content h-color-text-gray-500" : "h-radio__label-content", htmlFor: id ? id : uniqueIDRef.current }, label)
            :
                null,
        React.createElement("span", { className: "h-radio__pill-button-radio-fill" })));
};
var RadioButtonRef = React.forwardRef(RadioButton);
export { RadioButtonRef as RadioButton };
//# sourceMappingURL=RadioButton.js.map