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
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { autoUpdate, flip, FloatingFocusManager, FloatingList, limitShift, offset, shift, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useTypeahead, size, } from '@floating-ui/react';
import { SelectContext } from './SelectContext';
import { Portal } from '../Portal';
var Select = function (_a) {
    var children = _a.children, _b = _a.closeOnSelect, closeOnSelect = _b === void 0 ? true : _b, _c = _a.flip, flipProp = _c === void 0 ? true : _c, _d = _a.initialSelectedValue, initialSelectedValue = _d === void 0 ? null : _d, _e = _a.initialSelectedIndex, initialSelectedIndex = _e === void 0 ? null : _e, minHeight = _a.minHeight, _f = _a.placement, placement = _f === void 0 ? "bottom-end" : _f, renderOpener = _a.renderOpener, _g = _a.width, width = _g === void 0 ? "auto" : _g, maxHeight = _a.maxHeight, _h = _a.height, height = _h === void 0 ? "auto" : _h;
    var _j = useState(false), open = _j[0], setOpen = _j[1];
    var _k = useState(null), activeIndex = _k[0], setActiveIndex = _k[1];
    var _l = useState(initialSelectedIndex), selectedIndex = _l[0], setSelectedIndex = _l[1];
    var _m = useState(initialSelectedValue), selectedLabel = _m[0], setSelectedLabel = _m[1];
    var _o = useFloating({
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
        onOpenChange: setOpen,
    }), x = _o.x, y = _o.y, _p = _o.refs, setReference = _p.setReference, setFloating = _p.setFloating, strategy = _o.strategy, context = _o.context;
    var elementsRef = useRef([]);
    var labelsRef = useRef([]);
    var handleSelect = useCallback(function (index) {
        setSelectedIndex(index);
        closeOnSelect && setOpen(false);
        if (index !== null) {
            setSelectedLabel(labelsRef.current[index]);
        }
    }, [closeOnSelect]);
    var listNavigation = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex: activeIndex,
        onNavigate: setActiveIndex,
        loop: true,
    });
    var typeahead = useTypeahead(context, {
        listRef: labelsRef,
        activeIndex: activeIndex,
        onMatch: setActiveIndex,
    });
    var _q = useInteractions([
        useDismiss(context),
        useClick(context),
        listNavigation,
        typeahead,
    ]), getReferenceProps = _q.getReferenceProps, getFloatingProps = _q.getFloatingProps, getItemProps = _q.getItemProps;
    var selectContext = useMemo(function () { return ({ activeIndex: activeIndex, getItemProps: getItemProps, handleSelect: handleSelect, selectedIndex: selectedIndex }); }, [activeIndex, getItemProps, handleSelect, selectedIndex]);
    return (React.createElement(React.Fragment, null,
        renderOpener(__assign({ ref: setReference, selectedLabel: selectedLabel }, getReferenceProps({
            onClick: function (e) {
                setOpen(!open);
                e.stopPropagation();
                // Normalize button focus while clicking on Safari.
                e.currentTarget.focus();
            },
            onKeyPress: function (e) {
                // This stops propagation up to the parent onKeyPress, which then triggers both the onKeyPress and
                //   the onClick because buttons trigger key presses as clicks
                e.stopPropagation();
            },
            open: open,
            tabIndex: 0,
        }))),
        open ? (React.createElement(SelectContext.Provider, { value: selectContext },
            React.createElement(Portal, { className: "h-floating-ui h-floating-ui--dropdowns" },
                React.createElement(FloatingFocusManager, { context: context },
                    React.createElement("div", __assign({ ref: setFloating, className: "h-dropdown h-overflow-auto", style: {
                            position: strategy,
                            top: y !== null && y !== void 0 ? y : 0,
                            left: x !== null && x !== void 0 ? x : 0,
                        }, role: "menu" }, getFloatingProps({
                        // Pressing tab dismisses the menu due to the modal
                        // focus management on the root menu.
                        onKeyDown: function (event) {
                            if (event.key === "Tab") {
                                setOpen(false);
                            }
                        },
                    })),
                        React.createElement("ul", { className: "h-dropdown__menu" },
                            React.createElement(FloatingList, { elementsRef: elementsRef, labelsRef: labelsRef }, children))))))) : null));
};
export { Select };
//# sourceMappingURL=Select.js.map