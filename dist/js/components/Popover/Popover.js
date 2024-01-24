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
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { arrow as middlewareArrow, autoUpdate, flip, limitShift, offset, safePolygon, shift, useClick, useDismiss, useFloating, useHover, useInteractions, useTransitionStyles, } from '@floating-ui/react';
import classNames from 'classnames';
import { Button } from '../Button';
import { Portal } from '../Portal';
var Popover = function (_a) {
    var _b, _c, _d;
    var renderOpener = _a.renderOpener, _e = _a.placement, placement = _e === void 0 ? "top" : _e, children = _a.children, _f = _a.trigger, trigger = _f === void 0 ? "hover" : _f, _g = _a.arrow, arrow = _g === void 0 ? true : _g, openProp = _a.open, _h = _a.dismissible, dismissible = _h === void 0 ? true : _h, _j = _a.openOnLoad, openOnLoad = _j === void 0 ? false : _j, size = _a.size, _k = _a.theme, theme = _k === void 0 ? "light" : _k, className = _a.className, bodyClassName = _a.bodyClassName, showCloseButton = _a.showCloseButton, _l = _a.offset, offsetProp = _l === void 0 ? 8 : _l, _m = _a.onOpen, onOpen = _m === void 0 ? function () { } : _m, _o = _a.onClose, onClose = _o === void 0 ? function () { } : _o, portalProps = _a.portalProps;
    var _p = useState(openOnLoad || openProp), internalOpenState = _p[0], setInternalOpenState = _p[1];
    var previousOpenState = useRef(internalOpenState);
    var onOpenCallback = useCallback(onOpen, [onOpen]);
    var onCloseCallback = useCallback(onClose, [onClose]);
    var arrowRef = useRef(null);
    var arrowElHeight = 11;
    useEffect(function () {
        setInternalOpenState(openProp);
    }, [openProp]);
    useEffect(function () {
        if (previousOpenState.current !== internalOpenState) {
            internalOpenState ? onOpenCallback === null || onOpenCallback === void 0 ? void 0 : onOpenCallback() : onCloseCallback === null || onCloseCallback === void 0 ? void 0 : onCloseCallback();
        }
        previousOpenState.current = internalOpenState;
    }, [internalOpenState, onOpenCallback, onCloseCallback]);
    var _q = useFloating({
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
            setInternalOpenState(open);
        },
    }), x = _q.x, y = _q.y, _r = _q.refs, setReference = _r.setReference, setFloating = _r.setFloating, strategy = _q.strategy, context = _q.context, _s = _q.middlewareData.arrow, _t = _s === void 0 ? {} : _s, arrowX = _t.x, arrowY = _t.y, currentPlacement = _q.placement;
    var _u = useInteractions([
        useDismiss(context, { enabled: dismissible }),
        useHover(context, {
            enabled: showCloseButton === true && internalOpenState ? false : trigger === "hover" ? true : false,
            handleClose: safePolygon(),
        }),
        useClick(context, { enabled: trigger === "click" }),
    ]), getReferenceProps = _u.getReferenceProps, getFloatingProps = _u.getFloatingProps;
    var staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
    }[currentPlacement.split("-")[0]];
    var _v = useTransitionStyles(context), isMounted = _v.isMounted, styles = _v.styles;
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
        isMounted ? (React.createElement(Portal, __assign({ className: classNames("h-floating-ui h-floating-ui--popovers", portalProps === null || portalProps === void 0 ? void 0 : portalProps.className) }, portalProps),
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