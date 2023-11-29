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
import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';
import classNames from 'classnames';
export var DropdownMenuButton = function (_a) {
    var buttonClassName = _a.buttonClassName, children = _a.children, className = _a.className, iconName = _a.iconName, label = _a.label, onSelect = _a.onSelect, _b = _a.closeOnSelect, closeOnSelect = _b === void 0 ? true : _b, _c = _a.variant, variant = _c === void 0 ? "default" : _c, props = __rest(_a, ["buttonClassName", "children", "className", "iconName", "label", "onSelect", "closeOnSelect", "variant"]);
    var _d = useDropdownContext(), activeIndex = _d.activeIndex, getItemProps = _d.getItemProps, setOpen = _d.setOpen;
    var _e = useListItem({ label: label }), ref = _e.ref, index = _e.index;
    var isActive = activeIndex === index;
    return (React.createElement("li", { className: classNames("h-dropdown__menu__item ", className, {
            'h-dropdown__menu__item--active': isActive,
            'h-dropdown__menu__item--negative': isActive && variant === "negative",
        }) },
        React.createElement("button", __assign({}, props, { className: classNames("h-dropdown__menu__item__cta", buttonClassName), ref: ref, tabIndex: isActive ? 0 : -1, role: "menuitem" }, getItemProps({
            onClick: function (e) {
                if (closeOnSelect) {
                    setOpen(false);
                }
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(e);
            },
            onMouseDown: function (e) {
                if (closeOnSelect) {
                    setOpen(false);
                }
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(e);
            },
            onKeyDown: function (e) {
                if (e.key === "Enter") {
                    if (closeOnSelect) {
                        setOpen(false);
                    }
                    onSelect === null || onSelect === void 0 ? void 0 : onSelect(e);
                }
            },
        })), children || (React.createElement(React.Fragment, null,
            iconName ? React.createElement("span", { className: "h-icon-".concat(iconName, " me-1") }) : null,
            label)))));
};
//# sourceMappingURL=DropdownMenuButton.js.map