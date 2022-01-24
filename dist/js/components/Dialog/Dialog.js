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
import { BasicDialog } from './BasicDialog';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
var Dialog = function (_a) {
    var open = _a.open, size = _a.size, position = _a.position, initialFocusEl = _a.initialFocusEl, returnFocusEl = _a.returnFocusEl, closeDialog = _a.closeDialog, submitHandler = _a.submitHandler, header = _a.header, headerClass = _a.headerClass, _b = _a.closeInHeader, closeInHeader = _b === void 0 ? true : _b, bodyClass = _a.bodyClass, children = _a.children, _c = _a.hasFooter, hasFooter = _c === void 0 ? true : _c, footer = _a.footer, _d = _a.footerBackground, footerBackground = _d === void 0 ? true : _d, _e = _a.trapPaused, trapPaused = _e === void 0 ? false : _e, dialogElClass = _a.dialogElClass, _f = _a.dialogRole, dialogRole = _f === void 0 ? "dialog" : _f;
    return (React.createElement(BasicDialog, __assign({}, {
        open: open,
        size: size,
        position: position,
        initialFocusEl: initialFocusEl,
        returnFocusEl: returnFocusEl,
        closeDialog: closeDialog,
        children: children,
        trapPaused: trapPaused,
        dialogElClass: dialogElClass,
        dialogRole: dialogRole,
    }),
        React.createElement(React.Fragment, null,
            header && (React.createElement(DialogHeader, { headerClass: headerClass, dialogRole: dialogRole, closeDialog: closeDialog, closeInHeader: closeInHeader }, header)),
            React.createElement(DialogBody, { bodyClass: bodyClass }, children),
            hasFooter && (React.createElement(DialogFooter, { closeDialog: closeDialog, submitHandler: submitHandler, footerBackground: footerBackground }, footer)))));
};
export { Dialog };
//# sourceMappingURL=Dialog.js.map