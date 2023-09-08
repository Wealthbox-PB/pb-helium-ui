import React from 'react';
import classNames from 'classnames';
var Button = function (_a, ref) {
    var _b = _a.active, active = _b === void 0 ? false : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.focus, focus = _e === void 0 ? false : _e, _f = _a.onClick, onClick = _f === void 0 ? function () { } : _f, _g = _a.size, size = _g === void 0 ? "md" : _g, _h = _a.square, square = _h === void 0 ? false : _h, _j = _a.type, type = _j === void 0 ? "button" : _j, _k = _a.variant, variant = _k === void 0 ? "positive" : _k;
    return (React.createElement("button", { ref: ref, type: type, onClick: onClick, disabled: disabled, className: classNames("h-btn h-btn--".concat(variant, " h-btn--").concat(size), className, {
            'h-btn--active': active,
            'h-btn--focus': focus,
            'h-btn--square': square,
        }) }, children));
};
var ButtonRef = React.forwardRef(Button);
export { ButtonRef as Button };
//# sourceMappingURL=Button.js.map