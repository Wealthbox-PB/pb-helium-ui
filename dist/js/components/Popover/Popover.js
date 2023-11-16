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
import React, { useEffect, useRef, useState } from 'react';
import { arrow as middlewareArrow, autoUpdate, flip, limitShift, offset, safePolygon, shift, useClick, useDismiss, useFloating, useHover, useInteractions, useTransitionStyles, } from '@floating-ui/react';
import classNames from 'classnames';
import { Button } from '../Button';
import { Portal } from '../Portal';
var Popover = function (_a) {
    var _b, _c, _d;
    var renderOpener = _a.renderOpener, _e = _a.placement, placement = _e === void 0 ? "top" : _e, children = _a.children, _f = _a.trigger, trigger = _f === void 0 ? "hover" : _f, _g = _a.arrow, arrow = _g === void 0 ? true : _g, openProp = _a.open, _h = _a.dismissible, dismissible = _h === void 0 ? true : _h, _j = _a.openOnLoad, openOnLoad = _j === void 0 ? false : _j, size = _a.size, _k = _a.theme, theme = _k === void 0 ? "light" : _k, className = _a.className, bodyClassName = _a.bodyClassName, showCloseButton = _a.showCloseButton, _l = _a.offset, offsetProp = _l === void 0 ? 8 : _l, onOpen = _a.onOpen, onClose = _a.onClose;
    var _m = useState(openOnLoad), internalOpenState = _m[0], setInternalOpenState = _m[1];
    var arrowRef = useRef(null);
    var arrowElHeight = 11;
    useEffect(function () {
        if (openProp !== undefined) {
            setInternalOpenState(openProp);
        }
    }, [openProp]);
    var _o = useFloating({
        open: internalOpenState,
        whileElementsMounted: autoUpdate,
        placement: placement,
        strategy: "absolute",
        middleware: [
            offset(offsetProp + (arrow ? arrowElHeight : 0)),
            flip(),
            shift({ padding: 4, limiter: limitShift() }),
            middlewareArrow({ element: arrowRef, padding: 4 }),
        ],
        onOpenChange: function (open) {
            console.log("onOpenChange");
            console.log("open: ".concat(open));
            setInternalOpenState(open);
            open ? onOpen === null || onOpen === void 0 ? void 0 : onOpen() : onClose === null || onClose === void 0 ? void 0 : onClose();
        },
    }), x = _o.x, y = _o.y, _p = _o.refs, setReference = _p.setReference, setFloating = _p.setFloating, strategy = _o.strategy, context = _o.context, _q = _o.middlewareData.arrow, _r = _q === void 0 ? {} : _q, arrowX = _r.x, arrowY = _r.y, currentPlacement = _o.placement;
    var _s = useInteractions([
        useDismiss(context, { enabled: dismissible }),
        useHover(context, {
            enabled: showCloseButton === true && internalOpenState ? false : trigger === "hover" ? true : false,
            handleClose: safePolygon(),
        }),
        useClick(context, { enabled: trigger === "click" }),
    ]), getReferenceProps = _s.getReferenceProps, getFloatingProps = _s.getFloatingProps;
    var staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
    }[currentPlacement.split("-")[0]];
    var _t = useTransitionStyles(context), isMounted = _t.isMounted, styles = _t.styles;
    return (React.createElement(React.Fragment, null,
        renderOpener(__assign({ ref: setReference }, getReferenceProps({
            onClick: function (e) {
                setInternalOpenState(!internalOpenState);
                e.stopPropagation();
                // Normalize button focus while clicking on Safari.
                e.currentTarget.focus();
            },
            onKeyPress: function (e) {
                // This stops propagation up to the parent onKeyPress, which then triggers both the onKeyPress and
                // the onClick because buttons trigger key presses as clicks
                e.stopPropagation();
            },
            open: internalOpenState,
            tabIndex: 0,
        }))),
        isMounted ? (React.createElement(Portal, { className: "h-floating-ui h-floating-ui--popovers" },
            React.createElement("div", __assign({ ref: setFloating, className: classNames("h-popover", (_b = {}, _b["h-popover--".concat(size)] = size, _b), (_c = {}, _c["h-popover--".concat(theme)] = theme, _c), className), style: __assign({ position: strategy, top: y !== null && y !== void 0 ? y : 0, left: x !== null && x !== void 0 ? x : 0 }, styles), role: "menu" }, getFloatingProps({
                // Pressing tab dismisses the popover due to the modal
                // focus management on the root menu.
                onKeyDown: function (event) {
                    if (event.key === "Tab") {
                        setInternalOpenState(false);
                    }
                },
            })),
                React.createElement("div", { className: classNames("h-popover__body", bodyClassName) },
                    React.createElement("div", { className: "h-popover__body__content" }, children),
                    showCloseButton ? (React.createElement(React.Fragment, null,
                        React.createElement(Button, { className: "h-popover__close", variant: "border-hover", size: "xs", square: true, style: { marginTop: "-0.25rem" }, onClick: function () { return setInternalOpenState(false); }, "aria-label": "Close popover" },
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