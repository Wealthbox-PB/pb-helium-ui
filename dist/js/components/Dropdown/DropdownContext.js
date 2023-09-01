import React, { useContext } from 'react';
export var DropdownContext = React.createContext({
    activeIndex: null,
    getItemProps: function () { return ({}); },
    setOpen: function () { },
});
export function useDropdownContext() {
    return useContext(DropdownContext);
}
//# sourceMappingURL=DropdownContext.js.map