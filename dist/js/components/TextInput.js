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
import React, { useRef } from 'react';
import { Label } from './Label';
import classNames from 'classnames';
import { randomString } from '../helpers/random_string';
var TextInput = function (_a, ref) {
    var _b = _a.id, id = _b === void 0 ? randomString() : _b, className = _a.className, _c = _a.inputType, inputType = _c === void 0 ? "text" : _c, label = _a.label, _d = _a.labelClassName, labelClassName = _d === void 0 ? "" : _d, leftIconClassName = _a.leftIconClassName, onRightButtonClick = _a.onRightButtonClick, rightButtonClassName = _a.rightButtonClassName, _e = _a.role, role = _e === void 0 ? "textbox" : _e, _f = _a.showLeftIcon, showLeftIcon = _f === void 0 ? true : _f, _g = _a.showRightButton, showRightButton = _g === void 0 ? true : _g, _h = _a.variant, variant = _h === void 0 ? "default" : _h, rest = __rest(_a, ["id", "className", "inputType", "label", "labelClassName", "leftIconClassName", "onRightButtonClick", "rightButtonClassName", "role", "showLeftIcon", "showRightButton", "variant"]);
    var uniqueIDRef = useRef(randomString());
    return (React.createElement(React.Fragment, null,
        label ?
            React.createElement(Label, { labelClassName: variant === "dark-blue" ? "h-color-text-blue-200 " + labelClassName : labelClassName, htmlFor: id ? id : uniqueIDRef.current }, label)
            :
                null,
        React.createElement("div", { className: "h-input-container" },
            React.createElement("input", __assign({ id: id ? id : uniqueIDRef.current, type: inputType, ref: ref, className: classNames("h-input", className, {
                    'h-input--with-icon': leftIconClassName && showLeftIcon,
                    'h-input--dark-blue': variant === "dark-blue",
                }), role: role }, rest)),
            leftIconClassName && showLeftIcon ?
                React.createElement("span", { "data-testid": "h-input__icon--left", "aria-hidden": "true", className: classNames("h-input__icon--left", leftIconClassName, {
                        'h-color-text-blue-200': variant === 'dark-blue',
                        'h-color-text-gray-500': variant === 'default'
                    }) })
                :
                    null,
            rightButtonClassName && showRightButton ?
                React.createElement("button", { type: "reset", name: "Clear Search", "aria-label": "Clear Search", onClick: onRightButtonClick, className: classNames("h-input__icon--right", rightButtonClassName, {
                        'h-color-text-blue-200': variant === 'dark-blue',
                        'h-color-text-gray-500': variant === 'default'
                    }) })
                :
                    null)));
};
var TextInputRef = React.forwardRef(TextInput);
export { TextInputRef as TextInput };
//# sourceMappingURL=TextInput.js.map