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
    var _b = _a.backdrop, backdrop = _b === void 0 ? true : _b, backdropClassName = _a.backdropClassName, bodyClassName = _a.bodyClassName, children = _a.children, closeDialog = _a.closeDialog, _c = _a.closeInHeader, closeInHeader = _c === void 0 ? true : _c, dialogClassName = _a.dialogClassName, footer = _a.footer, _d = _a.footerBackground, footerBackground = _d === void 0 ? true : _d, footerClassName = _a.footerClassName, header = _a.header, headerClassName = _a.headerClassName, id = _a.id, initialFocusEl = _a.initialFocusEl, open = _a.open, position = _a.position, returnFocusEl = _a.returnFocusEl, size = _a.size, _e = _a.trapPaused, trapPaused = _e === void 0 ? false : _e, wrapperClassName = _a.wrapperClassName;
    return (React.createElement(ModalDialog, __assign({}, {
        animationDirection: "up",
        backdrop: backdrop,
        backdropClassName: backdropClassName,
        closeDialog: closeDialog,
        dialogClassName: dialogClassName,
        id: id,
        initialFocusEl: initialFocusEl,
        open: open,
        position: position,
        returnFocusEl: returnFocusEl,
        size: size,
        trapPaused: trapPaused,
        wrapperClassName: wrapperClassName,
    }),
        React.createElement(React.Fragment, null,
            header ? (React.createElement(DialogHeader, { headerClassName: headerClassName, closeDialog: closeDialog, closeInHeader: closeInHeader }, header)) : null,
            React.createElement(DialogBody, { bodyClassName: bodyClassName }, children),
            footer ? (React.createElement(DialogFooter, { footerClassName: footerClassName, footerBackground: footerBackground }, footer)) : null)));
};
export { SimpleModalDialog };
//# sourceMappingURL=SimpleModalDialog.js.map