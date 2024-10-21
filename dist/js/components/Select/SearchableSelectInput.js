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
import { useSelectContext } from './SelectContext';
import { TextInput } from '../TextInput';
import classNames from 'classnames';
export var SearchableSelectInput = function (_a) {
    var options = _a.options, className = _a.className, handleQuery = _a.handleQuery, inputClassName = _a.inputClassName, multiSelect = _a.multiSelect, _b = _a.placeholder, placeholder = _b === void 0 ? "Search..." : _b, onKeyDown = _a.onKeyDown, props = __rest(_a, ["options", "className", "handleQuery", "inputClassName", "multiSelect", "placeholder", "onKeyDown"]);
    var _c = useSelectContext(), activeIndex = _c.activeIndex, setActiveIndex = _c.setActiveIndex, handleSearchableSelect = _c.handleSearchableSelect, handleMultiSelect = _c.handleMultiSelect, searchInputRef = _c.searchInputRef;
    return (React.createElement("div", { className: classNames("h-border-bottom-shared-component p-2", className) },
        React.createElement(TextInput, __assign({ type: "text", leftIconClassName: "h-icon-search", className: inputClassName, placeholder: placeholder, onChange: function (e) {
                handleQuery === null || handleQuery === void 0 ? void 0 : handleQuery(e.target.value);
                setActiveIndex(0);
            }, onKeyDown: function (e) {
                if (e.key === "Enter") {
                    e.preventDefault();
                    if (activeIndex !== null && options[activeIndex]) {
                        var selectedOption = options[activeIndex];
                        if (multiSelect) {
                            handleMultiSelect === null || handleMultiSelect === void 0 ? void 0 : handleMultiSelect(selectedOption);
                        }
                        else {
                            handleSearchableSelect === null || handleSearchableSelect === void 0 ? void 0 : handleSearchableSelect(selectedOption.label, selectedOption.value);
                        }
                        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(selectedOption.value);
                    }
                }
            }, variant: "filled", ref: searchInputRef }, props))));
};
//# sourceMappingURL=SearchableSelectInput.js.map