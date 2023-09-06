import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
var Input = function (_a) {
    var _b = _a.autofocus, autofocus = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, leftIconClass = _a.leftIconClass, inputClasses = _a.inputClasses, label = _a.label, labelClasses = _a.labelClasses, name = _a.name, placeholder = _a.placeholder, _d = _a.theme, theme = _d === void 0 ? "light" : _d, _e = _a.type, type = _e === void 0 ? "text" : _e, value = _a.value, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onRightIconClick = _a.onRightIconClick, _f = _a.showRightIcon, showRightIcon = _f === void 0 ? true : _f, rightIconClass = _a.rightIconClass;
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
                React.createElement("div", { className: "h-input-container h-color-text-gray-500" },
                    React.createElement("input", { disabled: disabled, type: type, ref: input, role: "searchbox", name: name, "aria-label": name, className: classNames("h-input", inputClasses, {
                            'h-input--icon': leftIconClass,
                            'h-input--dark': theme === "dark",
                        }), placeholder: placeholder, value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }),
                    leftIconClass ?
                        React.createElement("span", { "aria-hidden": "true", className: classNames("position-absolute ml-2 h-input-icon-left h-icon-font-size-md", leftIconClass, { 'h-color-text-blue-200': theme === 'dark' }) })
                        :
                            null,
                    rightIconClass && showRightIcon ?
                        React.createElement("button", { type: "reset", name: "Clear Search", "aria-label": "Clear Search", onClick: onRightIconClick, className: classNames("\"ml-2 h-input-icon-right h-icon-font-size-md position-absolute", rightIconClass, { 'h-color-text-blue-200': theme === 'dark' }) })
                        :
                            null)))));
};
export { Input };
//# sourceMappingURL=Input.js.map