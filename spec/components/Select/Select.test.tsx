import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from '../../../ts/components/Select/Select';
import { SelectMenuButton } from '../../../ts/components/Select/SelectMenuButton';

const setup = (props?) =>
  render(
    <Select
      renderOpener={({ ref, selectedLabel, ...props }) => (
        <button ref={ref} {...props}>
          {selectedLabel || `Click me`}
        </button>
      )}
      {...props}
    >
      <SelectMenuButton label="Item 1" onClick={jest.fn()} />
    </Select>,
  );

describe(`<Select />`, () => {
  describe(`default`, () => {
    it(`should render the renderOpener`, () => {
      setup();
      expect(screen.getByRole(`button`)).toHaveTextContent(`Click me`);
    });

    describe(`when the renderOpener is clicked`, () => {
      it(`should render and open the menu`, async () => {
        setup();

        fireEvent.click(screen.getByText(`Click me`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        expect(screen.getByRole(`menu`)).toBeInTheDocument();
      });

      it(`should render the children`, async () => {
        setup();

        fireEvent.click(screen.getByText(`Click me`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        expect(screen.getByRole(`menu`)).toBeInTheDocument();
      });
    });
  });

  describe(`props`, () => {
    describe(`when the "closeOnSelect" prop is set to false`, () => {
      it(`should not close the menu when a menu item is selected`, async () => {
        setup({ closeOnSelect: false });

        fireEvent.click(screen.getByText(`Click me`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });

        fireEvent.click(screen.getByText(`Item 1`));
        expect(screen.getByRole(`menu`)).toBeInTheDocument();
      });
    });

    describe(`when the "height" prop is passed`, () => {
      it(`should set the height`, async () => {
        setup({ height: `200px` });

        fireEvent.click(screen.getByText(`Click me`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        expect(screen.getByRole(`menu`)).toHaveStyle(`height: 200px`);
      });
    });

    describe(`when the "initialSelectedValue" prop is passed`, () => {
      it(`should render the initialSelectedValue`, () => {
        setup({ initialSelectedValue: `Item 1` });
        expect(screen.getByRole(`button`)).toHaveTextContent(`Item 1`);
      });
    });

    describe(`when the "minHeight" prop is passed`, () => {
      it(`should set the minHeight`, async () => {
        setup({ minHeight: `200` });

        fireEvent.click(screen.getByText(`Click me`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        // The component subtracts 4 from the minHeight to account for the border
        expect(screen.getByRole(`menu`)).toHaveStyle(`min-height: 196px`);
      });
    });

    describe(`when the "width" prop is passed`, () => {
      it(`should set the width`, async () => {
        setup({ width: `200` });

        fireEvent.click(screen.getByText(`Click me`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        expect(screen.getByRole(`menu`)).toHaveStyle(`width: 200px`);
      });
    });
  });
});
