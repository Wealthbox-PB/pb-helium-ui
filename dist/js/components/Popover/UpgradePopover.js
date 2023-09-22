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
/* eslint-disable max-len */
import React from 'react';
import { LinkButton } from 'components/LinkButton';
import { Popover } from './Popover';
import classNames from 'classnames';
var UpgradePopover = function (_a) {
    var _b, _c;
    var renderOpener = _a.renderOpener, _d = _a.featureName, featureName = _d === void 0 ? "this feature" : _d, upgradeHref = _a.upgradeHref, _e = _a.theme, theme = _e === void 0 ? "light" : _e, props = __rest(_a, ["renderOpener", "featureName", "upgradeHref", "theme"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Popover, __assign({ renderOpener: renderOpener, theme: theme, bodyClassName: "p-0" }, props),
            React.createElement("div", { className: "d-flex p-3" },
                React.createElement("div", { className: "col-auto me-2" },
                    React.createElement("span", { className: classNames([
                            "h-icon-arrow-up-circle--filled h-font-size-xl d-block h-line-height-1",
                            (_b = {}, _b["h-color-text-white"] = theme === "primary", _b),
                            (_c = {}, _c["h-color-text-blue-500"] = theme !== "primary", _c),
                        ]) })),
                React.createElement("div", { className: "col" },
                    React.createElement("h5", { className: "mb-0" },
                        "Upgrade to unlock ",
                        featureName),
                    React.createElement("p", { className: "mb-0" },
                        "Get ",
                        featureName.toLowerCase(),
                        " and more."))),
            React.createElement("div", { className: "h-popover-separator" }),
            React.createElement("div", { className: "p-3" },
                React.createElement(LinkButton, { variant: theme === "primary" ? "secondary" : "primary", className: "d-block w-100", href: upgradeHref }, "Get feature")))));
};
export { UpgradePopover };
//# sourceMappingURL=UpgradePopover.js.map