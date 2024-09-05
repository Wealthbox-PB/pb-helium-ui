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
import React from 'react';
import { Select } from './Select';
import { SelectInput } from '../SelectInput';
import { SelectMenuButton } from './SelectMenuButton';
var SimpleSelect = function (_a) {
    var children = _a.children, ariaLabel = _a.ariaLabel, className = _a.className, id = _a.id, labelClassName = _a.labelClassName, onSelect = _a.onSelect, options = _a.options, _b = _a.placeholder, placeholder = _b === void 0 ? "Select..." : _b, selectLabel = _a.selectLabel, props = __rest(_a, ["children", "ariaLabel", "className", "id", "labelClassName", "onSelect", "options", "placeholder", "selectLabel"]);
    return (React.createElement(Select, __assign({ renderOpener: function (_a) {
            var ref = _a.ref, selectedLabel = _a.selectedLabel, openerProps = __rest(_a, ["ref", "selectedLabel"]);
            return (React.createElement(SelectInput, __assign({ ref: ref, value: selectedLabel, placeholder: placeholder, label: selectLabel, "aria-label": ariaLabel, id: id, className: className, labelClassName: labelClassName }, openerProps)));
        } }, props),
        React.createElement(React.Fragment, null, options
            ? options.map(function (option) { return (React.createElement(SelectMenuButton, { key: option.value, value: option.value, label: option.label, onClick: onSelect })); })
            : children)));
};
export { SimpleSelect };
//# sourceMappingURL=SimpleSelect.js.map