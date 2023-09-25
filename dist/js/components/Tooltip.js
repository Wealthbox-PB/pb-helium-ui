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
import React, { cloneElement, useRef, useState } from 'react';
import { arrow as middlewareArrow, autoUpdate, flip, offset, shift, useDismiss, useFloating, useFocus, useHover, useInteractions, useRole, useTransitionStyles, } from '@floating-ui/react';
import classNames from 'classnames';
import Parser from 'html-react-parser';
import { Portal } from './Portal';
export var Tooltip = function (_a) {
    var _b, _c;
    var children = _a.children, title = _a.title, _d = _a.placement, placement = _d === void 0 ? "top" : _d, _e = _a.width, width = _e === void 0 ? "base" : _e, _f = _a.arrow, arrow = _f === void 0 ? true : _f, boundary = _a.boundary, _g = _a.open, open = _g === void 0 ? false : _g;
    var _h = useState(false), hovered = _h[0], setHovered = _h[1];
    var arrowRef = useRef(null);
    var _j = useFloating({
        placement: placement,
        open: open || hovered,
        onOpenChange: setHovered,
        middleware: [
            offset(8),
            flip({
                boundary: boundary ? document.querySelector(boundary) : "clippingAncestors",
            }),
            shift({ padding: 4 }),
            middlewareArrow({ element: arrowRef, padding: 4 }),
        ],
        whileElementsMounted: autoUpdate,
    }), x = _j.x, y = _j.y, _k = _j.refs, setReference = _k.setReference, setFloating = _k.setFloating, strategy = _j.strategy, context = _j.context, currentPlacement = _j.placement, _l = _j.middlewareData.arrow, _m = _l === void 0 ? {} : _l, arrowX = _m.x, arrowY = _m.y;
    var _o = useInteractions([
        useHover(context),
        useFocus(context),
        useRole(context, { role: "tooltip" }),
        useDismiss(context),
    ]), getReferenceProps = _o.getReferenceProps, getFloatingProps = _o.getFloatingProps;
    var staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
    }[currentPlacement.split("-")[0]];
    var _p = useTransitionStyles(context), isMounted = _p.isMounted, styles = _p.styles;
    return (React.createElement(React.Fragment, null,
        cloneElement(children, getReferenceProps(__assign({ ref: setReference }, children.props))),
        isMounted ? (React.createElement(Portal, { className: "h-floating-ui h-floating-ui--tooltips" },
            React.createElement("div", __assign({}, getFloatingProps({
                ref: setFloating,
                className: classNames("h-tooltip", (_b = {}, _b["h-tooltip--" + width] = width, _b)),
                style: __assign({ position: strategy, top: y !== null && y !== void 0 ? y : "", left: x !== null && x !== void 0 ? x : "" }, styles),
            })),
                Parser(title),
                arrow ? (React.createElement("div", { className: classNames("h-tooltip__arrow", "h-tooltip__arrow--" + currentPlacement), ref: arrowRef, style: (_c = {
                            left: arrowX != null ? arrowX + "px" : "",
                            top: arrowY != null ? arrowY + "px" : "",
                            right: "",
                            bottom: ""
                        },
                        _c[staticSide] = "-6px",
                        _c) })) : null))) : null));
};
//# sourceMappingURL=Tooltip.js.map