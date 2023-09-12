import React, { useEffect, useRef } from 'react';
import { Label } from './Label';
import classNames from 'classnames';
import { randomString } from '../helpers/random_string';
var Input = function (_a) {
    var _b = _a.autofocus, autofocus = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, id = _a.id, inputClassName = _a.inputClassName, label = _a.label, _d = _a.labelClassName, labelClassName = _d === void 0 ? "" : _d, leftIconClassName = _a.leftIconClassName, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onRightButtonClick = _a.onRightButtonClick, placeholder = _a.placeholder, rightButtonClassName = _a.rightButtonClassName, _e = _a.role, role = _e === void 0 ? "textbox" : _e, _f = _a.showLeftIcon, showLeftIcon = _f === void 0 ? true : _f, _g = _a.showRightButton, showRightButton = _g === void 0 ? true : _g, _h = _a.variant, variant = _h === void 0 ? "default" : _h, _j = _a.inputType, inputType = _j === void 0 ? "text" : _j, value = _a.value;
    var input = useRef(null);
    var uniqueID = useRef(randomString());
    useEffect(function () {
        if (input.current && autofocus) {
            input.current.focus();
        }
    }, []);
    return (React.createElement("label", { className: "h-width-100" },
        label ?
            React.createElement(Label, { labelClassName: variant === "dark-blue" ? "h-color-text-blue-200 ".concat(labelClassName) : labelClassName, htmlFor: id ? id : uniqueID.current }, label)
            :
                null,
        React.createElement("div", { className: "h-input-container" },
            React.createElement("input", { id: id ? id : uniqueID.current, disabled: disabled, type: inputType, ref: input, name: name, "aria-label": name, className: classNames("h-input", inputClassName, {
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