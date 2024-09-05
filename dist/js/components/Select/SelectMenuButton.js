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
import React, { useCallback } from 'react';
import { useListItem } from '@floating-ui/react';
import { useSelectContext } from './SelectContext';
import classNames from 'classnames';
import { Checkbox } from '../Checkbox';
export var SelectMenuButton = function (_a) {
    var buttonClassName = _a.buttonClassName, children = _a.children, className = _a.className, disabled = _a.disabled, iconName = _a.iconName, label = _a.label, multiSelect = _a.multiSelect, onClick = _a.onClick, searchableMenu = _a.searchableMenu, _b = _a.customValue, customValue = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? "default" : _c, value = _a.value, props = __rest(_a, ["buttonClassName", "children", "className", "disabled", "iconName", "label", "multiSelect", "onClick", "searchableMenu", "customValue", "variant", "value"]);
    var _d = useSelectContext(), activeIndex = _d.activeIndex, getItemProps = _d.getItemProps, handleSearchableSelect = _d.handleSearchableSelect, handleSelect = _d.handleSelect, handleMultiSelect = _d.handleMultiSelect, multiSelectValue = _d.multiSelectValue, selectedValue = _d.selectedValue;
    var _e = useListItem({ label: label }), ref = _e.ref, index = _e.index;
    var isActive = activeIndex === index;
    var isSelected = multiSelect
        ? multiSelectValue && multiSelectValue.find(function (item) { return item === value; }) !== undefined
        : selectedValue === value && !customValue;
    var clickCallback = useCallback(function () {
        multiSelect
            ? handleMultiSelect === null || handleMultiSelect === void 0 ? void 0 : handleMultiSelect(value)
            : searchableMenu
                ? handleSearchableSelect === null || handleSearchableSelect === void 0 ? void 0 : handleSearchableSelect(customValue ? value : label, value)
                : handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(index, value);
    }, [
        handleMultiSelect,
        handleSearchableSelect,
        handleSelect,
        index,
        value,
        label,
        customValue,
        multiSelect,
        searchableMenu,
    ]);
    return (React.createElement("li", { className: classNames("h-dropdown__menu__item", className, {
            'h-dropdown__menu__item--active': isActive,
            'h-dropdown__menu__item--negative': isActive && variant === "negative",
        }) },
        React.createElement("button", __assign({ className: classNames("h-dropdown__menu__item__cta h-dropdown__menu__item__cta--select d-flex align-items-center", buttonClassName, {
                'h-dropdown__menu__item__cta--disabled': disabled,
            }), ref: ref, tabIndex: isActive ? 0 : -1, role: "menuitem" }, getItemProps({
            onClick: function (e) {
                clickCallback();
                onClick === null || onClick === void 0 ? void 0 : onClick(e);
            },
        }), { disabled: disabled }, props),
            multiSelect ? (React.createElement(Checkbox, { checked: isSelected, size: "sm", className: "me-1", onChange: function () { } })) : (React.createElement("span", { className: classNames("h-dropdown__menu__item__cta-selected h-font-size-lg me-1", {
                    'h-icon-task h-color-text-blue-500': isSelected,
                }), "data-testid": "h-dropdown__menu__item__cta-selected" })),
            children || (React.createElement(React.Fragment, null,
                iconName ? React.createElement("span", { className: "h-icon-".concat(iconName, " me-1") }) : null,
                React.createElement("div", { className: "text-ellipsis" }, label))))));
};
//# sourceMappingURL=SelectMenuButton.js.map