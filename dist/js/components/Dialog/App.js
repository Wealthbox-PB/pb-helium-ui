import React, { useState } from 'react';
import { Dialog } from './Dialog';
function App() {
    var _a = useState(false), isDialogOpen = _a[0], setIsDialogOpen = _a[1];
    var closeDialog = function () { return setIsDialogOpen(false); };
    var _b = useState(false), is2ndDialogOpen = _b[0], setIs2ndDialogOpen = _b[1];
    var close2ndDialog = function () { return setIs2ndDialogOpen(false); };
    return (React.createElement("div", { className: "App" },
        React.createElement("button", { className: "h-btn h-btn--primary", onClick: function () { return setIsDialogOpen(!isDialogOpen); } }, "Toggle Modal"),
        React.createElement(Dialog, { header: "Test Modal", initialFocusEl: ".h-btn--init-focus", open: isDialogOpen, closeDialog: closeDialog, submitHandler: function () { return console.log("I submit!"); } },
            React.createElement("p", null,
                React.createElement("button", { className: "h-btn h-btn--primary h-btn--init-focus", onClick: function () { return setIs2ndDialogOpen(!is2ndDialogOpen); } }, "Launch 2nd Modal"))),
        React.createElement(Dialog, { hasFooter: false, size: "small", position: "bottom center", open: is2ndDialogOpen, closeDialog: close2ndDialog, footerBackground: false, submitHandler: function () { return console.log("I submit!"); } },
            React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
            React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))));
}
export { App };
//# sourceMappingURL=App.js.map