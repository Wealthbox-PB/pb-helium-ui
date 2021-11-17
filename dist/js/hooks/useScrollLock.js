import { useEffect } from 'react';
export var useScrollLock = function (elementSelector, open) {
    useEffect(function () {
        var element = document.querySelector(elementSelector);
        var scrollLockSelector = "h-overflow-hidden";
        var removeScrollLockSelector = function () { return element === null || element === void 0 ? void 0 : element.classList.remove(scrollLockSelector); };
        if (open) {
            element === null || element === void 0 ? void 0 : element.classList.add(scrollLockSelector);
        }
        else {
            removeScrollLockSelector();
        }
        return function () {
            removeScrollLockSelector();
        };
    }, [elementSelector, open]);
};
//# sourceMappingURL=useScrollLock.js.map