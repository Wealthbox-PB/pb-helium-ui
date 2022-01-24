import React, { useContext } from 'react';
import { DialogContext } from './DialogContext';
var DialogBody = function (_a) {
    var _b = _a.bodyClass, bodyClass = _b === void 0 ? "" : _b, _c = _a.ariaDescriptionSelector, ariaDescriptionSelector = _c === void 0 ? "" : _c, children = _a.children;
    var context = useContext(DialogContext);
    return (React.createElement("div", { className: "h-react-dialog__body " + bodyClass, id: ariaDescriptionSelector || context.ariaDescriptionSelector }, children));
};
export { DialogBody };
//# sourceMappingURL=DialogBody.js.map