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
import React, { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import classNames from 'classnames';
import { autoUpdate, flip, FloatingFocusManager, FloatingList, limitShift, offset, shift, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useTypeahead, size, } from '@floating-ui/react';
import { DropdownContext } from './DropdownContext';
import { Portal } from '../Portal';
var Dropdown = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.flip, flipProp = _b === void 0 ? true : _b, minHeight = _a.minHeight, _c = _a.placement, placement = _c === void 0 ? "bottom-end" : _c, renderOpener = _a.renderOpener, _d = _a.width, width = _d === void 0 ? "auto" : _d, maxHeight = _a.maxHeight, _e = _a.height, height = _e === void 0 ? "auto" : _e, _f = _a.open, openProp = _f === void 0 ? false : _f, _g = _a.dismissible, dismissible = _g === void 0 ? true : _g, _h = _a.typeahead, typeaheadProp = _h === void 0 ? true : _h, _j = _a.onOpen, onOpen = _j === void 0 ? function () { } : _j, _k = _a.onClose, onClose = _k === void 0 ? function () { } : _k, initialFocusEl = _a.initialFocusEl, _l = _a.returnFocus, returnFocus = _l === void 0 ? true : _l, _m = _a.virtualFocus, virtualFocus = _m === void 0 ? false : _m, _o = _a.toggleOpenOnOpenerClick, toggleOpenOnOpenerClick = _o === void 0 ? true : _o, _p = _a.resetActiveIndex, resetActiveIndex = _p === void 0 ? true : _p, _q = _a.initialActiveIndex, initialActiveIndex = _q === void 0 ? null : _q;
    var _r = useState(openProp), open = _r[0], setOpen = _r[1];
    var previousOpenState = useRef(open);
    var onOpenCallback = useCallback(onOpen, [onOpen]);
    var onCloseCallback = useCallback(onClose, [onClose]);
    var _s = useState(initialActiveIndex), activeIndex = _s[0], setActiveIndex = _s[1];
    useEffect(function () {
        setOpen(openProp);
    }, [openProp]);
    useEffect(function () {
        if (previousOpenState.current !== open) {
            open ? onOpenCallback === null || onOpenCallback === void 0 ? void 0 : onOpenCallback() : onCloseCallback === null || onCloseCallback === void 0 ? void 0 : onCloseCallback();
        }
        previousOpenState.current = open;
    }, [open, onOpenCallback, onCloseCallback]);
    var _t = useFloating({
        open: open,
        whileElementsMounted: autoUpdate,
        placement: placement,
        strategy: "absolute",
        middleware: [
            offset(4),
            flip({ mainAxis: flipProp }),
            shift({ padding: 4, limiter: limitShift() }),
            size({
                apply: function (_a) {
                    var availableHeight = _a.availableHeight, elements = _a.elements, rects = _a.rects;
                    Object.assign(elements.floating.style, {
                        maxHeight: height === "auto"
                            ? maxHeight
                                ? "".concat(Math.min(maxHeight, availableHeight) - 4, "px")
                                : "".concat(availableHeight - 4, "px")
                            : null,
                        minHeight: height == "auto" ? (minHeight ? "".concat(minHeight - 4, "px") : null) : null,
                        height: height,
                        width: width === "full" ? "".concat(rects.reference.width, "px") : width === "auto" ? null : width + "px",
                    });
                },
            }),
        ],
        onOpenChange: function (open) {
            if (toggleOpenOnOpenerClick) {
                setOpen(open);
            }
        },
    }), x = _t.x, y = _t.y, _u = _t.refs, setReference = _u.setReference, setFloating = _u.setFloating, strategy = _t.strategy, context = _t.context;
    var elementsRef = React.useRef([]);
    var labelsRef = React.useRef([]);
    var listNavigation = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex: activeIndex,
        onNavigate: setActiveIndex,
        virtual: virtualFocus,
        loop: true,
    });
    var typeahead = useTypeahead(context, {
        enabled: typeaheadProp,
        listRef: labelsRef,
        activeIndex: activeIndex,
        onMatch: setActiveIndex,
    });
    var _v = useInteractions([
        useDismiss(context, { enabled: dismissible }),
        useClick(context),
        listNavigation,
        typeahead,
    ]), getReferenceProps = _v.getReferenceProps, getFloatingProps = _v.getFloatingProps, getItemProps = _v.getItemProps;
    var dropdownContext = useMemo(function () { return ({ activeIndex: activeIndex, getItemProps: getItemProps, setOpen: setOpen }); }, [activeIndex, getItemProps, setOpen]);
    useEffect(function () {
        if (resetActiveIndex) {
            setActiveIndex(initialActiveIndex);
        }
    }, [children, resetActiveIndex]);
    return (React.createElement(React.Fragment, null,
        renderOpener(__assign({ open: open, ref: setReference, activeIndex: activeIndex }, getReferenceProps({
            onClick: function (e) {
                if (toggleOpenOnOpenerClick) {
                    setOpen(!open);
                }
                e.stopPropagation();
                // Normalize button focus while clicking on Safari.
                e.currentTarget.focus();
            },
            open: open,
            tabIndex: 0,
        }))),
        open ? (React.createElement(DropdownContext.Provider, { value: dropdownContext },
            React.createElement(Portal, { className: "h-floating-ui h-floating-ui--dropdowns" },
                React.createElement(FloatingFocusManager, { context: context, initialFocus: initialFocusEl, returnFocus: returnFocus },
                    React.createElement("div", __assign({ ref: setFloating, className: classNames("h-dropdown h-overflow-auto", className), style: {
                            position: strategy,
                            top: y !== null && y !== void 0 ? y : 0,
                            left: x !== null && x !== void 0 ? x : 0,
                        }, role: "menu" }, getFloatingProps({
                        // Pressing tab dismisses the menu due to the modal
                        // focus management on the root menu.
                        onKeyDown: function (event) {
                            if (dismissible && event.key === "Tab") {
                                setOpen(false);
                            }
                        },
                    })),
                        React.createElement("ul", { className: "h-dropdown__menu" },
                            React.createElement(FloatingList, { elementsRef: elementsRef, labelsRef: labelsRef }, children))))))) : null));
};
export { Dropdown };
//# sourceMappingURL=Dropdown.js.map