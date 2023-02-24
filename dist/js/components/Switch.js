import React, { useState } from 'react';
import classNames from 'classnames';
import { Switch as HeadlessUiSwitch } from '@headlessui/react';
export var Switch = function (_a) {
    var ariaLabel = _a.ariaLabel, _b = _a.defaultValue, defaultValue = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, name = _a.name, _d = _a.variant, variant = _d === void 0 ? "primary" : _d;
    var _e = useState(defaultValue), on = _e[0], setOn = _e[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "hidden", name: name, value: on.toString(), "data-testid": "h-switch-hidden-input" }),
        React.createElement(HeadlessUiSwitch, { disabled: disabled, checked: on, onChange: setOn, className: classNames("h-switch", {
                'h-switch--on': on,
                'h-switch--primary': on && variant === "primary",
                'h-switch--positive': on && variant === "positive",
            }), "aria-label": setAriaLabel(ariaLabel, on) })));
};
var setAriaLabel = function (ariaLabel, on) {
    if (ariaLabel) {
        return ariaLabel;
    }
    return on ? "On" : "Off";
};
//# sourceMappingURL=Switch.js.map