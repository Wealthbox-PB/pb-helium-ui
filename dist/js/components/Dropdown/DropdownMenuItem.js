import React from 'react';
export var DropdownMenuItem = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("li", { className: "h-dropdown__menu__item " },
        React.createElement("button", { onClick: onClick, tabIndex: -1 }, label)));
};
//# sourceMappingURL=DropdownMenuItem.js.map