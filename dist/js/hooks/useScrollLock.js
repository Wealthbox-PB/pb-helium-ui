import { useEffect } from 'react';
var scrollLockSelector = "h-overflow-hidden";
export function useScrollLock(open, elementSelector) {
    if (elementSelector === void 0) { elementSelector = document.documentElement; }
    useEffect(function () {
        var element = typeof elementSelector === "string" ? document.querySelector(elementSelector) : elementSelector;
        if (open) {
            element === null || element === void 0 ? void 0 : element.classList.add(scrollLockSelector);
        }
        return function () {
            removeScrollLockSelector(element);
        };
    }, [elementSelector, open]);
}
function removeScrollLockSelector(element) {
    element === null || element === void 0 ? void 0 : element.classList.remove(scrollLockSelector);
}
//# sourceMappingURL=useScrollLock.js.map