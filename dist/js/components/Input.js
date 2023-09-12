import React, { useEffect, useRef } from 'react';
import { Label } from './Label';
import classNames from 'classnames';
var Input = function (_a) {
    var _b = _a.autofocus, autofocus = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, inputClasses = _a.inputClasses, label = _a.label, _d = _a.labelClasses, labelClasses = _d === void 0 ? "" : _d, leftIconClass = _a.leftIconClass, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onRightButtonClick = _a.onRightButtonClick, placeholder = _a.placeholder, rightButtonClass = _a.rightButtonClass, _e = _a.role, role = _e === void 0 ? "textbox" : _e, _f = _a.showLeftIcon, showLeftIcon = _f === void 0 ? true : _f, _g = _a.showRightButton, showRightButton = _g === void 0 ? true : _g, _h = _a.theme, theme = _h === void 0 ? "light" : _h, _j = _a.type, type = _j === void 0 ? "text" : _j, value = _a.value;
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
                    'h-input--with-icon': leftIconClass && showLeftIcon,
                    'h-input--dark': theme === "dark",
                }), placeholder: placeholder, role: role, value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }),
            leftIconClass && showLeftIcon ?
                React.createElement("span", { "aria-hidden": "true", className: classNames("h-input__icon--left", leftIconClass, {
                        'h-color-text-blue-200': theme === 'dark',
                        'h-color-text-gray-500': theme === 'light'
                    }) })
                :
                    null,
            rightButtonClass && showRightButton ?
                React.createElement("button", { type: "reset", name: "Clear Search", "aria-label": "Clear Search", onClick: onRightButtonClick, className: classNames("h-input__icon--right", rightButtonClass, {
                        'h-color-text-blue-200': theme === 'dark',
                        'h-color-text-gray-500': theme === 'light'
                    }) })
                :
                    null)));
};
export { Input };
//# sourceMappingURL=Input.js.map