import React from 'react';
import classNames from 'classnames';
var Label = function (_a) {
    var htmlFor = _a.htmlFor, labelText = _a.labelText, labelClassName = _a.labelClassName;
    return (React.createElement("label", { "data-testid": "h-label", className: classNames("h-input-label", labelClassName), htmlFor: htmlFor }, labelText));
};
export { Label };
//# sourceMappingURL=Label.js.map