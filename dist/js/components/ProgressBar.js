import React from 'react';
var ProgressBar = function (_a) {
    var _b = _a.currentStep, currentStep = _b === void 0 ? 1 : _b, _c = _a.totalSteps, totalSteps = _c === void 0 ? 4 : _c, _d = _a.complete, complete = _d === void 0 ? false : _d, label = _a.label;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "d-flex align-items-center" },
            label ?
                React.createElement("div", { className: "pe-2" }, label)
                :
                    null,
            React.createElement("div", { className: "position-relative flex-grow-1" },
                React.createElement("div", { style: { width: "".concat(percentComplete(currentStep, totalSteps, complete), "%") }, className: "h-progress-bar-fill position-absolute h-color-background-blue-500" }),
                React.createElement("div", { className: "h-progress-bar" })))));
};
var percentComplete = function (currentStep, totalSteps, complete) {
    if (complete) {
        return 100;
    }
    return ((currentStep + ((totalSteps - currentStep) * 0.1)) - 0.5) / totalSteps * 100;
};
export { ProgressBar };
//# sourceMappingURL=ProgressBar.js.map