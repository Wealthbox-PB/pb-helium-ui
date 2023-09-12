import React from 'react';
import classNames from 'classnames';
import { Label } from './Label';
var RadioButton = function (_a) {
    var _b = _a.autofocus, autofocus = _b === void 0 ? false : _b, _c = _a.checked, checked = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, label = _a.label, name = _a.name, onChange = _a.onChange, onClick = _a.onClick, _e = _a.size, size = _e === void 0 ? "large" : _e, _f = _a.variant, variant = _f === void 0 ? "default" : _f;
    var id = self.crypto.randomUUID();
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { "data-testid": "h-radio", className: classNames("h-radio h-radio--animate", {
                'h-radio--sm': size === "small",
                'h-radio--lg': size === "large",
                'h-radio-pill-button': variant === "pill",
            }) },
            React.createElement("input", { id: id, autoFocus: autofocus, className: "h-radio__elm", type: "radio", name: name, checked: checked, disabled: disabled, onClick: onClick, onChange: onChange }),
            React.createElement("span", { className: "h-radio__container" }),
            label ?
                React.createElement(Label, { labelText: label, labelClassName: disabled ? "h-radio__label-content h-color-text-gray-500" : "h-radio__label-content", htmlFor: id })
                :
                    null,
            React.createElement("span", { className: "h-radio-pill-button-radio-fill" }))));
};
export { RadioButton };
//# sourceMappingURL=RadioButton.js.map