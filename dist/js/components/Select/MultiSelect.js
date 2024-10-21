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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FloatingFocusManager, FloatingList } from '@floating-ui/react';
import { SelectContext } from './SelectContext';
import { Portal } from '../Portal';
import { useSelect } from '../../hooks/useSelect';
import { SelectMenuButton } from './SelectMenuButton';
import { SearchableSelectInput } from './SearchableSelectInput';
import { DropdownMenuSeparator } from '../Dropdown/DropdownMenuSeparator';
import { Checkbox } from '../Checkbox';
import classNames from 'classnames';
import _ from 'lodash';
var MultiSelect = function (_a) {
    var initialOptions = _a.initialOptions, renderOpener = _a.renderOpener, _b = _a.allowCustomValue, allowCustomValue = _b === void 0 ? false : _b, _c = _a.flip, flip = _c === void 0 ? true : _c, _d = _a.height, height = _d === void 0 ? "auto" : _d, _e = _a.initialSelectedValue, initialSelectedValue = _e === void 0 ? [] : _e, maxHeight = _a.maxHeight, minHeight = _a.minHeight, name = _a.name, _f = _a.placement, placement = _f === void 0 ? "bottom-end" : _f, _g = _a.searchable, searchable = _g === void 0 ? false : _g, _h = _a.width, width = _h === void 0 ? "auto" : _h;
    var _j = useState(initialSelectedValue), multiSelectValue = _j[0], setMultiSelectValue = _j[1];
    var _k = useState(initialSelectedValue.map(function (item) { return item.label; })), selectedLabels = _k[0], setSelectedLabels = _k[1];
    var _l = useState([]), sortedOptions = _l[0], setSortedOptions = _l[1];
    var _m = useState(initialOptions), displayOptions = _m[0], setDisplayOptions = _m[1];
    var _o = useState(""), query = _o[0], setQuery = _o[1];
    var _p = useState(false), queryExists = _p[0], setQueryExists = _p[1];
    var _q = useState(false), allSelected = _q[0], setAllSelected = _q[1];
    var _r = useState(false), isIndeterminate = _r[0], setIsIndeterminate = _r[1];
    var handleQuery = function (query) {
        setQuery(query);
    };
    var _s = useSelect({
        flip: flip,
        height: height,
        handleQuery: handleQuery,
        maxHeight: maxHeight,
        minHeight: minHeight,
        placement: placement,
        width: width,
        virtualFocus: searchable,
    }), getReferenceProps = _s.getReferenceProps, getFloatingProps = _s.getFloatingProps, getItemProps = _s.getItemProps, labelsRef = _s.labelsRef, elementsRef = _s.elementsRef, xPosition = _s.xPosition, yPosition = _s.yPosition, setReference = _s.setReference, setFloating = _s.setFloating, strategy = _s.strategy, open = _s.open, setOpen = _s.setOpen, activeIndex = _s.activeIndex, setActiveIndex = _s.setActiveIndex, context = _s.context, searchInputRef = _s.searchInputRef;
    var isCustomValueDisplayed = query && allowCustomValue && !queryExists;
    var isCustomValue = isCustomValueDisplayed && activeIndex === displayOptions.length - 1;
    var handleSelectAll = function () {
        var _a;
        if (allSelected) {
            var filteredSelectedOptions = multiSelectValue.filter(function (option) { return !displayOptions.find(function (item) { return item.value === option.value; }); });
            setMultiSelectValue(filteredSelectedOptions);
            setSelectedLabels(filteredSelectedOptions.map(function (item) { return item.label; }));
        }
        else {
            var optionsToSelect = displayOptions.filter(function (option, i) {
                if (isCustomValueDisplayed && i === displayOptions.length - 1) {
                    return false;
                }
                else {
                    return multiSelectValue.find(function (item) { return item.value === option.value; }) === undefined;
                }
            });
            setMultiSelectValue(__spreadArray(__spreadArray([], multiSelectValue, true), optionsToSelect, true));
            setSelectedLabels(__spreadArray(__spreadArray([], selectedLabels, true), optionsToSelect.map(function (item) { return item.label; }), true));
            if (searchable) {
                (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    };
    var handleMultiSelect = useCallback(function (object) {
        var _a;
        if (object !== null) {
            if (multiSelectValue.find(function (item) { return item.value === object.value; })) {
                setMultiSelectValue(multiSelectValue.filter(function (item) { return item.value !== object.value; }));
                setSelectedLabels(selectedLabels.filter(function (item) { return item !== object.label; }));
            }
            else {
                setMultiSelectValue(__spreadArray(__spreadArray([], multiSelectValue, true), [object], false));
                setSelectedLabels(__spreadArray(__spreadArray([], selectedLabels, true), [object.label], false));
                if (isCustomValue) {
                    setSortedOptions(__spreadArray(__spreadArray([], sortedOptions, true), [object], false));
                }
            }
            if (searchable) {
                (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    }, [multiSelectValue, selectedLabels, sortedOptions, isCustomValue, searchable, searchInputRef]);
    useEffect(function () {
        var selectedDisplayOptions = _.intersection(multiSelectValue, displayOptions);
        var allChecked = isCustomValueDisplayed
            ? selectedDisplayOptions.length === displayOptions.length - 1
            : selectedDisplayOptions.length === displayOptions.length;
        var someChecked = selectedDisplayOptions.length ? true : false;
        setAllSelected(allChecked);
        setIsIndeterminate(someChecked && !allChecked);
    }, [multiSelectValue, displayOptions, isCustomValueDisplayed]);
    useEffect(function () {
        if (!open) {
            var filteredOptions = initialOptions.filter(function (option) { return multiSelectValue.find(function (item) { return item.value === option.value; }) === undefined; });
            setSortedOptions(__spreadArray(__spreadArray([], multiSelectValue, true), filteredOptions, true));
        }
    }, [initialOptions, multiSelectValue, open]);
    useEffect(function () {
        var queriedOptions = sortedOptions.filter(function (option) {
            return option.label.toLowerCase().includes(query.toLowerCase());
        });
        var existingQuery = queriedOptions.find(function (option) { return option.label.toLowerCase() === query.toLowerCase(); }) !== undefined;
        setQueryExists(existingQuery);
        if (isCustomValueDisplayed) {
            setDisplayOptions(__spreadArray(__spreadArray([], queriedOptions, true), [{ label: query, value: query }], false));
        }
        else {
            setDisplayOptions(queriedOptions);
        }
    }, [query, allowCustomValue, sortedOptions, isCustomValueDisplayed]);
    var selectContext = useMemo(function () { return ({
        activeIndex: activeIndex,
        setActiveIndex: setActiveIndex,
        getItemProps: getItemProps,
        multiSelectValue: multiSelectValue,
        handleMultiSelect: handleMultiSelect,
        searchInputRef: searchInputRef,
    }); }, [activeIndex, setActiveIndex, getItemProps, multiSelectValue, handleMultiSelect, searchInputRef]);
    return (React.createElement(React.Fragment, null,
        renderOpener(__assign({ ref: setReference, selectedLabels: selectedLabels }, getReferenceProps({
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
                    React.createElement("div", __assign({ ref: setFloating, className: classNames("h-dropdown h-overflow-auto", {
                            'p-0 d-flex flex-column': searchable,
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
                        searchable ? (React.createElement(SearchableSelectInput, { handleQuery: handleQuery, options: displayOptions, multiSelect: true, inputClassName: "m-1" })) : null,
                        React.createElement("div", { className: "h-overflow-auto" },
                            React.createElement("ul", { className: classNames("h-dropdown__menu", {
                                    'p-2': searchable,
                                }) },
                                React.createElement(FloatingList, { elementsRef: elementsRef, labelsRef: labelsRef }, displayOptions.length ? (React.createElement(React.Fragment, null,
                                    React.createElement("li", { className: "h-dropdown__menu__select-all" },
                                        React.createElement(Checkbox, { checked: allSelected, indeterminate: isIndeterminate, onChange: handleSelectAll, label: query ? "Select All Matching" : "Select All", size: "sm", className: classNames("h-dropdown__menu__select-all__btn d-flex py-2"), labelClassName: "ps-1 h-color-text-gray-700" })),
                                    displayOptions.map(function (option, i) {
                                        var customValueOption = isCustomValueDisplayed && i === displayOptions.length - 1;
                                        return (React.createElement(React.Fragment, { key: JSON.stringify(option.value) },
                                            customValueOption ? React.createElement(DropdownMenuSeparator, null) : null,
                                            React.createElement(SelectMenuButton, { label: "".concat(customValueOption ? "Specify: " : "").concat(option.label), value: option, multiSelect: true, searchableMenu: searchable, customValue: customValueOption ? true : false, buttonClassName: "py-2" })));
                                    }))) : (React.createElement("li", { className: "text-center h-color-text-light py-2" }, "No results found.")))))))))) : null,
        name ? (React.createElement("input", { type: "hidden", name: name, "data-testid": "multi-select-input", value: JSON.stringify(multiSelectValue) || "" })) : null));
};
export { MultiSelect };
//# sourceMappingURL=MultiSelect.js.map