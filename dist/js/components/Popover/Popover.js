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
    var _b, _c, _d;
    var renderOpener = _a.renderOpener, _e = _a.placement, placement = _e === void 0 ? "top" : _e, children = _a.children, _f = _a.trigger, trigger = _f === void 0 ? "hover" : _f, _g = _a.arrow, arrow = _g === void 0 ? true : _g, openProp = _a.open, _h = _a.openOnLoad, openOnLoad = _h === void 0 ? false : _h, size = _a.size, _j = _a.theme, theme = _j === void 0 ? "light" : _j, className = _a.className, bodyClassName = _a.bodyClassName, showCloseButton = _a.showCloseButton;
    var _k = useState(openOnLoad), open = _k[0], setOpen = _k[1];
    var arrowRef = useRef(null);
    var _l = useFloating({
        open: openProp || open,
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
    }), x = _l.x, y = _l.y, _m = _l.refs, setReference = _m.setReference, setFloating = _m.setFloating, strategy = _l.strategy, context = _l.context, _o = _l.middlewareData.arrow, _p = _o === void 0 ? {} : _o, arrowX = _p.x, arrowY = _p.y, currentPlacement = _l.placement;
    var _q = useInteractions([
        useDismiss(context, { enabled: !showCloseButton }),
        useHover(context, {
            enabled: showCloseButton === true && open
                ? false
                : trigger === "hover" && openProp === undefined
                    ? true
                    : false,
            handleClose: safePolygon(),
        }),
        useClick(context, { enabled: openProp === undefined && trigger === "click" }),
    ]), getReferenceProps = _q.getReferenceProps, getFloatingProps = _q.getFloatingProps;
    var staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
    }[currentPlacement.split("-")[0]];
    var _r = useTransitionStyles(context), isMounted = _r.isMounted, styles = _r.styles;
    return (React.createElement(React.Fragment, null,
        renderOpener(__assign({ ref: setReference }, getReferenceProps({
            onClick: function (e) {
                openProp && setOpen(!open);
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
            React.createElement("div", __assign({ ref: setFloating, className: classNames("h-popover", (_b = {}, _b["h-popover--".concat(size)] = size, _b), (_c = {}, _c["h-popover--".concat(theme)] = theme, _c), className), style: __assign({ position: strategy, top: y !== null && y !== void 0 ? y : 0, left: x !== null && x !== void 0 ? x : 0 }, styles), role: "menu" }, getFloatingProps({
                // Pressing tab dismisses the menu due to the modal
                // focus management on the root menu.
                onKeyDown: function (event) {
                    if (event.key === "Tab") {
                        setOpen(false);
                    }
                },
            })),
                React.createElement("div", { className: classNames("h-popover__body", bodyClassName) },
                    React.createElement("div", { className: "h-popover__body__content" }, children),
                    showCloseButton && !openProp ? (React.createElement(React.Fragment, null,
                        React.createElement(Button, { className: "h-popover__close", variant: "border-hover", size: "xs", square: true, style: { marginTop: "-0.25rem" }, onClick: function () { return setOpen(false); }, "aria-label": "Close popover" },
                            React.createElement("span", { className: "h-icon-delete", "aria-hidden": "true" })))) : null),
                arrow ? (React.createElement("div", { className: classNames("h-popover__arrow", "h-popover__arrow--".concat(currentPlacement)), ref: arrowRef, style: (_d = {
                            left: arrowX != null ? "".concat(arrowX, "px") : "",
                            top: arrowY != null ? "".concat(arrowY, "px") : "",
                            right: "",
                            bottom: ""
                        },
                        _d[staticSide] = "-20px",
                        _d) })) : null))) : null));
};
export { Popover };
//# sourceMappingURL=Popover.js.map