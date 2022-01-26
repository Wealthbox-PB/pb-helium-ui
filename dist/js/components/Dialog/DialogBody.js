import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';
var DialogBody = function (_a) {
    var _b = _a.bodyClassName, bodyClassName = _b === void 0 ? "" : _b, _c = _a.ariaDescriptionSelector, ariaDescriptionSelector = _c === void 0 ? "" : _c, children = _a.children;
    var context = useDialogContext();
    return (React.createElement("div", { className: classNames("h-dialog__body", bodyClassName), id: ariaDescriptionSelector || context.ariaDescriptionSelector }, children));
};
export { DialogBody };
//# sourceMappingURL=DialogBody.js.map