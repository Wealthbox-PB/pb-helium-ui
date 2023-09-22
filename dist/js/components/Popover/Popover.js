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
/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import { arrow as middlewareArrow, autoUpdate, flip, FloatingPortal, limitShift, offset, safePolygon, shift, useClick, useDismiss, useFloating, useHover, useInteractions, useTransitionStyles, } from '@floating-ui/react';
import classNames from 'classnames';
import { Button } from 'components/Button';
var Popover = function (_a) {
    var _b, _c, _d, _e;
    var renderOpener = _a.renderOpener, _f = _a.placement, placement = _f === void 0 ? "top" : _f, children = _a.children, _g = _a.trigger, trigger = _g === void 0 ? "hover" : _g, _h = _a.arrow, arrow = _h === void 0 ? true : _h, _j = _a.open, openProp = _j === void 0 ? false : _j, size = _a.size, _k = _a.theme, theme = _k === void 0 ? "light" : _k, className = _a.className, bodyClassName = _a.bodyClassName, closeInPopover = _a.closeInPopover;
    var _l = useState(openProp), open = _l[0], setOpen = _l[1];
    var arrowRef = useRef(null);
    var _m = useFloating({
        open: open,
        whileElementsMounted: autoUpdate,
        placement: placement,
        strategy: "absolute",
        middleware: [
            offset(20),
            flip(),
            shift({ padding: 4, limiter: limitShift() }),
            middlewareArrow({ element: arrowRef, padding: 4 }),
        ],
        onOpenChange: setOpen,
    }), x = _m.x, y = _m.y, _o = _m.refs, setReference = _o.setReference, setFloating = _o.setFloating, strategy = _m.strategy, context = _m.context, _p = _m.middlewareData.arrow, _q = _p === void 0 ? {} : _p, arrowX = _q.x, arrowY = _q.y, currentPlacement = _m.placement;
    var _r = useInteractions([
        useDismiss(context),
        useHover(context, { enabled: trigger === "hover", handleClose: safePolygon() }),
        useClick(context, { enabled: trigger === "click" }),
    ]), getReferenceProps = _r.getReferenceProps, getFloatingProps = _r.getFloatingProps;
    var staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
    }[currentPlacement.split("-")[0]];
    var _s = useTransitionStyles(context), isMounted = _s.isMounted, styles = _s.styles;
    // const handleClose = closeDialog || setOpen(false);
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
                // the onClick because buttons trigger key presses as clicks
                e.stopPropagation();
            },
            open: open,
            tabIndex: 0,
        }))),
        isMounted ? (React.createElement(FloatingPortal, null,
            React.createElement("div", __assign({ ref: setFloating, className: classNames([
                    "h-popover",
                    (_b = {}, _b["h-popover--".concat(size)] = size, _b),
                    (_c = {}, _c["h-popover--".concat(theme)] = theme, _c),
                    className,
                ]), style: __assign({ position: strategy, top: y !== null && y !== void 0 ? y : 0, left: x !== null && x !== void 0 ? x : 0 }, styles), role: "menu" }, getFloatingProps({
                // Pressing tab dismisses the menu due to the modal
                // focus management on the root menu.
                onKeyDown: function (event) {
                    if (event.key === "Tab") {
                        setOpen(false);
                    }
                },
            })),
                React.createElement("div", { className: classNames(["h-popover__body"], (_d = {}, _d["d-flex class=\"align-items-baseline"] = closeInPopover, _d), bodyClassName) }, closeInPopover ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "col" }, children),
                    React.createElement("div", { className: "col-auto ms-1" },
                        React.createElement(Button, { className: "h-popover__close", variant: "border-hover", size: "xs", square: true, style: { marginTop: "-0.25em" }, onClick: function () { return setOpen(false); } },
                            React.createElement("span", { className: "h-icon-delete" }))))) : (children)),
                arrow ? (React.createElement("div", { className: classNames("h-popover__arrow", "h-popover__arrow--".concat(currentPlacement)), ref: arrowRef, style: (_e = {
                            left: arrowX != null ? "".concat(arrowX, "px") : "",
                            top: arrowY != null ? "".concat(arrowY, "px") : "",
                            right: "",
                            bottom: ""
                        },
                        _e[staticSide] = "-20px",
                        _e) })) : null))) : null));
};
export { Popover };
//# sourceMappingURL=Popover.js.map