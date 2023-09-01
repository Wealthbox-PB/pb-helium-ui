import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
var Input = function (_a) {
    var _b = _a.autofocus, autofocus = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, iconClass = _a.iconClass, inputClasses = _a.inputClasses, label = _a.label, name = _a.name, placeholder = _a.placeholder, _d = _a.type, type = _d === void 0 ? "text" : _d, value = _a.value, onBlur = _a.onBlur, onChange = _a.onChange, onClearSearch = _a.onClearSearch, onFocus = _a.onFocus;
    var input = useRef(null);
    useEffect(function () {
        if (input.current && autofocus) {
            input.current.focus();
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: "w-100" },
            label ?
                React.createElement("span", { className: "d-inline-block mb-2" }, label)
                :
                    null,
            React.createElement("div", { className: "d-flex" },
                React.createElement("div", { className: "h-input-container" },
                    iconClass ?
                        React.createElement("span", { "aria-hidden": "true", className: classNames("position-absolute ml-2 h-icon-search h-input--search__icon h-icon-font-size-md", "h-color-text-gray-500") })
                        :
                            null,
                    React.createElement("input", { disabled: disabled, type: type, ref: input, role: "searchbox", name: name, "aria-label": name, className: classNames("h-input", inputClasses), placeholder: placeholder, value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }),
                    onClearSearch && value.length > 0 ?
                        React.createElement("button", { type: "reset", name: "Clear Search", "aria-label": "Clear Search", onClick: onClearSearch, className: "ml-2 h-icon-delete h-input__clear-icon h-icon-font-size-md h-color-text-gray-500" })
                        :
                            null)))));
};
export { Input };
//# sourceMappingURL=Input.js.map