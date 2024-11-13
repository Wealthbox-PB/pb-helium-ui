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
    var renderOpener = _a.renderOpener, _e = _a.placement, placement = _e === void 0 ? "top" : _e, children = _a.children, _f = _a.trigger, trigger = _f === void 0 ? "hover" : _f, _g = _a.arrow, arrow = _g === void 0 ? true : _g, openProp = _a.open, _h = _a.dismissible, dismissible = _h === void 0 ? true : _h, _j = _a.flip, flipProp = _j === void 0 ? true : _j, _k = _a.openOnLoad, openOnLoad = _k === void 0 ? false : _k, size = _a.size, _l = _a.theme, theme = _l === void 0 ? "light" : _l, className = _a.className, bodyClassName = _a.bodyClassName, showCloseButton = _a.showCloseButton, _m = _a.offset, offsetProp = _m === void 0 ? 8 : _m, _o = _a.onOpen, onOpen = _o === void 0 ? function () { } : _o, _p = _a.onClose, onClose = _p === void 0 ? function () { } : _p, portalProps = _a.portalProps;
    var _q = useState(openOnLoad || openProp), internalOpenState = _q[0], setInternalOpenState = _q[1];
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
    var _r = useFloating({
        open: internalOpenState,
        whileElementsMounted: autoUpdate,
        placement: placement,
        strategy: "absolute",
        middleware: [
            offset(offsetProp + (arrow ? arrowElHeight : 0)),
            flip({ mainAxis: flipProp }),
            shift({ padding: 4, limiter: limitShift() }),
            middlewareArrow({ element: arrowRef, padding: 4 }),
        ],
        onOpenChange: function (open) {
            setInternalOpenState(open);
        },
    }), x = _r.x, y = _r.y, _s = _r.refs, setReference = _s.setReference, setFloating = _s.setFloating, strategy = _r.strategy, context = _r.context, _t = _r.middlewareData.arrow, _u = _t === void 0 ? {} : _t, arrowX = _u.x, arrowY = _u.y, currentPlacement = _r.placement;
    var _v = useInteractions([
        useDismiss(context, { enabled: dismissible }),
        useHover(context, {
            enabled: showCloseButton === true && internalOpenState ? false : trigger === "hover" ? true : false,
            handleClose: safePolygon(),
        }),
        useClick(context, { enabled: trigger === "click" }),
    ]), getReferenceProps = _v.getReferenceProps, getFloatingProps = _v.getFloatingProps;
    var staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
    }[currentPlacement.split("-")[0]];
    var _w = useTransitionStyles(context), isMounted = _w.isMounted, styles = _w.styles;
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
        isMounted ? (React.createElement(Portal, { className: classNames("h-floating-ui h-floating-ui--popovers", portalProps === null || portalProps === void 0 ? void 0 : portalProps.className), selector: portalProps === null || portalProps === void 0 ? void 0 : portalProps.selector },
            React.createElement("div", __assign({ ref: setFloating, className: classNames("h-popover", (_b = {}, _b["h-popover--".concat(size)] = size, _b), (_c = {}, _c["h-popover--".concat(theme)] = theme, _c), className), style: __assign({ position: strategy, top: y !== null && y !== void 0 ? y : 0, left: x !== null && x !== void 0 ? x : 0 }, styles), role: "menu" }, getFloatingProps()),
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