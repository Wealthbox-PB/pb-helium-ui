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
export var DropdownMenuItem = function (_a) {
    var label = _a.label, onSelect = _a.onSelect;
    var _b = useDropdownContext(), activeIndex = _b.activeIndex, getItemProps = _b.getItemProps;
    var _c = useListItem(), ref = _c.ref, index = _c.index;
    var isActive = activeIndex === index;
    return (React.createElement("li", { className: "h-dropdown__menu__item " },
        React.createElement("button", __assign({ ref: ref, tabIndex: isActive ? 0 : -1 }, getItemProps({
            onClick: function () {
                return onSelect();
            },
        })), label)));
};
//# sourceMappingURL=DropdownMenuItem.js.map