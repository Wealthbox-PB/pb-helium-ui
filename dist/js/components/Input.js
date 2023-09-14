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
import React, { useEffect, useRef } from 'react';
import { Label } from './Label';
import classNames from 'classnames';
import { randomString } from '../helpers/random_string';
var Input = function (_a) {
    var autofocus = _a.autofocus, id = _a.id, inputClassName = _a.inputClassName, label = _a.label, _b = _a.labelClassName, labelClassName = _b === void 0 ? "" : _b, leftIconClassName = _a.leftIconClassName, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onRightButtonClick = _a.onRightButtonClick, rightButtonClassName = _a.rightButtonClassName, _c = _a.role, role = _c === void 0 ? "textbox" : _c, _d = _a.showLeftIcon, showLeftIcon = _d === void 0 ? true : _d, _e = _a.showRightButton, showRightButton = _e === void 0 ? true : _e, _f = _a.variant, variant = _f === void 0 ? "default" : _f, _g = _a.inputType, inputType = _g === void 0 ? "text" : _g, rest = __rest(_a, ["autofocus", "id", "inputClassName", "label", "labelClassName", "leftIconClassName", "onBlur", "onChange", "onFocus", "onRightButtonClick", "rightButtonClassName", "role", "showLeftIcon", "showRightButton", "variant", "inputType"]);
    var inputRef = useRef(null);
    var uniqueIDRef = useRef(randomString());
    useEffect(function () {
        if (inputRef.current && autofocus) {
            inputRef.current.focus();
        }
    }, []);
    return (React.createElement("label", { className: "h-width-100" },
        label ?
            React.createElement(Label, { labelClassName: variant === "dark-blue" ? "h-color-text-blue-200 ".concat(labelClassName) : labelClassName, htmlFor: id ? id : uniqueIDRef.current }, label)
            :
                null,
        React.createElement("div", { className: "h-input-container" },
            React.createElement("input", __assign({ id: id ? id : uniqueIDRef.current, type: inputType, ref: inputRef, className: classNames("h-input", inputClassName, {
                    'h-input--with-icon': leftIconClassName && showLeftIcon,
                    'h-input--dark-blue': variant === "dark-blue",
                }), role: role, onChange: onChange, onFocus: onFocus, onBlur: onBlur }, rest)),
            leftIconClassName && showLeftIcon ?
                React.createElement("span", { "data-testid": "h-input__icon--left", "aria-hidden": "true", className: classNames("h-input__icon--left", leftIconClassName, {
                        'h-color-text-blue-200': variant === 'dark-blue',
                        'h-color-text-gray-500': variant === 'default'
                    }) })
                :
                    null,
            rightButtonClassName && showRightButton ?
                React.createElement("button", { type: "reset", name: "Clear Search", "aria-label": "Clear Search", onClick: onRightButtonClick, className: classNames("h-input__icon--right", rightButtonClassName, {
                        'h-color-text-blue-200': variant === 'dark-blue',
                        'h-color-text-gray-500': variant === 'default'
                    }) })
                :
                    null)));
};
export { Input };
//# sourceMappingURL=Input.js.map