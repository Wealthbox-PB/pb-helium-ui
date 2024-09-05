var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { autoUpdate, flip, limitShift, offset, shift, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useTypeahead, size, } from '@floating-ui/react';
import { useEffect, useRef, useState } from 'react';
export function useSelect(_a) {
    var _b = _a.flip, flipProp = _b === void 0 ? true : _b, _c = _a.height, height = _c === void 0 ? "auto" : _c, maxHeight = _a.maxHeight, minHeight = _a.minHeight, handleQuery = _a.handleQuery, _d = _a.placement, placement = _d === void 0 ? "bottom-start" : _d, _e = _a.width, width = _e === void 0 ? "auto" : _e, _f = _a.virtualFocus, virtualFocus = _f === void 0 ? false : _f;
    var _g = useState(false), open = _g[0], setOpen = _g[1];
    var _h = useState(null), activeIndex = _h[0], setActiveIndex = _h[1];
    var defaultSpacing = 4;
    var _j = useFloating({
        open: open,
        whileElementsMounted: autoUpdate,
        placement: placement,
        strategy: "absolute",
        middleware: [
            offset(defaultSpacing),
            flip({ mainAxis: flipProp }),
            shift({ padding: defaultSpacing, limiter: limitShift() }),
            size({
                apply: function (_a) {
                    var availableHeight = _a.availableHeight, elements = _a.elements, rects = _a.rects;
                    Object.assign(elements.floating.style, {
                        maxHeight: height === "auto"
                            ? maxHeight
                                ? "".concat(Math.min(maxHeight, availableHeight) - defaultSpacing, "px")
                                : "".concat(availableHeight - defaultSpacing, "px")
                            : null,
                        minHeight: height == "auto" ? (minHeight ? "".concat(minHeight - defaultSpacing, "px") : null) : null,
                        height: height,
                        width: width === "full" ? "".concat(rects.reference.width, "px") : width === "auto" ? null : width + "px",
                    });
                },
            }),
        ],
        onOpenChange: function (open) {
            setOpen(open);
            setActiveIndex(null);
        },
    }), xPosition = _j.x, yPosition = _j.y, _k = _j.refs, setReference = _k.setReference, setFloating = _k.setFloating, strategy = _j.strategy, context = _j.context;
    var elementsRef = useRef([]);
    var labelsRef = useRef([]);
    var searchInputRef = useRef(null);
    var listNavigation = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex: activeIndex,
        onNavigate: setActiveIndex,
        loop: true,
        virtual: virtualFocus,
    });
    var typeahead = useTypeahead(context, {
        listRef: labelsRef,
        activeIndex: activeIndex,
        onMatch: setActiveIndex,
    });
    var _l = useInteractions(__spreadArray([
        useDismiss(context),
        useClick(context),
        listNavigation
    ], (virtualFocus ? [] : [typeahead]), true)), getReferenceProps = _l.getReferenceProps, getFloatingProps = _l.getFloatingProps, getItemProps = _l.getItemProps;
    useEffect(function () {
        if (!open) {
            handleQuery === null || handleQuery === void 0 ? void 0 : handleQuery("");
        }
    }, [open, handleQuery]);
    return {
        getReferenceProps: getReferenceProps,
        getFloatingProps: getFloatingProps,
        getItemProps: getItemProps,
        labelsRef: labelsRef,
        elementsRef: elementsRef,
        xPosition: xPosition,
        yPosition: yPosition,
        setReference: setReference,
        setFloating: setFloating,
        strategy: strategy,
        open: open,
        setOpen: setOpen,
        activeIndex: activeIndex,
        setActiveIndex: setActiveIndex,
        context: context,
        searchInputRef: searchInputRef,
    };
}
//# sourceMappingURL=useSelect.js.map