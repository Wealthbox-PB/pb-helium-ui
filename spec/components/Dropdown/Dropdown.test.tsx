import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from '../../../ts/components/Dropdown/Dropdown';
import userEvent from '@testing-library/user-event';

const setup = () =>
  render(
    <Dropdown
      renderOpener={({ ref, ...props }) => (
        <button ref={ref} {...props}>
          button
        </button>
      )}
    >
      <li>Item</li>
    </Dropdown>,
  );

describe(`<Dropdown />`, () => {
  describe(`default`, () => {
    it(`should render the renderOpener`, () => {
      setup();
      expect(screen.getByRole(`button`)).toBeInTheDocument();
    });
  });

  describe(`when the renderOpener is clicked`, () => {
    it(`should render and open the menu`, async () => {
      setup();

      userEvent.click(screen.getByText(`button`));
      await waitFor(async () => {
        screen.getByRole(`menu`);
      });
      expect(screen.getByRole(`menu`)).toBeInTheDocument();
    });

    it(`should render the children`, async () => {
      setup();

      userEvent.click(screen.getByText(`button`));
      await waitFor(async () => {
        screen.getByRole(`menu`);
      });
      expect(screen.getByRole(`menu`)).toBeInTheDocument();
      expect(screen.getByText(`Item`)).toBeInTheDocument();
    });
  });
});
