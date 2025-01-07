import classNames from 'classnames';
import React from 'react';
var Interstitial = function (_a) {
    var animate = _a.animate, children = _a.children, className = _a.className, contentClassName = _a.contentClassName, _b = _a.iconClassName, iconClassName = _b === void 0 ? 'h-icon-b-wealthbox' : _b, size = _a.size;
    return (React.createElement("div", { className: classNames('h-interstitial', {
            'h-animate-fade-in': animate,
            'h-interstitial--sm': size === 'small',
        }, className), "data-testid": "h-interstitial" },
        React.createElement("span", { className: classNames('h-interstitial__icon', iconClassName), "aria-hidden": "true", "data-testid": "h-interstitial__icon" }),
        React.createElement("div", { className: classNames('h-interstitial__content', contentClassName), "data-testid": "h-interstitial__content" }, children)));
};
export { Interstitial };
//# sourceMappingURL=Interstitial.js.map