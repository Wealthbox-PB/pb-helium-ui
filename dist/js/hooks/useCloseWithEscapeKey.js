import { useEffect } from 'react';
export function useCloseWithEscapeKey(closeCallback, keyDownTargetRef, open) {
    var handleEscapeKeyPress = function (event) {
        if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
            closeCallback();
            event.stopPropagation();
        }
    };
    useEffect(function () {
        var ref = keyDownTargetRef.current;
        if (open) {
            ref === null || ref === void 0 ? void 0 : ref.addEventListener("keydown", handleEscapeKeyPress);
        }
        return function () {
            ref === null || ref === void 0 ? void 0 : ref.removeEventListener("keydown", handleEscapeKeyPress);
        };
    });
}
//# sourceMappingURL=useCloseWithEscapeKey.js.map