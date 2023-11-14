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
import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { autoUpdate, flip, FloatingFocusManager, FloatingList, limitShift, offset, shift, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useTypeahead, size, } from '@floating-ui/react';
import { DropdownContext } from './DropdownContext';
import { Portal } from '../Portal';
var Dropdown = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.closeOnItemTab, closeOnItemTab = _b === void 0 ? true : _b, _c = _a.flip, flipProp = _c === void 0 ? true : _c, minHeight = _a.minHeight, _d = _a.placement, placement = _d === void 0 ? "bottom-end" : _d, renderOpener = _a.renderOpener, _e = _a.width, width = _e === void 0 ? "auto" : _e, maxHeight = _a.maxHeight, _f = _a.height, height = _f === void 0 ? "auto" : _f, _g = _a.open, openProp = _g === void 0 ? false : _g, _h = _a.dismissible, dismissible = _h === void 0 ? true : _h, _j = _a.typeahead, typeaheadProp = _j === void 0 ? true : _j, onOpen = _a.onOpen, onClose = _a.onClose, initialFocusEl = _a.initialFocusEl, _k = _a.virtualFocus, virtualFocus = _k === void 0 ? false : _k, _l = _a.toggleOpenOnOpenerClick, toggleOpenOnOpenerClick = _l === void 0 ? true : _l;
    var _m = useState(openProp), open = _m[0], setOpen = _m[1];
    var _o = useState(0), activeIndex = _o[0], setActiveIndex = _o[1];
    var _p = useFloating({
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
<<<<<<< HEAD
            setOpen(open);
            open ? onOpen === null || onOpen === void 0 ? void 0 : onOpen() : onClose === null || onClose === void 0 ? void 0 : onClose();
=======
            if (open) {
                onOpen === null || onOpen === void 0 ? void 0 : onOpen();
            }
            else {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
>>>>>>> f77180d (extend dropdown for autocomplete)
        },
    }), x = _p.x, y = _p.y, _q = _p.refs, setReference = _q.setReference, setFloating = _q.setFloating, strategy = _p.strategy, context = _p.context;
    useEffect(function () {
        setOpen(openProp);
    }, [openProp]);
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
    var _r = useInteractions([
        useDismiss(context, { enabled: dismissible }),
        useClick(context),
        listNavigation,
        typeahead,
    ]), getReferenceProps = _r.getReferenceProps, getFloatingProps = _r.getFloatingProps, getItemProps = _r.getItemProps;
    var dropdownContext = useMemo(function () { return ({ activeIndex: activeIndex, getItemProps: getItemProps, setOpen: setOpen }); }, [activeIndex, getItemProps, setOpen]);
    useEffect(function () {
        setActiveIndex(0);
    }, [children]);
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
                React.createElement(FloatingFocusManager, { context: context, initialFocus: initialFocusEl },
                    React.createElement("div", __assign({ ref: setFloating, className: classNames("h-dropdown h-overflow-auto", className), style: {
                            position: strategy,
                            top: y !== null && y !== void 0 ? y : 0,
                            left: x !== null && x !== void 0 ? x : 0,
                        }, role: "menu" }, getFloatingProps({
                        // Pressing tab dismisses the menu due to the modal
                        // focus management on the root menu.
                        onKeyDown: function (event) {
                            if (event.key === "Tab" && closeOnItemTab) {
                                setOpen(false);
                            }
                        },
                    })),
                        React.createElement("ul", { className: "h-dropdown__menu" },
                            React.createElement(FloatingList, { elementsRef: elementsRef, labelsRef: labelsRef }, children))))))) : null));
};
export { Dropdown };
//# sourceMappingURL=Dropdown.js.map