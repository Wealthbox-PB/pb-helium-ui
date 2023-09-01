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
import React from 'react';
import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';
import classNames from 'classnames';
export var DropdownMenuItem = function (_a) {
    var label = _a.label, onSelect = _a.onSelect, _b = _a.variant, variant = _b === void 0 ? "normal" : _b;
    var _c = useDropdownContext(), activeIndex = _c.activeIndex, getItemProps = _c.getItemProps, setOpen = _c.setOpen;
    var _d = useListItem({ label: label }), ref = _d.ref, index = _d.index;
    var isActive = activeIndex === index;
    return (React.createElement("li", { className: classNames("h-dropdown__menu__item ", {
            'h-dropdown__menu__item--active': isActive,
            'h-dropdown__menu__item--negative': isActive && variant === "negative",
        }) },
        React.createElement("button", __assign({ ref: ref, tabIndex: isActive ? 0 : -1 }, getItemProps({
            onClick: function () {
                setOpen(false);
                return onSelect();
            },
        })), label)));
};
//# sourceMappingURL=DropdownMenuItem.js.map