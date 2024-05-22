import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';
export var DialogBackdrop = function (_a) {
    var className = _a.className, closeDialog = _a.closeDialog;
    var context = useDialogContext();
    var handleClose = closeDialog || context.closeDialog;
    return (React.createElement("button", { type: "button", className: classNames("h-dialog__backdrop h-cursor-auto", className), onClick: handleClose, "aria-label": "Close Dialog", "data-testid": "h-dialog__backdrop" }));
};
//# sourceMappingURL=DialogBackdrop.js.map