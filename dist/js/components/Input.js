import React, { useEffect, useRef } from 'react';
import { Label } from './Label';
import classNames from 'classnames';
import { randomString } from '../helpers/random_string';
var Input = function (_a) {
    var autofocus = _a.autofocus, disabled = _a.disabled, id = _a.id, inputClassName = _a.inputClassName, label = _a.label, _b = _a.labelClassName, labelClassName = _b === void 0 ? "" : _b, leftIconClassName = _a.leftIconClassName, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onRightButtonClick = _a.onRightButtonClick, placeholder = _a.placeholder, rightButtonClassName = _a.rightButtonClassName, _c = _a.role, role = _c === void 0 ? "textbox" : _c, _d = _a.showLeftIcon, showLeftIcon = _d === void 0 ? true : _d, _e = _a.showRightButton, showRightButton = _e === void 0 ? true : _e, _f = _a.variant, variant = _f === void 0 ? "default" : _f, _g = _a.inputType, inputType = _g === void 0 ? "text" : _g, value = _a.value;
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
            React.createElement("input", { id: id ? id : uniqueIDRef.current, disabled: disabled, type: inputType, ref: inputRef, name: name, "aria-label": name, className: classNames("h-input", inputClassName, {
                    'h-input--with-icon': leftIconClassName && showLeftIcon,
                    'h-input--dark-blue': variant === "dark-blue",
                }), placeholder: placeholder, role: role, value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }),
            leftIconClassName && showLeftIcon ?
                React.createElement("span", { "aria-hidden": "true", className: classNames("h-input__icon--left", leftIconClassName, {
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