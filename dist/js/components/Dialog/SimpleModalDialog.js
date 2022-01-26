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
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
import { ModalDialog } from './ModalDialog';
var SimpleModalDialog = function (_a) {
    var open = _a.open, size = _a.size, position = _a.position, initialFocusEl = _a.initialFocusEl, returnFocusEl = _a.returnFocusEl, closeDialog = _a.closeDialog, header = _a.header, headerClassName = _a.headerClassName, _b = _a.closeInHeader, closeInHeader = _b === void 0 ? true : _b, bodyClassName = _a.bodyClassName, children = _a.children, footer = _a.footer, _c = _a.footerBackground, footerBackground = _c === void 0 ? true : _c, footerClassName = _a.footerClassName, _d = _a.trapPaused, trapPaused = _d === void 0 ? false : _d, dialogClassName = _a.dialogClassName, _e = _a.backdrop, backdrop = _e === void 0 ? true : _e, backdropClassName = _a.backdropClassName;
    return (React.createElement(ModalDialog, __assign({}, {
        open: open,
        size: size,
        position: position,
        initialFocusEl: initialFocusEl,
        returnFocusEl: returnFocusEl,
        trapPaused: trapPaused,
        dialogClassName: dialogClassName,
        backdrop: backdrop,
        backdropClassName: backdropClassName,
        closeDialog: closeDialog,
    }),
        React.createElement(React.Fragment, null,
            header ? (React.createElement(DialogHeader, { headerClassName: headerClassName, closeDialog: closeDialog, closeInHeader: closeInHeader }, header)) : null,
            React.createElement(DialogBody, { bodyClassName: bodyClassName }, children),
            footer ? (React.createElement(DialogFooter, { footerClassName: footerClassName, footerBackground: footerBackground }, footer)) : null)));
};
export { SimpleModalDialog };
//# sourceMappingURL=SimpleModalDialog.js.map