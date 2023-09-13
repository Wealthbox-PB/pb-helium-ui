import React, { useRef } from 'react';
import classNames from 'classnames';
import { Label } from './Label';
import { randomString } from '../helpers/random_string';
var RadioButton = function (_a) {
    var _b = _a.autofocus, autofocus = _b === void 0 ? false : _b, _c = _a.checked, checked = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.id, id = _e === void 0 ? randomString() : _e, label = _a.label, name = _a.name, onChange = _a.onChange, onClick = _a.onClick, _f = _a.size, size = _f === void 0 ? "large" : _f, _g = _a.variant, variant = _g === void 0 ? "default" : _g;
    var uniqueID = useRef(randomString());
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { "data-testid": "h-radio", className: classNames("h-radio h-radio--animate", {
                'h-radio--sm': size === "small",
                'h-radio--lg': size === "large",
                'h-radio-pill-button': variant === "pill",
            }) },
            React.createElement("input", { autoFocus: autofocus, checked: checked, className: "h-radio__elm", disabled: disabled, id: id ? id : uniqueID.current, name: name, onChange: onChange, onClick: onClick, type: "radio" }),
            React.createElement("span", { className: "h-radio__container" }),
            label ?
                React.createElement(Label, { labelClassName: disabled ? "h-radio__label-content h-color-text-gray-500" : "h-radio__label-content", htmlFor: id ? id : uniqueID.current }, label)
                :
                    null,
            React.createElement("span", { className: "h-radio-pill-button-radio-fill" }))));
};
export { RadioButton };
//# sourceMappingURL=RadioButton.js.map