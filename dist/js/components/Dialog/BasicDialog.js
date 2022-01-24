var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { DialogPortal } from './DialogPortal';
import { DialogBackdrop } from './DialogBackdrop';
import classNames from 'classnames';
import { useDialog } from './useDialog';
import { DialogContext } from './DialogContext';
var dialogSelectorPrefix = "h-react-dialog";
var dialogEl = dialogSelectorPrefix + "__el";
export var BasicDialog = function (_a) {
    var open = _a.open, size = _a.size, position = _a.position, initialFocusEl = _a.initialFocusEl, returnFocusEl = _a.returnFocusEl, _b = _a.closeDialog, closeDialog = _b === void 0 ? function () { } : _b, children = _a.children, _c = _a.trapPaused, trapPaused = _c === void 0 ? false : _c, dialogElClass = _a.dialogElClass, _d = _a.dialogRole, dialogRole = _d === void 0 ? "dialog" : _d;
    var _e = useDialog({
        closeDialog: closeDialog,
        open: open,
        initialFocusEl: initialFocusEl,
        returnFocusEl: returnFocusEl,
        trapPaused: trapPaused,
        size: size,
        position: position,
        dialogRole: dialogRole,
    }), getRootProps = _e.getRootProps, dialogRef = _e.dialogRef, ariaLabelSelector = _e.ariaLabelSelector, ariaDescriptionSelector = _e.ariaDescriptionSelector;
    return (React.createElement(DialogContext.Provider, { value: { ariaLabelSelector: ariaLabelSelector, ariaDescriptionSelector: ariaDescriptionSelector } }, open && (React.createElement(DialogPortal, null,
        React.createElement("div", __assign({}, getRootProps()),
            React.createElement(DialogBackdrop, { handleClick: closeDialog }),
            React.createElement("div", { ref: dialogRef, tabIndex: -1, className: classNames(dialogEl, dialogElClass) }, children))))));
};
//# sourceMappingURL=BasicDialog.js.map