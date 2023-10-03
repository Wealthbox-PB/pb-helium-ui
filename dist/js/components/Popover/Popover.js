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
    var renderOpener = _a.renderOpener, _e = _a.placement, placement = _e === void 0 ? "top" : _e, children = _a.children, _f = _a.trigger, trigger = _f === void 0 ? "hover" : _f, _g = _a.arrow, arrow = _g === void 0 ? true : _g, openProp = _a.open, _h = _a.openOnLoad, openOnLoad = _h === void 0 ? false : _h, size = _a.size, _j = _a.theme, theme = _j === void 0 ? "light" : _j, className = _a.className, bodyClassName = _a.bodyClassName, showCloseButton = _a.showCloseButton, _k = _a.offset, offsetProp = _k === void 0 ? 8 : _k;
    var _l = useState(openOnLoad), internalOpenState = _l[0], setInternalOpenState = _l[1];
    var arrowRef = useRef(null);
    var arrowElHeight = 11;
    var _m = useFloating({
        open: openProp || internalOpenState,
        whileElementsMounted: autoUpdate,
        placement: placement,
        strategy: "absolute",
        middleware: [
            offset(offsetProp + (arrow ? arrowElHeight : 0)),
            flip(),
            shift({ padding: 4, limiter: limitShift() }),
            middlewareArrow({ element: arrowRef, padding: 4 }),
        ],
        onOpenChange: setInternalOpenState,
    }), x = _m.x, y = _m.y, _o = _m.refs, setReference = _o.setReference, setFloating = _o.setFloating, strategy = _m.strategy, context = _m.context, _p = _m.middlewareData.arrow, _q = _p === void 0 ? {} : _p, arrowX = _q.x, arrowY = _q.y, currentPlacement = _m.placement;
    var _r = useInteractions([
        useDismiss(context, { enabled: !showCloseButton }),
        useHover(context, {
            enabled: showCloseButton === true && internalOpenState
                ? false
                : trigger === "hover" && openProp === undefined
                    ? true
                    : false,
            handleClose: safePolygon(),
        }),
        useClick(context, { enabled: openProp === undefined && trigger === "click" }),
    ]), getReferenceProps = _r.getReferenceProps, getFloatingProps = _r.getFloatingProps;
    var staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
    }[currentPlacement.split("-")[0]];
    var _s = useTransitionStyles(context), isMounted = _s.isMounted, styles = _s.styles;
    return (React.createElement(React.Fragment, null,
        renderOpener(__assign({ ref: setReference }, getReferenceProps({
            onClick: function (e) {
                openProp && setInternalOpenState(!internalOpenState);
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
        isMounted ? (React.createElement(FloatingPortal, null,
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
                    showCloseButton && !openProp ? (React.createElement(React.Fragment, null,
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