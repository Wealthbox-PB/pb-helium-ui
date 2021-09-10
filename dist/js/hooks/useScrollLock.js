import { useEffect } from "react";
export var useScrollLock = function (elementSelector, open) {
    useEffect(function () {
        var element = document.querySelector(elementSelector);
        var removeScrollLockSelector = function () { return element === null || element === void 0 ? void 0 : element.classList.remove(scrollLockSelector); };
        var scrollLockSelector = "h-overflow-hidden";
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