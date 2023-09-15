import React from 'react';
import classNames from 'classnames';
var Button = function (_a, ref) {
    var _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.buttonAriaLabel, buttonAriaLabel = _c === void 0 ? undefined : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? "" : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.focus, focus = _f === void 0 ? false : _f, _g = _a.onClick, onClick = _g === void 0 ? function () { } : _g, _h = _a.size, size = _h === void 0 ? "md" : _h, _j = _a.square, square = _j === void 0 ? false : _j, _k = _a.type, type = _k === void 0 ? "button" : _k, _l = _a.variant, variant = _l === void 0 ? "positive" : _l, _m = _a.id, id = _m === void 0 ? undefined : _m;
    return (React.createElement("button", { id: id, ref: ref, type: type, onClick: onClick, disabled: disabled, "aria-label": buttonAriaLabel, className: classNames("h-btn h-btn--".concat(variant, " h-btn--").concat(size), className, {
            'h-btn--active': active,
            'h-btn--focus': focus,
            'h-btn--square': square,
        }) }, children));
};
var ButtonRef = React.forwardRef(Button);
export { ButtonRef as Button };
//# sourceMappingURL=Button.js.map