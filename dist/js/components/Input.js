import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
var Input = function (_a) {
    var _b = _a.autofocus, autofocus = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, inputClasses = _a.inputClasses, label = _a.label, labelClasses = _a.labelClasses, leftIconClass = _a.leftIconClass, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onRightIconClick = _a.onRightIconClick, placeholder = _a.placeholder, rightIconClass = _a.rightIconClass, _d = _a.showRightIcon, showRightIcon = _d === void 0 ? true : _d, _e = _a.theme, theme = _e === void 0 ? "light" : _e, _f = _a.type, type = _f === void 0 ? "text" : _f, value = _a.value;
    var input = useRef(null);
    useEffect(function () {
        if (input.current && autofocus) {
            input.current.focus();
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: "w-100" },
            label ?
                React.createElement("span", { className: classNames("d-inline-block mb-2", labelClasses, { 'h-color-text-blue-200': theme === 'dark' }) }, label)
                :
                    null,
            React.createElement("div", { className: "d-flex" },
                React.createElement("div", { className: "h-color-text-gray-500 align-items-center d-flex position-relative w-100" },
                    React.createElement("input", { disabled: disabled, type: type, ref: input, role: "searchbox", name: name, "aria-label": name, className: classNames("h-input", inputClasses, {
                            'h-input--icon': leftIconClass,
                            'h-input--dark': theme === "dark",
                        }), placeholder: placeholder, value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }),
                    leftIconClass ?
                        React.createElement("span", { "aria-hidden": "true", className: classNames("position-absolute ml-2 h-position-left-2 ps-1 h-icon-font-size-md", leftIconClass, { 'h-color-text-blue-200': theme === 'dark' }) })
                        :
                            null,
                    rightIconClass && showRightIcon ?
                        React.createElement("button", { type: "reset", name: "Clear Search", "aria-label": "Clear Search", onClick: onRightIconClick, className: classNames("\"ml-2 h-position-right-2 pe-1 h-icon-font-size-md position-absolute", rightIconClass, {
                                'h-color-text-blue-200': theme === 'dark',
                                'h-color-text-gray-500': theme === 'light'
                            }) })
                        :
                            null)))));
};
export { Input };
//# sourceMappingURL=Input.js.map