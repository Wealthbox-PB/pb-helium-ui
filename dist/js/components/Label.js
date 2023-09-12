import React from 'react';
import classNames from 'classnames';
var Label = function (_a) {
    var children = _a.children, htmlFor = _a.htmlFor, labelClassName = _a.labelClassName;
    return (React.createElement("label", { "data-testid": "h-label", className: classNames("h-form-label", labelClassName), htmlFor: htmlFor }, children));
};
export { Label };
//# sourceMappingURL=Label.js.map