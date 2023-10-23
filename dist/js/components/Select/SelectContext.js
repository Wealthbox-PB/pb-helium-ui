import { createContext, useContext } from 'react';
export var SelectContext = createContext({
    activeIndex: null,
    getItemProps: function () { return ({}); },
    setOpen: function () { },
    handleSelect: function () { },
    selectedIndex: null,
});
export function useSelectContext() {
    return useContext(SelectContext);
}
//# sourceMappingURL=SelectContext.js.map