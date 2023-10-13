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
export var DropdownMenuLink = function (_a) {
    var children = _a.children, label = _a.label, iconName = _a.iconName, _b = _a.variant, variant = _b === void 0 ? "default" : _b, className = _a.className, linkClassName = _a.linkClassName, props = __rest(_a, ["children", "label", "iconName", "variant", "className", "linkClassName"]);
    var _c = useDropdownContext(), activeIndex = _c.activeIndex, getItemProps = _c.getItemProps, setOpen = _c.setOpen;
    var _d = useListItem({ label: label }), ref = _d.ref, index = _d.index;
    var isActive = activeIndex === index;
    return (React.createElement("li", { className: classNames("h-dropdown__menu__item ", className, {
            'h-dropdown__menu__item--active': isActive,
            'h-dropdown__menu__item--negative': isActive && variant === "negative",
        }) },
        React.createElement("a", __assign({ className: classNames("h-dropdown__menu__item__cta", linkClassName), ref: ref, tabIndex: isActive ? 0 : -1, role: "menuitem" }, getItemProps({
            onClick: function (e) {
                e.stopPropagation();
                setOpen(false);
            },
        }), props), children || (React.createElement(React.Fragment, null,
            iconName ? React.createElement("span", { className: "h-icon-".concat(iconName, " me-1") }) : null,
            label)))));
};
//# sourceMappingURL=DropdownMenuLink.js.map