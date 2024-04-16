var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useState } from 'react';
import { buttonClassNames } from './Button';
var LinkButton = function (_a) {
    var _b = _a.active, active = _b === void 0 ? false : _b, children = _a.children, className = _a.className, _c = _a.disableAfterClick, disableAfterClick = _c === void 0 ? false : _c, _d = _a.disabled, disabledOnInitialRender = _d === void 0 ? false : _d, _e = _a.focus, focus = _e === void 0 ? false : _e, href = _a.href, _f = _a.isExternal, isExternal = _f === void 0 ? false : _f, _g = _a.onClick, originalOnClick = _g === void 0 ? function () { } : _g, _h = _a.size, size = _h === void 0 ? "md" : _h, _j = _a.square, square = _j === void 0 ? false : _j, _k = _a.variant, variant = _k === void 0 ? "positive" : _k, props = __rest(_a, ["active", "children", "className", "disableAfterClick", "disabled", "focus", "href", "isExternal", "onClick", "size", "square", "variant"]);
    var _l = useState(disabledOnInitialRender), isDisabled = _l[0], setIsDisabled = _l[1];
    var styleProps = { active: active, className: className, focus: focus, disabled: isDisabled, size: size, square: square, variant: variant };
    var onClick = useCallback(function (event) {
        if (isDisabled) {
            event.preventDefault();
        }
        else {
            originalOnClick(event);
            setIsDisabled(disableAfterClick);
        }
    }, [isDisabled, originalOnClick, disableAfterClick]);
    if (isExternal) {
        props.rel || (props.rel = "noopener noreferrer");
        props.target || (props.target = "_blank");
    }
    return (React.createElement("a", __assign({ onClick: onClick, href: href, className: buttonClassNames(styleProps) }, props), children));
};
export { LinkButton };
//# sourceMappingURL=LinkButton.js.map