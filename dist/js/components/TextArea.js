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
var TextArea = function (_a, ref) {
    var id = _a.id, className = _a.className, label = _a.label, labelClassName = _a.labelClassName, rest = __rest(_a, ["id", "className", "label", "labelClassName"]);
    var uniqueIDRef = useRef(randomString());
    return (React.createElement(React.Fragment, null,
        label ? (React.createElement(Label, { labelClassName: labelClassName, htmlFor: id ? id : uniqueIDRef.current }, label)) : null,
        React.createElement("textarea", __assign({ id: id ? id : uniqueIDRef.current, ref: ref, className: classNames("h-textarea", className) }, rest))));
};
var TextAreaRef = React.forwardRef(TextArea);
export { TextAreaRef as TextArea };
//# sourceMappingURL=TextArea.js.map