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
import React, { useMemo, useState } from 'react';
import { autoUpdate, flip, FloatingFocusManager, FloatingList, limitShift, offset, shift, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useTypeahead, size, } from '@floating-ui/react';
import { DropdownContext } from './DropdownContext';
import { Portal } from 'components/Portal';
var Dropdown = function (_a) {
    var children = _a.children, _b = _a.flip, flipProp = _b === void 0 ? true : _b, _c = _a.height, height = _c === void 0 ? 200 : _c, _d = _a.placement, placement = _d === void 0 ? "bottom-end" : _d, renderOpener = _a.renderOpener, _e = _a.width, width = _e === void 0 ? "auto" : _e, _f = _a.grow, grow = _f === void 0 ? true : _f;
    var _g = useState(false), open = _g[0], setOpen = _g[1];
    var _h = useState(null), activeIndex = _h[0], setActiveIndex = _h[1];
    var _j = useFloating({
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
                        height: grow ? "".concat(Math.max(height, availableHeight) - 4, "px") : "".concat(height, "px"),
                        maxWidth: width === "full" ? "".concat(rects.reference.width, "px") : width === "auto" ? null : width + "px",
                    });
                },
            }),
        ],
        onOpenChange: setOpen,
    }), x = _j.x, y = _j.y, _k = _j.refs, setReference = _k.setReference, setFloating = _k.setFloating, strategy = _j.strategy, context = _j.context;
    var elementsRef = React.useRef([]);
    var labelsRef = React.useRef([]);
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
    var _l = useInteractions([
        useDismiss(context),
        useClick(context),
        listNavigation,
        typeahead,
    ]), getReferenceProps = _l.getReferenceProps, getFloatingProps = _l.getFloatingProps, getItemProps = _l.getItemProps;
    var dropdownContext = useMemo(function () { return ({ activeIndex: activeIndex, getItemProps: getItemProps, setOpen: setOpen }); }, [activeIndex, getItemProps, setOpen]);
    return (React.createElement(React.Fragment, null,
        renderOpener(__assign({ ref: setReference }, getReferenceProps({
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
        open ? (React.createElement(DropdownContext.Provider, { value: dropdownContext },
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
export { Dropdown };
//# sourceMappingURL=Dropdown.js.map