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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { useRef } from 'react';
import { useFloating, offset, flip, shift, useListNavigation, useHover, useTypeahead, useInteractions, useRole, useClick, useDismiss, autoUpdate, safePolygon, FloatingPortal, useFloatingTree, useFloatingNodeId, useFloatingParentNodeId, useMergeRefs, FloatingNode, FloatingTree, FloatingFocusManager, } from '@floating-ui/react';
import classNames from 'classnames';
export var MenuItem = React.forwardRef(function (_a, ref) {
    var label = _a.label, disabled = _a.disabled, props = __rest(_a, ["label", "disabled"]);
    return (React.createElement("button", __assign({}, props, { ref: ref, role: "menuitem", disabled: disabled }), label));
});
export var MenuComponent = React.forwardRef(function (_a, forwardedRef) {
    var _b, _c, _d;
    var _e = _a.buttonClasses, buttonClasses = _e === void 0 ? "" : _e, buttonContent = _a.buttonContent, buttonContentClasses = _a.buttonContentClasses, _f = _a.buttonDisabled, buttonDisabled = _f === void 0 ? false : _f, _g = _a.buttonOpenClass, buttonOpenClass = _g === void 0 ? "" : _g, _h = _a.buttonClosedClass, buttonClosedClass = _h === void 0 ? "" : _h, children = _a.children, label = _a.label, props = __rest(_a, ["buttonClasses", "buttonContent", "buttonContentClasses", "buttonDisabled", "buttonOpenClass", "buttonClosedClass", "children", "label"]);
    var _j = React.useState(false), open = _j[0], setOpen = _j[1];
    var _k = React.useState(null), activeIndex = _k[0], setActiveIndex = _k[1];
    var _l = React.useState(false), allowHover = _l[0], setAllowHover = _l[1];
    var dropdownContentContainerRef = useRef(null);
    var listItemsRef = React.useRef([]);
    var listContentRef = React.useRef(React.Children.map(children, function (child) {
        return React.isValidElement(child) ? child.props.label : null;
    }));
    var tree = useFloatingTree();
    var nodeId = useFloatingNodeId();
    var parentId = useFloatingParentNodeId();
    var nested = parentId != null;
    var _m = useFloating({
        open: open,
        nodeId: nodeId,
        onOpenChange: setOpen,
        placement: nested ? "right-start" : "bottom-start",
        middleware: [offset({ mainAxis: 4, alignmentAxis: nested ? -5 : 0 }), flip(), shift()],
        whileElementsMounted: autoUpdate,
    }), x = _m.x, y = _m.y, reference = _m.reference, floating = _m.floating, strategy = _m.strategy, context = _m.context;
    var _o = useInteractions([
        useHover(context, {
            handleClose: safePolygon({ restMs: 25 }),
            enabled: nested && allowHover,
            delay: { open: 75 },
        }),
        useClick(context, {
            toggle: !nested || !allowHover,
            event: "mousedown",
            ignoreMouse: nested && allowHover,
        }),
        useRole(context, { role: "menu" }),
        useDismiss(context),
        useListNavigation(context, {
            listRef: listItemsRef,
            activeIndex: activeIndex,
            nested: nested,
            onNavigate: setActiveIndex,
        }),
        useTypeahead(context, {
            listRef: listContentRef,
            onMatch: open ? setActiveIndex : undefined,
            activeIndex: activeIndex,
        }),
    ]), getReferenceProps = _o.getReferenceProps, getFloatingProps = _o.getFloatingProps, getItemProps = _o.getItemProps;
    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    React.useEffect(function () {
        function handleTreeClick() {
            setOpen(false);
        }
        tree === null || tree === void 0 ? void 0 : tree.events.on("click", handleTreeClick);
        return function () {
            tree === null || tree === void 0 ? void 0 : tree.events.off("click", handleTreeClick);
        };
    }, [tree]);
    // Determine if "hover" logic can run based on the modality of input. This
    // prevents unwanted focus synchronization as menus open and close with
    // keyboard navigation and the cursor is resting on the menu.
    React.useEffect(function () {
        function onPointerMove(_a) {
            var pointerType = _a.pointerType;
            if (pointerType !== "touch") {
                setAllowHover(true);
            }
        }
        function onKeyDown() {
            setAllowHover(false);
        }
        window.addEventListener("pointermove", onPointerMove, {
            once: true,
            capture: true,
        });
        window.addEventListener("keydown", onKeyDown, true);
        return function () {
            window.removeEventListener("pointermove", onPointerMove, {
                capture: true,
            });
            window.removeEventListener("keydown", onKeyDown, true);
        };
    }, [allowHover]);
    var referenceRef = useMergeRefs([reference, forwardedRef]);
    return (React.createElement(FloatingNode, { id: nodeId },
        React.createElement("button", __assign({ ref: referenceRef, disabled: buttonDisabled }, getReferenceProps(__assign(__assign(__assign({}, props), { className: classNames((_b = {}, _b[buttonClasses] = !nested, _b), { RootMenu: nested }, (_c = {}, _c[buttonClosedClass] = !open, _c), (_d = {}, _d[buttonOpenClass] = open, _d)), onClick: function (event) {
                event.stopPropagation();
            } }), (nested && {
            // Indicates this is a nested <Menu /> acting as a <MenuItem />.
            role: "menuitem",
        })))),
            buttonContent ? React.createElement("span", { className: buttonContentClasses }, buttonContent) : label,
            nested && React.createElement("span", { "aria-hidden": true, className: "ms-2 h-icon-chevron-right h-color-text-lighter" })),
        React.createElement(FloatingPortal, null, open && (React.createElement(FloatingFocusManager, { context: context, 
            // Prevent outside content interference.
            modal: !nested, 
            // Only initially focus the root floating menu.
            initialFocus: nested ? -1 : 0, 
            // Only return focus to the root menu's reference when menus close.
            returnFocus: !nested, 
            // Allow touch screen readers to escape the modal root menu
            // without selecting anything.
            visuallyHiddenDismiss: true },
            React.createElement("div", __assign({ ref: floating, className: "Menu", style: {
                    position: strategy,
                    top: y !== null && y !== void 0 ? y : 0,
                    left: x !== null && x !== void 0 ? x : 0,
                    width: "max-content",
                } }, getFloatingProps({
                // Pressing tab dismisses the menu and places focus
                // back on the trigger.
                onKeyDown: function (event) {
                    if (event.key === "Tab") {
                        setOpen(false);
                    }
                },
            })), React.Children.map(children, function (child, index) {
                return React.isValidElement(child) ? (React.cloneElement(child, getItemProps({
                    tabIndex: activeIndex === index ? 0 : -1,
                    role: "menuitem",
                    className: "MenuItem",
                    ref: function (node) {
                        listItemsRef.current[index] = node;
                    },
                    onClick: function (event) {
                        var _a, _b;
                        (_b = (_a = child.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, event);
                        tree === null || tree === void 0 ? void 0 : tree.events.emit("click");
                    },
                    // Allow focus synchronization if the cursor did not move.
                    onPointerEnter: function () {
                        if (allowHover) {
                            setActiveIndex(index);
                        }
                    },
                }))) : (React.createElement("div", { className: "h-dropdown", ref: dropdownContentContainerRef, dangerouslySetInnerHTML: { __html: children } }));
            })))))));
});
export var Dropdown = React.forwardRef(function (props, ref) {
    var parentId = useFloatingParentNodeId();
    if (parentId == null) {
        return (React.createElement(FloatingTree, null,
            React.createElement(MenuComponent, __assign({}, props, { ref: ref }))));
    }
    return React.createElement(MenuComponent, __assign({}, props, { ref: ref }));
});
//# sourceMappingURL=Dropdown.js.map