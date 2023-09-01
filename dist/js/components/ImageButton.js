import React from 'react';
var ImageButton = function (_a) {
    var imagePath = _a.imagePath, imageLabel = _a.imageLabel, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.aspectRatio, aspectRatio = _c === void 0 ? "4:5" : _c, onClick = _a.onClick;
    var buttonStyles = {
        backgroundImage: "url(".concat(imagePath, ")"),
        paddingBottom: '100%',
    };
    var aspectRatios = {
        '4:5': '75%',
        '16:9': '56.25%',
        '3:4': '133.33%',
        '2:3': '150%',
        '1:1': '100%',
    };
    buttonStyles.paddingBottom = aspectRatios[aspectRatio];
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { type: "button", "data-selected": selected, className: "h-image-button", "aria-label": imageLabel, style: buttonStyles, onClick: onClick })));
};
export { ImageButton };
//# sourceMappingURL=ImageButton.js.map