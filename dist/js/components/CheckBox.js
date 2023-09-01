import React, { useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames';
var CheckBox = function (_a, ref) {
    var name = _a.name, value = _a.value, _b = _a.checked, checked = _b === void 0 ? false : _b, label = _a.label, labelClass = _a.labelClass, size = _a.size, _c = _a.disabled, disabled = _c === void 0 ? false : _c, onChange = _a.onChange;
    var _d = useState(!!checked), isChecked = _d[0], setIsChecked = _d[1];
    function handleCheckBoxChange(e) {
        if (value === "") {
            setIsChecked(false);
        }
        else {
            setIsChecked(!value);
        }
        onChange(e);
    }
    useEffect(function () {
        setIsChecked(checked);
    }, [checked]);
    return (React.createElement("label", { className: classNames("h-checkbox h-checkbox--animate", labelClass, {
            'h-checkbox--sm': size === "small",
            'h-checkbox--lg': size === "large",
        }) },
        React.createElement("input", { name: name, type: "hidden", value: "0" }),
        React.createElement("input", { name: name, type: "checkbox", value: value, className: "h-checkbox__elm", checked: isChecked, onChange: handleCheckBoxChange, disabled: disabled, ref: ref }),
        React.createElement("span", { className: "h-checkbox__container" }),
        label ? React.createElement("span", { className: "h-checkbox__label-content" }, label) : null));
};
var CheckBoxRef = forwardRef(CheckBox);
export { CheckBoxRef as CheckBox };
//# sourceMappingURL=CheckBox.js.map