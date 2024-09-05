import { createContext, useContext } from 'react';
export var SelectContext = createContext({
    activeIndex: null,
    getItemProps: function () { return ({}); },
    handleMultiSelect: function () { },
    handleSearchableSelect: function () { },
    handleSelect: function () { },
    multiSelectValue: [],
    selectedValue: null,
    setActiveIndex: function () { },
    searchInputRef: { current: null },
});
export function useSelectContext() {
    return useContext(SelectContext);
}
//# sourceMappingURL=SelectContext.js.map