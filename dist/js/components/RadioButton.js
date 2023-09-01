import React from 'react';
import classNames from 'classnames';
var RadioButton = function (_a) {
    var name = _a.name, _b = _a.checked, checked = _b === void 0 ? false : _b, label = _a.label, _c = _a.size, size = _c === void 0 ? "large" : _c, _d = _a.style, style = _d === void 0 ? "default" : _d, onClick = _a.onClick, onChange = _a.onChange;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: classNames("h-radio h-radio--animate", {
                'h-checkbox--sm': size === "small",
                'h-checkbox--lg': size === "large",
                'h-radio-pill-button': style === "pill",
            }) },
            React.createElement("input", { className: "h-radio__elm", type: "radio", name: name, checked: checked, onClick: onClick, onChange: onChange }),
            React.createElement("span", { className: "h-radio__container" }),
            React.createElement("span", { className: "h-radio__label ms-2" }, label),
            React.createElement("span", { className: "h-radio-pill-button-radio-fill" }))));
};
export { RadioButton };
//# sourceMappingURL=RadioButton.js.map