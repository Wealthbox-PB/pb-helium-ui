import { useEffect } from 'react';
export var useCloseWithEscapeKey = function (keyDownTargetRef, closeCallback, open) {
    var handleEscapeKeyPress = function (event) {
        if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
            return closeCallback(); // Consider removing this return based on chris che's suggestion
            // Should we add event.stopPropagation() so this doesn't bubble and cause unwanted ux? https://sarahmhigley.com/writing/escaping-101/
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