import React, { useEffect, useRef } from 'react';
import { Label } from './Label';
import classNames from 'classnames';
var Input = function (_a) {
    var _b = _a.autofocus, autofocus = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, inputClasses = _a.inputClasses, label = _a.label, _d = _a.labelClasses, labelClasses = _d === void 0 ? "" : _d, leftIconClass = _a.leftIconClass, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onRightIconClick = _a.onRightIconClick, placeholder = _a.placeholder, rightIconClass = _a.rightIconClass, _e = _a.role, role = _e === void 0 ? "textbox" : _e, _f = _a.showRightIcon, showRightIcon = _f === void 0 ? true : _f, _g = _a.theme, theme = _g === void 0 ? "light" : _g, _h = _a.type, type = _h === void 0 ? "text" : _h, value = _a.value;
    var id = self.crypto.randomUUID();
    var input = useRef(null);
    useEffect(function () {
        if (input.current && autofocus) {
            input.current.focus();
        }
    }, []);
    return (React.createElement("label", { className: "h-width-100" },
        label ?
            React.createElement(Label, { labelText: label, labelClassName: theme === "dark" ? "h-color-text-blue-200 ".concat(labelClasses) : labelClasses, htmlFor: id })
            :
                null,
        React.createElement("div", { className: "h-input-container" },
            React.createElement("input", { id: id, disabled: disabled, type: type, ref: input, name: name, "aria-label": name, className: classNames("h-input", inputClasses, {
                    'h-input--icon': leftIconClass,
                    'h-input--dark': theme === "dark",
                }), placeholder: placeholder, role: role, value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }),
            leftIconClass ?
                React.createElement("span", { "aria-hidden": "true", className: classNames("h-input__icon--left", leftIconClass, {
                        'h-color-text-blue-200': theme === 'dark',
                        'h-color-text-gray-500': theme === 'light'
                    }) })
                :
                    null,
            rightIconClass && showRightIcon ?
                React.createElement("button", { type: "reset", name: "Clear Search", "aria-label": "Clear Search", onClick: onRightIconClick, className: classNames("h-input__icon--right", rightIconClass, {
                        'h-color-text-blue-200': theme === 'dark',
                        'h-color-text-gray-500': theme === 'light'
                    }) })
                :
                    null)));
};
export { Input };
//# sourceMappingURL=Input.js.map