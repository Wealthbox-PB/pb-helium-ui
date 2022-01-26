import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
var portalRoot = function (selector) {
    if (selector === void 0) { selector = ""; }
    var el = null;
    if (selector) {
        el = document.querySelector(selector);
    }
    return el ? el : document.body;
};
var Portal = function (_a) {
    var children = _a.children, selector = _a.selector, _b = _a.className, className = _b === void 0 ? "" : _b;
    var el = useMemo(function () {
        var div = document.createElement("div");
        div.classList.add(className);
        return div;
    }, [className]);
    useEffect(function () {
        portalRoot(selector).appendChild(el);
        return function () {
            portalRoot(selector).removeChild(el);
        };
    }, [el, selector]);
    return createPortal(children, el);
};
export { Portal };
//# sourceMappingURL=Portal.js.map