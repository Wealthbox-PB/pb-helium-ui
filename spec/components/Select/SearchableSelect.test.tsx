import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchableSelect } from '../../../ts/components/Select/SearchableSelect';
import userEvent from '@testing-library/user-event';

const data = [
  { label: `Item 1`, value: `Item1` },
  { label: `Item 2`, value: `Item2` },
];
const setup = (selectProps?) => render(<SearchableSelect initialOptions={data} {...selectProps} />);

describe(`<SearchableSelect />`, () => {
  describe(`default`, () => {
    it(`should render SelectInput`, async () => {
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

  describe(`when the user filters the menu`, () => {
    it(`should render the filtered menu items`, async () => {
      setup();

      await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
      await userEvent.type(screen.getByRole(`textbox`), `Item 1`);
      expect(screen.getByRole(`textbox`)).toHaveValue(`Item 1`);
      expect(screen.queryByRole(`menuitem`, { name: `Item 2` })).not.toBeInTheDocument();
      expect(screen.getByRole(`menuitem`, { name: `Item 1` })).toBeInTheDocument();
    });
  });

  describe(`props`, () => {
    describe(`when the "allowCustomValue" prop is set to "true"`, () => {
      it(`should render the custom value when the user filters the menu`, async () => {
        setup({ allowCustomValue: true });

        await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
        await userEvent.type(screen.getByRole(`textbox`), `Test`);
        expect(screen.getByRole(`menuitem`, { name: `Specify: Test` })).toBeInTheDocument();
      });

      describe(`when the user searches for an option that exists`, () => {
        it(`should not render a custom value for that search query`, async () => {
          setup({ allowCustomValue: true });

          await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
          await userEvent.type(screen.getByRole(`textbox`), `Item 1`);
          expect(screen.queryByRole(`menuitem`, { name: `Specify: Item 1` })).not.toBeInTheDocument();
        });
      });
    });

    describe(`when the "ariaLabel" prop is passed`, () => {
      it(`should render the button with the aria-label`, () => {
        setup({ ariaLabel: `test-aria-label` });

        expect(screen.getByRole(`button`)).toHaveAttribute(`aria-label`, `test-aria-label`);
      });
    });

    describe(`when the "className" prop is passed`, () => {
      it(`should render the button with the class`, () => {
        setup({ className: `test-class` });

        expect(screen.getByRole(`button`, { name: `Select...` })).toHaveClass(`test-class`);
      });
    });

    describe(`when the "initialSelectedValue" prop is passed`, () => {
      it(`should set the correct menu as selected`, async () => {
        setup({ initialSelectedValue: `Item1` });

        expect(screen.getByRole(`button`)).toHaveTextContent(`Item 1`);
        await userEvent.click(screen.getByRole(`button`));
        expect(
          within(screen.getByRole(`menuitem`, { name: `Item 1` })).getByTestId(
            `h-dropdown__menu__item__cta-selected`,
          ),
        ).toHaveClass(`h-icon-task`);
      });
    });

    describe(`when the "onClick" prop is passed`, () => {
      it(`should call the onClick function when the menu item is clicked`, async () => {
        const onClick = jest.fn();
        setup({ onClick });

        await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
        await userEvent.click(screen.getByRole(`menuitem`, { name: `Item 1` }));
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });

    describe(`when the "onKeyDown" prop is passed`, () => {
      it(`should call the onKeyDown function when the menu item is clicked`, async () => {
        const onKeyDown = jest.fn();
        setup({ onKeyDown });

        await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
        await userEvent.keyboard(`{arrowdown}`);
        await userEvent.keyboard(`{enter}`);
        expect(onKeyDown).toHaveBeenCalledTimes(1);
      });
    });

    describe(`when the "onSelect" prop is passed`, () => {
      it(`should call the onSelect function when the menu item is clicked`, async () => {
        const onSelect = jest.fn();
        setup({ onSelect });

        await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
        await userEvent.click(screen.getByRole(`menuitem`, { name: `Item 1` }));
        expect(onSelect).toHaveBeenCalledTimes(1);
      });

      it(`should call the onSelect function when the menu item has virtual focus and the user presses the
        "Enter" key`, async () => {
        const onSelect = jest.fn();
        setup({ onSelect });

        await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
        await userEvent.keyboard(`{tab}`);
        await userEvent.keyboard(`{enter}`);
        expect(onSelect).toHaveBeenCalledTimes(1);
      });
    });

    describe(`when the "placeholder" prop is passed`, () => {
      it(`should render the placeholder text`, () => {
        setup({ placeholder: `Test placeholder` });

        expect(screen.getByRole(`button`, { name: `Test placeholder` })).toBeInTheDocument();
      });
    });

    describe(`when the "selectId" prop is passed`, () => {
      it(`should render the button with the id`, () => {
        setup({ selectId: `test-id` });

        expect(screen.getByRole(`button`, { name: `Select...` })).toHaveAttribute(`id`, `test-id`);
      });
    });

    describe(`when the "selectLabel" and "labelClassName" props are passed`, () => {
      it(`should render the label with the correct class`, () => {
        setup({ selectLabel: `Test`, labelClassName: `test-class` });

        expect(screen.getByText(`Test`)).toHaveClass(`test-class`);
      });
    });
  });
});
