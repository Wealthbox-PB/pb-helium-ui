import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SelectInput } from '../../ts/components/SelectInput';

const setup = (props?) => {
  render(<SelectInput {...props} />);
};

describe(`<SelectInput />`, () => {
  describe(`default UI`, () => {
    it(`should not have a label`, () => {
      setup();
      expect(screen.queryByTestId(`h-label`)).not.toBeInTheDocument();
    });

    it(`should have a button with a default placeholder`, () => {
      setup();
      expect(screen.getByRole(`button`, { name: `Select...` })).toBeInTheDocument();
    });

    it(`should have a button with a default type`, () => {
      setup();
      expect(screen.getByRole(`button`, { name: `Select...` })).toHaveAttribute(`type`, `button`);
    });
  });

  describe(`props`, () => {
    describe(`className`, () => {
      it(`should have a button custom className`, () => {
        setup({ className: `test-class` });
        expect(screen.getByRole(`button`, { name: `Select...` })).toHaveClass(`test-class`);
      });
    });

    describe(`id`, () => {
      describe(`when it has a label`, () => {
        it(`should have a label with the htmlFor attribute equal to the id and a button with this id`, () => {
          const id = `test-id`;
          setup({ id, label: `Example Label` });
          expect(screen.getByTestId(`h-label`)).toHaveAttribute(`for`, id);
          expect(screen.getByRole(`button`, { name: `Example Label` })).toHaveAttribute(`id`, id);
        });
      });

      it(`should have a button with a custom id`, () => {
        setup({ id: `test-id` });
        expect(screen.getByRole(`button`, { name: `Select...` })).toHaveAttribute(`id`, `test-id`);
      });
    });

    describe(`label`, () => {
      it(`should have a label`, () => {
        setup({ label: `Example Label` });
        expect(screen.getByLabelText(`Example Label`)).toBeInTheDocument();
      });
    });

    describe(`labelClassName`, () => {
      it(`should have a label with a CSS className`, () => {
        setup({ label: `Example Label`, labelClassName: `test-label-class` });
        expect(screen.getByText(`Example Label`)).toHaveClass(`test-label-class`);
      });
    });

    describe(`placeholder`, () => {
      describe(`when it is a custom string`, () => {
        it(`should have a custom placeholder`, () => {
          setup({ placeholder: `Choose an option` });
          expect(screen.queryByRole(`button`, { name: `Select...` })).not.toBeInTheDocument();
          expect(screen.getByRole(`button`, { name: `Choose an option` })).toBeInTheDocument();
        });
      });

      describe(`when it is false`, () => {
        it(`should not have a placeholder`, () => {
          setup({ placeholder: false });
          expect(screen.queryByRole(`button`, { name: `Select...` })).not.toBeInTheDocument();
        });
      });

      describe(`when it is null`, () => {
        it(`should not have a placeholder`, () => {
          setup({ placeholder: null });
          expect(screen.queryByRole(`button`, { name: `Select...` })).not.toBeInTheDocument();
        });
      });
    });

    describe(`type`, () => {
      it(`should have a type of submit`, () => {
        setup({ type: `submit` });
        expect(screen.getByRole(`button`, { name: `Select...` })).toHaveAttribute(`type`, `submit`);
      });

      it(`should have a type of reset`, () => {
        setup({ type: `reset` });
        expect(screen.getByRole(`button`, { name: `Select...` })).toHaveAttribute(`type`, `reset`);
      });
    });

    describe(`value`, () => {
      it(`should have a value`, () => {
        setup({ value: `Option 1` });
        expect(screen.getByRole(`button`, { name: `Option 1` })).toBeInTheDocument();
      });

      it(`should not have a placeholder`, () => {
        setup({ value: `Option 1` });
        expect(screen.queryByRole(`button`, { name: `Select...` })).not.toBeInTheDocument();
      });
    });

    describe(`...props`, () => {
      it(`should have an attribute for any attributes passed that do not exist in the component
          props`, () => {
        setup({ 'aria-label': `Select...`, value: `Option 1` });
        expect(screen.getByRole(`button`)).toHaveAttribute(`aria-label`, `Select...`);
      });
    });
  });
});
