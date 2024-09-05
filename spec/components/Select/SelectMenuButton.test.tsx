import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from '../../../ts/components/Select/Select';
import { SelectMenuButton } from '../../../ts/components/Select/SelectMenuButton';
import userEvent from '@testing-library/user-event';

const setup = (selectProps?, props?) =>
  render(
    <Select
      renderOpener={({ ref, selectedLabel, ...props }) => (
        <button ref={ref} {...props}>
          {selectedLabel || `Click me`}
        </button>
      )}
      {...selectProps}
    >
      <SelectMenuButton label="Item 1" value="item_1" onClick={jest.fn()} {...props} />
    </Select>,
  );

describe(`<SelectMenuButton />`, () => {
  describe(`default`, () => {
    it(`should render the label`, async () => {
      setup();

      await userEvent.click(screen.getByText(`Click me`));
      expect(screen.getByText(`Item 1`)).toBeInTheDocument();
    });
  });

  describe(`when the button is selected`, () => {
    it(`should have a checkmark`, async () => {
      setup({ initialSelectedValue: `item_1` });

      await userEvent.click(screen.getByText(`Click me`));
      expect(screen.getByRole(`menuitem`).childNodes[0]).toHaveClass(`h-icon-task`);
    });
  });

  describe(`when the button is hovered`, () => {
    it(`should have the active styling`, async () => {
      setup();

      await userEvent.click(screen.getByText(`Click me`));
      await userEvent.hover(screen.getByRole(`menuitem`));
      expect(screen.getByRole(`menuitem`).parentElement).toHaveClass(`h-dropdown__menu__item--active`);
    });
  });

  describe(`when the button is clicked`, () => {
    it(`should call the onClick function when the button is clicked`, async () => {
      const onClick = jest.fn();
      setup({}, { onClick });

      await userEvent.click(screen.getByText(`Click me`));
      await userEvent.click(screen.getByText(`Item 1`));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe(`props`, () => {
    describe(`when the "buttonClassName" prop is passed`, () => {
      it(`should render the button with the class`, async () => {
        setup({}, { buttonClassName: `test-class` });

        await userEvent.click(screen.getByText(`Click me`));
        expect(screen.getByRole(`menuitem`)).toHaveClass(`test-class`);
      });
    });

    describe(`when children are passed`, () => {
      it(`should render the children`, async () => {
        render(
          <Select
            renderOpener={({ ref, selectedLabel, ...props }) => (
              <button ref={ref} {...props}>
                {selectedLabel || `Click me`}
              </button>
            )}
          >
            <SelectMenuButton label="Item 1" value="item_1" onClick={jest.fn()}>
              <span>Children</span>
            </SelectMenuButton>
          </Select>,
        );

        await userEvent.click(screen.getByText(`Click me`));
        expect(screen.getByText(`Children`)).toBeInTheDocument();
      });
    });

    describe(`when the "className" prop is passed`, () => {
      it(`should render the button with the class`, async () => {
        setup({}, { className: `test-class` });

        await userEvent.click(screen.getByText(`Click me`));
        expect(screen.getByRole(`menuitem`).parentElement).toHaveClass(`test-class`);
      });
    });

    describe(`when the "iconName" prop is passed`, () => {
      it(`should render the icon`, async () => {
        setup({}, { iconName: `user` });

        await userEvent.click(screen.getByText(`Click me`));
        expect(screen.getByRole(`menuitem`).childNodes[1]).toHaveClass(`h-icon-user`);
      });
    });

    describe(`when the "variant" prop is set to "negative"`, () => {
      it(`should be have the negative styling`, async () => {
        setup({}, { variant: `negative` });

        await userEvent.click(screen.getByText(`Click me`));
        await userEvent.hover(screen.getByRole(`menuitem`));
        expect(screen.getByRole(`menuitem`).parentElement).toHaveClass(`h-dropdown__menu__item--negative`);
      });
    });
  });
});
