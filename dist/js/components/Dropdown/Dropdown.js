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
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDismiss, useFloating, useInteractions, useClick, autoUpdate, offset, flip, shift, limitShift, FloatingPortal, } from '@floating-ui/react';
var Dropdown = function (_a) {
    var renderOpener = _a.renderOpener, _b = _a.placement, placement = _b === void 0 ? "bottom-end" : _b, children = _a.children;
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    var _d = useFloating({
        open: open,
        whileElementsMounted: autoUpdate,
        placement: placement,
        strategy: "absolute",
        middleware: [offset(4), flip(), shift({ padding: 4, limiter: limitShift() })],
        onOpenChange: setOpen,
    }), x = _d.x, y = _d.y, _e = _d.refs, setReference = _e.setReference, setFloating = _e.setFloating, strategy = _d.strategy, context = _d.context;
    var _f = useInteractions([useDismiss(context), useClick(context)]), getReferenceProps = _f.getReferenceProps, getFloatingProps = _f.getFloatingProps;
    return (React.createElement(React.Fragment, null,
        renderOpener(__assign({ ref: setReference }, getReferenceProps({
            onClick: function (e) {
                setOpen(!open);
                e.stopPropagation();
                // Normalize button focus while clicking on Safari.
                e.currentTarget.focus();
            },
            onKeyPress: function (e) {
                // This stops propagation up to the parent onKeyPress, which then triggers both the onKeyPress and
                //   the onClick because buttons trigger key presses as clicks
                e.stopPropagation();
            },
            open: open,
            tabIndex: 0,
        }))),
        open ? (React.createElement(FloatingPortal, null,
            React.createElement("div", __assign({ ref: setFloating, className: classNames("h-dropdown", { 'd-block': open }), style: {
                    position: strategy,
                    top: y !== null && y !== void 0 ? y : 0,
                    left: x !== null && x !== void 0 ? x : 0,
                }, role: "menu" }, getFloatingProps({
                onClick: function () {
                    setOpen(false);
                },
                // Pressing tab dismisses the menu due to the modal
                // focus management on the root menu.
                onKeyDown: function (event) {
                    if (event.key === "Tab") {
                        setOpen(false);
                    }
                },
            })),
                React.createElement("ul", null, children)))) : null));
};
export { Dropdown };
//# sourceMappingURL=Dropdown.js.map