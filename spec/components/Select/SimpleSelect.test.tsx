import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SimpleSelect } from '../../../ts/components/Select/SimpleSelect';
import { SelectMenuButton } from '../../../ts/components/Select/SelectMenuButton';
import userEvent from '@testing-library/user-event';

const setup = (selectProps?) =>
  render(
    <SimpleSelect {...selectProps}>
      <SelectMenuButton label="Item 1" value="item_1" />
    </SimpleSelect>,
  );

describe(`<SimpleSelect />`, () => {
  describe(`default`, () => {
    it(`should render SelectInput`, () => {
      setup();
      expect(screen.getByRole(`button`, { name: `Select...` })).toBeInTheDocument();
    });
  });

  describe(`when the SelectInput is clicked`, () => {
    it(`should open the menu and render the children`, async () => {
      setup();

      await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
      expect(screen.getByRole(`menu`)).toBeInTheDocument();
      expect(screen.getByRole(`menuitem`, { name: `Item 1` })).toBeInTheDocument();
    });
  });

  describe(`props`, () => {
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

    describe(`when the "id" prop is passed`, () => {
      it(`should render the button with the id`, () => {
        setup({ id: `test-id` });
        expect(screen.getByRole(`button`, { name: `Select...` })).toHaveAttribute(`id`, `test-id`);
      });
    });

    describe(`when the "options" prop is passed`, () => {
      it(`should render the options as menu items`, async () => {
        render(
          <SimpleSelect
            options={[
              { label: `Item 1`, value: `Item1` },
              { label: `Item 2`, value: `Item2` },
            ]}
          />,
        );
        await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
        expect(screen.getByRole(`menuitem`, { name: `Item 1` })).toBeInTheDocument();
        expect(screen.getByRole(`menuitem`, { name: `Item 2` })).toBeInTheDocument();
      });

      describe(`when the "onSelect" prop is passed`, () => {
        it(`should call the onSelect function when the menu item is clicked`, async () => {
          const onSelect = jest.fn();
          render(
            <SimpleSelect
              onSelect={onSelect}
              options={[
                { label: `Item 1`, value: `Item1` },
                { label: `Item 2`, value: `Item2` },
              ]}
            />,
          );
          await userEvent.click(screen.getByRole(`button`, { name: `Select...` }));
          await userEvent.click(screen.getByRole(`menuitem`, { name: `Item 1` }));
          expect(onSelect).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe(`when the "placeholder" prop is passed`, () => {
      it(`should render the placeholder text`, () => {
        setup({ placeholder: `Test placeholder` });
        expect(screen.getByRole(`button`, { name: `Test placeholder` })).toBeInTheDocument();
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
