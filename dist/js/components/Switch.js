import React, { useState } from 'react';
import classNames from 'classnames';
import { Switch as HeadlessUiSwitch } from '@headlessui/react';
export var Switch = function (_a) {
    var name = _a.name, ariaLabel = _a.ariaLabel, _b = _a.defaultValue, defaultValue = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? "primary" : _c;
    var _d = useState(defaultValue), enabled = _d[0], setEnabled = _d[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "hidden", name: name, value: enabled.toString(), "data-testid": "h-switch-hidden-input" }),
        React.createElement(HeadlessUiSwitch, { checked: enabled, onChange: setEnabled, className: classNames("h-switch", {
                'h-switch--enabled': enabled,
                'h-switch--primary': enabled && variant === "primary",
                'h-switch--positive': enabled && variant === "positive",
            }), "aria-label": setAriaLabel(ariaLabel, enabled) })));
};
var setAriaLabel = function (ariaLabel, enabled) {
    if (ariaLabel) {
        return ariaLabel;
    }
    return enabled ? "On" : "Off";
};
//# sourceMappingURL=Switch.js.map