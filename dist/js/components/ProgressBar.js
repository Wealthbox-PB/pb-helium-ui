import React from 'react';
import classNames from 'classnames';
var ProgressBar = function (_a) {
    var completedSteps = _a.completedSteps, totalSteps = _a.totalSteps, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return (React.createElement("div", { role: "progressbar", className: "h-progress-bar" },
        React.createElement("div", { style: { width: "".concat(percentComplete(completedSteps, totalSteps), "%") }, className: classNames("h-progress-bar__fill h-color-background-blue-500", "h-progress-bar--".concat(variant)) }),
        React.createElement("div", { className: classNames("h-progress-bar__background", "h-progress-bar--".concat(variant)) })));
};
var percentComplete = function (completedSteps, totalSteps) {
    return completedSteps / totalSteps * 100;
};
export { ProgressBar };
//# sourceMappingURL=ProgressBar.js.map