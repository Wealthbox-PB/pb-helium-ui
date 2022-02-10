import React from 'react';
import classNames from 'classnames';
var Button = function (_a, ref) {
    var _b;
    var _c = _a.active, active = _c === void 0 ? false : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? "" : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.focus, focus = _f === void 0 ? false : _f, onClick = _a.onClick, _g = _a.size, size = _g === void 0 ? "md" : _g, _h = _a.square, square = _h === void 0 ? false : _h, _j = _a.type, type = _j === void 0 ? "button" : _j, _k = _a.variant, variant = _k === void 0 ? "positive" : _k;
    return (React.createElement("button", { ref: ref, type: type, onClick: onClick, disabled: disabled, className: classNames("h-btn h-btn--" + variant + " h-btn--" + size, className, (_b = {},
            _b["h-btn--active"] = active,
            _b["h-btn--focus"] = focus,
            _b["h-btn--square"] = square,
            _b)) }, children));
};
var ButtonRef = React.forwardRef(Button);
export { ButtonRef as Button };
//# sourceMappingURL=Button.js.map