import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DropdownMenuSeparator } from '../../../ts/components/Dropdown/DropdownMenuSeparator';

describe(`<DropdownMenuSeparator />`, () => {
  describe(`default`, () => {
    it(`should render the element`, () => {
      render(<DropdownMenuSeparator />);
      expect(document.querySelector(`li`)).toHaveClass(`h-dropdown__menu-separator`);
    });
  });
});
