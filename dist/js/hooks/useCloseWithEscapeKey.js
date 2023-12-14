import { useEffect } from 'react';
export function useCloseWithEscapeKey(closeCallback, open, keyDownTargetRef) {
    var handleEscapeKeyPress = function (event) {
        if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
            closeCallback();
            event.stopPropagation();
        }
    };
    useEffect(function () {
        var element = keyDownTargetRef ? keyDownTargetRef.current : document;
        if (open) {
            element === null || element === void 0 ? void 0 : element.addEventListener("keydown", handleEscapeKeyPress);
        }
        return function () {
            element === null || element === void 0 ? void 0 : element.removeEventListener("keydown", handleEscapeKeyPress);
        };
    });
}
//# sourceMappingURL=useCloseWithEscapeKey.js.map