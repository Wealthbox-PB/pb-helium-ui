import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconDropdown } from '../../../ts/components/Dropdown/IconDropdown';

const setup = () =>
  render(
    <IconDropdown ariaLabel="menu" className="me-2" iconName="add" iconClassName="h-color-text-blue-500">
      <li>Item</li>
    </IconDropdown>,
  );

describe(`<IconDropdown />`, () => {
  it(`matches the snapshot`, () => {
    const renderResult = setup();
    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
