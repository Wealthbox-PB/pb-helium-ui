import React from 'react';
import classNames from 'classnames';
var Button = function (_a, ref) {
    var _b = _a.active, active = _b === void 0 ? false : _b, ariaLabel = _a.ariaLabel, children = _a.children, className = _a.className, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.focus, focus = _d === void 0 ? false : _d, _e = _a.onClick, onClick = _e === void 0 ? function () { } : _e, _f = _a.size, size = _f === void 0 ? "md" : _f, _g = _a.square, square = _g === void 0 ? false : _g, _h = _a.type, type = _h === void 0 ? "button" : _h, _j = _a.variant, variant = _j === void 0 ? "positive" : _j, id = _a.id;
    return (React.createElement("button", { id: id, ref: ref, type: type, onClick: onClick, disabled: disabled, "aria-label": ariaLabel, className: classNames("h-btn h-btn--".concat(variant, " h-btn--").concat(size), className, {
            'h-btn--active': active,
            'h-btn--focus': focus,
            'h-btn--square': square,
        }) }, children));
};
var ButtonRef = React.forwardRef(Button);
export { ButtonRef as Button };
//# sourceMappingURL=Button.js.map