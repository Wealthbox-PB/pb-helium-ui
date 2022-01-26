import classNames from 'classnames';
import React from 'react';
var Button = function (_a, ref) {
    var children = _a.children, onClick = _a.onClick, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, _c = _a.type, type = _c === void 0 ? "button" : _c, _d = _a.className, className = _d === void 0 ? "" : _d;
    return (React.createElement("button", { ref: ref, type: type, onClick: onClick, className: classNames("h-btn h-btn--" + variant, className) }, children));
};
var ButtonRef = React.forwardRef(Button);
export { ButtonRef as Button };
//# sourceMappingURL=Button.js.map