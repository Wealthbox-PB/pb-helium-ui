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
    var className = _a.className, _b = _a.id, id = _b === void 0 ? randomString() : _b, label = _a.label, labelClassName = _a.labelClassName, placeholder = _a.placeholder, value = _a.value, _c = _a.type, type = _c === void 0 ? "button" : _c, props = __rest(_a, ["className", "id", "label", "labelClassName", "placeholder", "value", "type"]);
    var uniqueIDRef = useRef(randomString());
    return (React.createElement(React.Fragment, null,
        label ?
            React.createElement(Label, { labelClassName: labelClassName, htmlFor: id ? id : uniqueIDRef.current }, label)
            :
                null,
        React.createElement(Button, __assign({ id: id ? id : uniqueIDRef.current, type: type, ref: ref, className: classNames("h-select h-align-start", className) }, props),
            React.createElement("span", { className: classNames("h-text-ellipsis h-font-weight-normal", {
                    "h-color-text-lighter": !value,
                    "h-color-text-darker": value,
                }) }, value || placeholder))));
};
var SelectInputRef = React.forwardRef(SelectInput);
export { SelectInputRef as SelectInput };
//# sourceMappingURL=SelectInput.js.map