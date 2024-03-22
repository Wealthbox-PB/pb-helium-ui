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
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { randomString } from '../helpers/random_string';
import { Transition } from 'react-transition-group';
var AccordionPanel = function (_a) {
    var _b, _c;
    var collapseIconName = _a.collapseIconName, expandIconName = _a.expandIconName, iconPosition = _a.iconPosition, item = _a.item, open = _a.open, panelClassName = _a.panelClassName, toggleOpen = _a.toggleOpen;
    var _d = useState("0px"), contentHeight = _d[0], setContentHeight = _d[1];
    var transitionRef = useRef(null);
    var childrenRef = useRef(null);
    var uid = randomString("h-accordion__panel-");
    var transition = initAccordionCssTransitionStyles(contentHeight, 250);
    return (React.createElement("div", { className: classNames("h-accordion__panel", panelClassName, { 'h-accordion__panel--open': open }), "aria-expanded": open, "data-testid": "h-accordion__panel" },
        React.createElement("button", { className: "h-accordion__panel__cta d-flex align-items-center w-100", type: "button", onClick: toggleOpen, "aria-controls": uid, "aria-label": open ? "Collapse" : "Expand" },
            iconPosition === "left" ? (React.createElement("span", { className: classNames("h-accordion__panel__icon me-2 flex-shrink-0", (_b = {},
                    _b["h-icon-".concat(collapseIconName)] = open,
                    _b["h-icon-".concat(expandIconName)] = !open,
                    _b)), "aria-hidden": "true", "data-testid": "h-accordion__panel__icon-left" })) : null,
            React.createElement("div", { className: "h-accordion__panel__label flex-grow-1" }, item.label),
            iconPosition === "right" ? (React.createElement("span", { className: classNames("h-accordion__panel__icon ms-2 flex-shrink-0", (_c = {},
                    _c["h-icon-".concat(collapseIconName)] = open,
                    _c["h-icon-".concat(expandIconName)] = !open,
                    _c)), "aria-hidden": "true", "data-testid": "h-accordion__panel__icon-right" })) : null),
        React.createElement(Transition, { in: open, timeout: { enter: transition.transitionDuration, exit: 0 }, nodeRef: transitionRef, onEnter: function () {
                if (childrenRef.current && open) {
                    setContentHeight(childrenRef.current.scrollHeight + "px");
                }
            }, onEntered: function () {
                setContentHeight("auto");
            }, onExit: function () {
                if (childrenRef.current) {
                    setContentHeight(childrenRef.current.scrollHeight + "px");
                }
            }, onExited: function () {
                setContentHeight("0px");
            } }, function (state) { return (React.createElement("div", { id: uid, className: "h-accordion__panel__content h-overflow-hidden", style: __assign(__assign({}, transition.defaultStyle), transition.transitionStyles[state]), "aria-hidden": !open, "data-testid": "h-accordion__panel__content", ref: transitionRef },
            React.createElement("div", { className: "h-accordion__panel__children", ref: childrenRef, "data-testid": "h-accordion__panel__children" }, item.children))); })));
};
export var Accordion = function (_a) {
    var _b = _a.allowMultipleOpen, allowMultipleOpen = _b === void 0 ? false : _b, className = _a.className, _c = _a.collapseIconName, collapseIconName = _c === void 0 ? "minus" : _c, _d = _a.expandIconName, expandIconName = _d === void 0 ? "add" : _d, _e = _a.iconPosition, iconPosition = _e === void 0 ? "right" : _e, items = _a.items, _f = _a.openFirstPanel, openFirstPanel = _f === void 0 ? false : _f, panelClassName = _a.panelClassName, _g = _a.renderInCard, renderInCard = _g === void 0 ? true : _g;
    var _h = useState([]), openItemIndexes = _h[0], setOpenItemIndexes = _h[1];
    useEffect(function () {
        if (openFirstPanel) {
            setOpenItemIndexes([0]);
        }
    }, [openFirstPanel]);
    var toggleOpen = function (index) {
        if (allowMultipleOpen) {
            setOpenItemIndexes(function (prevOpenItemIndexes) {
                return prevOpenItemIndexes.includes(index)
                    ? prevOpenItemIndexes.filter(function (itemIndex) { return itemIndex !== index; })
                    : __spreadArray(__spreadArray([], prevOpenItemIndexes, true), [index], false);
            });
        }
        else {
            setOpenItemIndexes(function (prevOpenItemIndexes) { return (prevOpenItemIndexes.includes(index) ? [] : [index]); });
        }
    };
    return (React.createElement("div", { className: classNames("h-accordion", className, {
            'h-card': renderInCard,
        }), "data-testid": "h-accordion" }, items.map(function (item, index) { return (React.createElement(AccordionPanel, { key: index, collapseIconName: collapseIconName, expandIconName: expandIconName, iconPosition: iconPosition, item: item, panelClassName: panelClassName, open: openItemIndexes.includes(index), toggleOpen: function () { return toggleOpen(index); } })); })));
};
var initAccordionCssTransitionStyles = function (height, transitionDuration) {
    return {
        transitionDuration: transitionDuration,
        defaultStyle: {
            transition: "all ".concat(transitionDuration, "ms ease-in-out"),
            opacity: 0,
            height: height,
            visibility: "hidden",
        },
        transitionStyles: {
            entering: { opacity: 1, visibility: "visible" },
            entered: { opacity: 1, visibility: "visible" },
            exiting: { opacity: 0 },
            exited: { opacity: 0, visibility: "hidden" },
        },
    };
};
//# sourceMappingURL=Accordion.js.map