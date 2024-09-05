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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useEffect, useState } from 'react';
import { Select } from './Select';
import { SelectMenuButton } from './SelectMenuButton';
import { SelectInput } from '../SelectInput';
import { DropdownMenuSeparator } from '../Dropdown/DropdownMenuSeparator';
var SearchableSelect = function (_a) {
    var _b;
    var initialOptions = _a.initialOptions, _c = _a.allowCustomValue, allowCustomValue = _c === void 0 ? false : _c, ariaLabel = _a.ariaLabel, className = _a.className, initialSelectedValue = _a.initialSelectedValue, labelClassName = _a.labelClassName, onSelect = _a.onSelect, _d = _a.placeholder, placeholder = _d === void 0 ? "Select..." : _d, selectId = _a.selectId, selectLabel = _a.selectLabel, props = __rest(_a, ["initialOptions", "allowCustomValue", "ariaLabel", "className", "initialSelectedValue", "labelClassName", "onSelect", "placeholder", "selectId", "selectLabel"]);
    var _e = useState(""), query = _e[0], setQuery = _e[1];
    var _f = useState(initialOptions), options = _f[0], setOptions = _f[1];
    var _g = useState(false), queryExists = _g[0], setQueryExists = _g[1];
    var initialLabel = ((_b = initialOptions.find(function (option) { return option.value === initialSelectedValue; })) === null || _b === void 0 ? void 0 : _b.label) || initialSelectedValue;
    var isCustomValueDisplayed = query && allowCustomValue && !queryExists;
    useEffect(function () {
        var filteredOptions = initialOptions.filter(function (option) {
            return option.label.toLowerCase().includes(query.toLowerCase());
        });
        var existingQuery = filteredOptions.find(function (option) { return option.label.toLowerCase() === query.toLowerCase(); }) !== undefined;
        setQueryExists(existingQuery);
        if (isCustomValueDisplayed) {
            setOptions(__spreadArray(__spreadArray([], filteredOptions, true), [{ label: query, value: query }], false));
        }
        else {
            setOptions(filteredOptions);
        }
    }, [query, initialOptions, allowCustomValue, isCustomValueDisplayed]);
    return (React.createElement(Select, __assign({ renderOpener: function (_a) {
            var ref = _a.ref, selectedLabel = _a.selectedLabel, openerProps = __rest(_a, ["ref", "selectedLabel"]);
            return (React.createElement(SelectInput, __assign({ ref: ref, value: selectedLabel, placeholder: placeholder, label: selectLabel, "aria-label": ariaLabel, id: selectId, className: className, labelClassName: labelClassName }, openerProps)));
        }, initialSelectedLabel: initialLabel, initialSelectedValue: initialSelectedValue, virtualFocus: true, handleQuery: function (query) { return setQuery(query); }, displayOptions: options }, props),
        React.createElement(React.Fragment, null, options.length ? (options.map(function (option, i) {
            var customValueOption = i === options.length - 1 && isCustomValueDisplayed;
            return (React.createElement(React.Fragment, { key: option.value },
                customValueOption && options.length > 1 ? React.createElement(DropdownMenuSeparator, null) : null,
                React.createElement(SelectMenuButton, { label: "".concat(customValueOption ? "Specify: " : "").concat(option.label), value: option.value, searchableMenu: true, onClick: onSelect, customValue: customValueOption ? true : false })));
        })) : (React.createElement("li", { className: "h-dropdown__menu__item h-dropdown__menu__item--empty" }, "No results found.")))));
};
export { SearchableSelect };
//# sourceMappingURL=SearchableSelect.js.map