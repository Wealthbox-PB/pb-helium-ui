import React, { useState, forwardRef } from 'react';
import classNames from 'classnames';
var Checkbox = function (_a, ref) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, disabled = _a.disabled, _c = _a.indeterminate, indeterminate = _c === void 0 ? false : _c, label = _a.label, labelClass = _a.labelClass, name = _a.name, onChange = _a.onChange, size = _a.size, value = _a.value;
    var _d = useState(checked), isChecked = _d[0], setIsChecked = _d[1];
    var _e = useState(indeterminate), isIndeterminate = _e[0], setIsIndeterminate = _e[1];
    function handleCheckBoxChange() {
        if (isIndeterminate) {
            setIsChecked(true);
            setIsIndeterminate(false);
        }
        else {
            setIsChecked(function (prevChecked) { return !prevChecked; });
        }
        onChange === null || onChange === void 0 ? void 0 : onChange({ checked: !isChecked, indeterminate: isIndeterminate });
    }
    return (React.createElement("label", { className: classNames("h-checkbox h-checkbox--animate", labelClass, {
            'h-checkbox--sm': size === "small",
            'h-checkbox--lg': size === "large",
        }) },
        name ? React.createElement("input", { name: name, type: "hidden", value: value }) : null,
        React.createElement("button", { disabled: disabled, ref: ref, type: "button", className: classNames("h-checkbox__elm", {
                'h-checkbox__elm--indeterminate': indeterminate || isIndeterminate,
                'h-checkbox__elm--checked': checked || (isChecked && !isIndeterminate),
            }), onClick: handleCheckBoxChange }),
        React.createElement("span", { className: "h-checkbox__container" }),
        label ? React.createElement("span", { className: "h-checkbox__label-content" }, label) : null));
};
var CheckboxRef = forwardRef(Checkbox);
export { CheckboxRef as Checkbox };
//# sourceMappingURL=Checkbox.js.map