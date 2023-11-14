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
import React, { useMemo, useState, useEffect } from 'react';
import { autoUpdate, flip, FloatingFocusManager, FloatingList, limitShift, offset, shift, useClick, useDismiss, useFloating, useInteractions, useListNavigation, size, } from '@floating-ui/react';
import { DropdownContext } from '../Dropdown/DropdownContext';
import { Portal } from '../Portal';
var AutoComplete = function (_a) {
    var children = _a.children, _b = _a.flip, flipProp = _b === void 0 ? true : _b, minHeight = _a.minHeight, _c = _a.placement, placement = _c === void 0 ? "bottom-end" : _c, renderOpener = _a.renderOpener, _d = _a.width, width = _d === void 0 ? "auto" : _d, maxHeight = _a.maxHeight, _e = _a.height, height = _e === void 0 ? "auto" : _e, _f = _a.open, openProp = _f === void 0 ? false : _f, _g = _a.dismissible, dismissible = _g === void 0 ? true : _g, onOpen = _a.onOpen, onClose = _a.onClose;
    var _h = useState(openProp), open = _h[0], setOpen = _h[1];
    var _j = useState(null), activeIndex = _j[0], setActiveIndex = _j[1];
    var _k = useFloating({
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
            // setOpen(open);
            if (open) {
                onOpen === null || onOpen === void 0 ? void 0 : onOpen();
            }
            else {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        },
    }), x = _k.x, y = _k.y, _l = _k.refs, setReference = _l.setReference, setFloating = _l.setFloating, strategy = _k.strategy, context = _k.context;
    var elementsRef = React.useRef([]);
    var labelsRef = React.useRef([]);
    var listNavigation = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex: activeIndex,
        onNavigate: setActiveIndex,
        virtual: true,
        loop: true,
    });
    var _m = useInteractions([
        useDismiss(context, { enabled: dismissible }),
        useClick(context),
        listNavigation,
    ]), getReferenceProps = _m.getReferenceProps, getItemProps = _m.getItemProps;
    var dropdownContext = useMemo(function () { return ({ activeIndex: activeIndex, getItemProps: getItemProps, setOpen: setOpen }); }, [activeIndex, getItemProps, setOpen]);
    useEffect(function () {
        setOpen(openProp);
    }, [openProp]);
    useEffect(function () {
        setActiveIndex(0);
    }, [children]);
    return (React.createElement(React.Fragment, null,
        renderOpener(__assign({ open: open, ref: setReference }, getReferenceProps({
            open: open,
            tabIndex: 0,
        }))),
        open ? (React.createElement(DropdownContext.Provider, { value: dropdownContext },
            React.createElement(Portal, { className: "h-floating-ui h-floating-ui--dropdowns" },
                React.createElement(FloatingFocusManager, { closeOnFocusOut: false, context: context, initialFocus: -1, visuallyHiddenDismiss: true },
                    React.createElement("div", { ref: setFloating, className: "h-dropdown h-overflow-auto", style: {
                            position: strategy,
                            top: y !== null && y !== void 0 ? y : 0,
                            left: x !== null && x !== void 0 ? x : 0,
                        }, role: "menu" },
                        React.createElement("ul", { className: "h-dropdown__menu" },
                            React.createElement(FloatingList, { elementsRef: elementsRef, labelsRef: labelsRef }, children))))))) : null));
};
export { AutoComplete };
//# sourceMappingURL=Autocomplete.js.map