import { createContext, useContext } from 'react';
export var DropdownContext = createContext({
    activeIndex: null,
    getItemProps: function () { return ({}); },
    setOpen: function () { },
});
export function useDropdownContext() {
    return useContext(DropdownContext);
}
//# sourceMappingURL=DropdownContext.js.map