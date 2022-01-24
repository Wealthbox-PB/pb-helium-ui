import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
var portalRoot = function () { return document.body; };
var DialogPortal = function (_a) {
    var children = _a.children;
    var el = useMemo(function () { return document.createElement("div"); }, []);
    el.className = "h-react-dialog-portal";
    useEffect(function () {
        portalRoot().appendChild(el);
        return function () {
            portalRoot().removeChild(el);
        };
    }, [el]);
    return createPortal(children, el);
};
export { DialogPortal };
//# sourceMappingURL=DialogPortal.js.map