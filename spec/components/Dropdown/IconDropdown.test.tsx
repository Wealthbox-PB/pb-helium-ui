import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconDropdown } from '../../../ts/components/Dropdown/IconDropdown';

const setup = () =>
  render(
    <IconDropdown buttonAriaLabel="menu" buttonClass="me-2" iconName="add" iconClass="p-4">
      <li>Item</li>
    </IconDropdown>
  );

describe(`<IconDropdown />`, () => {
  it(`matches the snapshot`, () => {
    const renderResult = setup();
    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
