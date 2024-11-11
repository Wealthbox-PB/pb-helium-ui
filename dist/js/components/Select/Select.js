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
import React, { useCallback, useMemo, useState } from 'react';
import { FloatingFocusManager, FloatingList } from '@floating-ui/react';
import { SelectContext } from './SelectContext';
import { Portal } from '../Portal';
import { useSelect } from '../../hooks/useSelect';
import classNames from 'classnames';
import { SearchableSelectInput } from './SearchableSelectInput';
var Select = function (_a) {
    var children = _a.children, renderOpener = _a.renderOpener, _b = _a.closeOnSelect, closeOnSelect = _b === void 0 ? true : _b, displayOptions = _a.displayOptions, _c = _a.flip, flip = _c === void 0 ? true : _c, handleQuery = _a.handleQuery, _d = _a.height, height = _d === void 0 ? "auto" : _d, _e = _a.initialSelectedLabel, initialSelectedLabel = _e === void 0 ? null : _e, _f = _a.initialSelectedValue, initialSelectedValue = _f === void 0 ? null : _f, maxHeight = _a.maxHeight, minHeight = _a.minHeight, name = _a.name, _g = _a.placement, placement = _g === void 0 ? "bottom-end" : _g, portalProps = _a.portalProps, _h = _a.width, width = _h === void 0 ? "auto" : _h, _j = _a.virtualFocus, virtualFocus = _j === void 0 ? false : _j, onKeyDown = _a.onKeyDown, onSelect = _a.onSelect;
    var _k = useState(initialSelectedLabel), selectedLabel = _k[0], setSelectedLabel = _k[1];
    var _l = useState(initialSelectedValue), selectedValue = _l[0], setSelectedValue = _l[1];
    var _m = useSelect({
        flip: flip,
        height: height,
        handleQuery: handleQuery,
        maxHeight: maxHeight,
        minHeight: minHeight,
        placement: placement,
        width: width,
        virtualFocus: virtualFocus,
    }), getReferenceProps = _m.getReferenceProps, getFloatingProps = _m.getFloatingProps, getItemProps = _m.getItemProps, labelsRef = _m.labelsRef, elementsRef = _m.elementsRef, xPosition = _m.xPosition, yPosition = _m.yPosition, setReference = _m.setReference, setFloating = _m.setFloating, strategy = _m.strategy, open = _m.open, setOpen = _m.setOpen, activeIndex = _m.activeIndex, setActiveIndex = _m.setActiveIndex, context = _m.context;
    var handleSelect = useCallback(function (index, value) {
        closeOnSelect && setOpen(false);
        if (index !== null) {
            setSelectedLabel(labelsRef.current[index]);
            setSelectedValue(value);
        }
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(value);
    }, [closeOnSelect, labelsRef, setOpen, onSelect]);
    var handleSearchableSelect = useCallback(function (label, value) {
        closeOnSelect && setOpen(false);
        if (label && value) {
            setSelectedLabel(label);
            setSelectedValue(value);
        }
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(value);
    }, [closeOnSelect, setOpen, onSelect]);
    var selectContext = useMemo(function () { return ({
        activeIndex: activeIndex,
        setActiveIndex: setActiveIndex,
        getItemProps: getItemProps,
        handleSearchableSelect: handleSearchableSelect,
        handleSelect: handleSelect,
        selectedValue: selectedValue,
    }); }, [activeIndex, setActiveIndex, getItemProps, handleSearchableSelect, handleSelect, selectedValue]);
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
            React.createElement(Portal, { className: classNames("h-floating-ui h-floating-ui--dropdowns", portalProps === null || portalProps === void 0 ? void 0 : portalProps.className), selector: portalProps === null || portalProps === void 0 ? void 0 : portalProps.selector },
                React.createElement(FloatingFocusManager, { context: context },
                    React.createElement("div", __assign({ ref: setFloating, className: classNames("h-dropdown h-overflow-auto", {
                            'p-0 d-flex flex-column': handleQuery,
                        }), style: {
                            position: strategy,
                            top: yPosition !== null && yPosition !== void 0 ? yPosition : 0,
                            left: xPosition !== null && xPosition !== void 0 ? xPosition : 0,
                        }, role: "menu" }, getFloatingProps({
                        // Pressing tab dismisses the menu due to the modal
                        // focus management on the root menu.
                        onKeyDown: function (event) {
                            if (event.key === "Tab") {
                                setOpen(false);
                            }
                        },
                    })),
                        handleQuery ? (React.createElement(SearchableSelectInput, { handleQuery: handleQuery, options: (displayOptions === null || displayOptions === void 0 ? void 0 : displayOptions.length) ? displayOptions : [], inputClassName: "m-1", onKeyDown: onKeyDown })) : null,
                        React.createElement("div", { className: "h-overflow-auto" },
                            React.createElement("ul", { className: classNames("h-dropdown__menu", {
                                    'p-2': handleQuery,
                                }) },
                                React.createElement(FloatingList, { elementsRef: elementsRef, labelsRef: labelsRef }, children)))))))) : null,
        name ? (React.createElement("input", { type: "hidden", name: name, value: typeof selectedValue === "string" ? selectedValue : JSON.stringify(selectedValue) || "" })) : null));
};
export { Select };
//# sourceMappingURL=Select.js.map