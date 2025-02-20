import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MultiSelect } from '../../../ts/components/Select/MultiSelect';
import { SelectInput } from '../../../ts/components/SelectInput';
import userEvent from '@testing-library/user-event';

const data = [
  { label: `Item 1`, value: `Item1` },
  { label: `Item 2`, value: `Item2` },
];
const setup = (selectProps?) =>
  render(
    <MultiSelect
      renderOpener={({ ref, selectedLabels, ...openerProps }) => (
        <SelectInput
          ref={ref}
          value={selectedLabels}
          multiSelect={true}
          data-testid="opener"
          {...openerProps}
        />
      )}
      initialOptions={data}
      {...selectProps}
    />,
  );

describe(`<MultiSelect />`, () => {
  describe(`default`, () => {
    it(`should render SelectInput`, () => {
      setup();

      expect(screen.getByRole(`button`, { name: `Select...` })).toBeInTheDocument();
    });
  });

  describe(`when the SelectInput is clicked`, () => {
    it(`should open the menu and render the menu items`, async () => {
      setup();

      await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
      expect(screen.getByRole(`menu`)).toBeInTheDocument();
      expect(screen.getByRole(`menuitem`, { name: `Item 1` })).toBeInTheDocument();
      expect(screen.getByRole(`menuitem`, { name: `Item 2` })).toBeInTheDocument();
    });
  });

  describe(`when the menu items are clicked`, () => {
    it(`should be checked and the labels should be added to the opener button`, async () => {
      setup();

      await userEvent.click(screen.getByTestId(`opener`));
      expect(screen.getByRole(`menu`)).toBeInTheDocument();
      await userEvent.click(screen.getByRole(`menuitem`, { name: `Item 1` }));
      expect(screen.getByTestId(`opener`)).toHaveTextContent(`Item 1`);
      expect(within(screen.getByRole(`menuitem`, { name: `Item 1` })).getByRole(`checkbox`)).toBeChecked();
      await userEvent.click(screen.getByRole(`menuitem`, { name: `Item 2` }));
      expect(screen.getByTestId(`opener`)).toHaveTextContent(`Item 1Item 2`);
      expect(within(screen.getByRole(`menuitem`, { name: `Item 1` })).getByRole(`checkbox`)).toBeChecked();
    });
  });

  describe(`props`, () => {
    describe(`when the "height" prop is passed`, () => {
      it(`should set the height`, async () => {
        setup({ height: `200px` });

        await userEvent.click(screen.getByText(`Select...`));
        expect(screen.getByRole(`menu`)).toHaveStyle(`height: 200px`);
      });
    });

    describe(`when the "initialSelectedValue" prop is passed`, () => {
      it(`should render the correct value in the button and show the  option as selected`, async () => {
        setup({ initialSelectedValue: [{ label: `Item 1`, value: `Item1` }] });

        expect(screen.getByRole(`button`)).toHaveTextContent(`Item 1`);
        await userEvent.click(screen.getByRole(`button`));
        expect(within(screen.getByRole(`menuitem`, { name: `Item 1` })).getByRole(`checkbox`)).toBeChecked();
      });
    });

    describe(`when the "minHeight" prop is passed`, () => {
      it(`should set the minHeight`, async () => {
        setup({ minHeight: `200` });

        await userEvent.click(screen.getByText(`Select...`));
        // The component subtracts 4 from the minHeight to account for the border
        expect(screen.getByRole(`menu`)).toHaveStyle(`min-height: 196px`);
      });
    });

    describe(`when the "name" prop is passed`, () => {
      it(`should render a hidden input with the name and pass selected values to the input`, async () => {
        setup({ name: `test-name` });

        await userEvent.click(screen.getByTestId(`opener`));

        await userEvent.click(screen.getByRole(`menuitem`, { name: `Item 1` }));
        expect(screen.getByTestId(`multi-select-input`)).toHaveValue(`[{"label":"Item 1","value":"Item1"}]`);
      });
    });

    describe(`when the "onMultiSelect" prop is passed`, () => {
      it(`should call the function when the multi-selected value changes`, async () => {
        const onMultiSelect = jest.fn();
        setup({ onMultiSelect });

        await userEvent.click(screen.getByTestId(`opener`));
        await userEvent.click(screen.getByRole(`menuitem`, { name: `Item 1` }));
        expect(onMultiSelect).toHaveBeenCalledWith([{ label: `Item 1`, value: `Item1` }]);
      });
    });

    describe(`when the "width" prop is passed`, () => {
      it(`should set the width`, async () => {
        setup({ width: `200` });

        await userEvent.click(screen.getByText(`Select...`));
        expect(screen.getByRole(`menu`)).toHaveStyle(`width: 200px`);
      });
    });

    describe(`when the "searchable" prop is set to "true"`, () => {
      describe(`when the user filters the menu`, () => {
        it(`should render the filtered menu items`, async () => {
          setup({ searchable: true });

          await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
          await userEvent.type(screen.getByRole(`textbox`), `Item 1`);
          expect(screen.getByRole(`textbox`)).toHaveValue(`Item 1`);
          expect(screen.queryByRole(`menuitem`, { name: `Item 2` })).not.toBeInTheDocument();
          expect(screen.getByRole(`menuitem`, { name: `Item 1` })).toBeInTheDocument();
        });
      });

      describe(`when the "allowCustomValue" prop is set to "true"`, () => {
        it(`should render the custom value when the user filters the menu`, async () => {
          setup({ searchable: true, allowCustomValue: true });

          await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
          await userEvent.type(screen.getByRole(`textbox`), `Test`);
          expect(screen.getByRole(`menuitem`, { name: `Specify: Test` })).toBeInTheDocument();
        });

        describe(`when the user searches for an option that exists`, () => {
          it(`should not render a custom value for that search query`, async () => {
            setup({ searchable: true, allowCustomValue: true });

            await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
            await userEvent.type(screen.getByRole(`textbox`), `Item 1`);
            expect(screen.queryByRole(`menuitem`, { name: `Specify: Item 1` })).not.toBeInTheDocument();
          });
        });
      });
    });
  });
});
