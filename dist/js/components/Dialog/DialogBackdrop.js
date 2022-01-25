import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';
export var DialogBackdrop = function (_a) {
    var className = _a.className;
    var context = useDialogContext();
    return (React.createElement("button", { type: "button", className: classNames("h-dialog__backdrop", className), onClick: context.closeDialog, "aria-label": "Close Dialog" }));
};
//# sourceMappingURL=DialogBackdrop.js.map