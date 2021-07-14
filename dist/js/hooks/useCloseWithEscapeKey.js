import { useEffect } from "react";
export var useCloseWithEscapeKey = function (keyDownTargetRef, closeCallback, open) {
    var handleEscapeKeyPress = function (event) {
        if (event.key === "Escape") {
            return closeCallback();
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
};
//# sourceMappingURL=useCloseWithEscapeKey.js.map