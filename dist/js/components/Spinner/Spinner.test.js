import React from 'react';
import { shallow } from 'enzyme';
import { HeliumSpinner } from './Spinner';
var wrap;
describe("<HeliumSpinner />", function () {
    it("renders with default screen reader text and size when no props are passed", function () {
        wrap = shallow(React.createElement(HeliumSpinner, null));
        expect(wrap).toMatchSnapshot();
    });
    it("renders with a modifier class when the modifierClass prop is passed", function () {
        wrap = shallow(React.createElement(HeliumSpinner, { modifierClass: "h-spinner--pizza" }));
        expect(wrap).toMatchSnapshot();
    });
    it("renders with custom screen reader text when the screenReaderText prop is passed", function () {
        wrap = shallow(React.createElement(HeliumSpinner, { screenReaderText: "Loading...I love pizza" }));
        expect(wrap).toMatchSnapshot();
    });
    it("modifies its size when an acceptable value is passed to the size prop", function () {
        wrap = shallow(React.createElement(HeliumSpinner, { size: "small" }));
        expect(wrap).toMatchSnapshot();
    });
});
//# sourceMappingURL=Spinner.test.js.map