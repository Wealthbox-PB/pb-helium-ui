import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Switch } from '../ts/components/Switch';

describe(`<Switch />`, () => {
  describe(`default UI`, () => {
    it(`should have a hidden input with a value attribute set to "false"`, () => {
      render(<Switch />);

      expect(screen.getByTestId(`h-switch-hidden-input`)).not.toBeVisible();
      expect(screen.getByTestId(`h-switch-hidden-input`)).toHaveValue(`false`);
    });

    it(`should have a hidden input without a name attribute`, () => {
      render(<Switch />);

      expect(screen.getByTestId(`h-switch-hidden-input`)).not.toBeVisible();
      expect(screen.getByTestId(`h-switch-hidden-input`)).not.toHaveAttribute(`name`);
    });

    it(`should have an accessible label set to "Off"`, () => {
      render(<Switch />);

      expect(screen.getByRole(`switch`, { name: `Off` })).toBeInTheDocument();
    });

    it(`should not be checked/on`, () => {
      render(<Switch />);

      expect(screen.getByRole(`switch`, { name: `Off` })).not.toBeChecked();
    });

    it(`should not have "on" or "primary" variant styling`, () => {
      render(<Switch />);

      expect(screen.getByRole(`switch`, { name: `Off` })).not.toHaveClass(`h-switch--on h-switch--primary`);
    });

    it(`should not be disabled`, () => {
      render(<Switch />);

      expect(screen.getByRole(`switch`, { name: `Off` })).toBeEnabled();
    });
  });

  describe(`props`, () => {
    describe(`when the name prop is set`, () => {
      it(`should have a hidden input with a name attribute set to the passed value`, () => {
        render(<Switch name="name" />);

        expect(screen.getByTestId(`h-switch-hidden-input`)).not.toBeVisible();
        expect(screen.getByTestId(`h-switch-hidden-input`)).toHaveAttribute(`name`, `name`);
      });

      describe(`when the switch is rendered inside a form`, () => {
        it(`should have a form value for name set to "false"`, () => {
          render(
            <form data-testid="h-switch-form">
              <Switch name="name" />
              <button type="submit">Submit</button>
            </form>
          );

          expect(screen.getByTestId(`h-switch-form`)).toHaveFormValues({ name: `false` });
        });
      });
    });

    describe(`when the ariaLabel prop is set`, () => {
      it(`should have an accessible label set to the passed value`, () => {
        render(<Switch ariaLabel="Test" />);

        expect(screen.getByRole(`switch`, { name: `Test` })).toBeInTheDocument();
      });
    });

    describe(`when the disabled prop is set to "true"`, () => {
      it(`should be disabled`, () => {
        render(<Switch disabled={true} />);

        expect(screen.getByRole(`switch`, { name: `Off` })).toBeDisabled();
      });
    });

    describe(`when the defaultValue prop is set to true`, () => {
      it(`should have a hidden input with a value attribute set to "true"`, () => {
        render(<Switch defaultValue={true} />);

        expect(screen.getByTestId(`h-switch-hidden-input`)).not.toBeVisible();
        expect(screen.getByTestId(`h-switch-hidden-input`)).toHaveValue(`true`);
      });

      it(`should have an accessible label set to "On"`, () => {
        render(<Switch defaultValue={true} />);

        expect(screen.getByRole(`switch`, { name: `On` })).toBeInTheDocument();
      });

      it(`should be checked/on`, () => {
        render(<Switch defaultValue={true} />);

        expect(screen.getByRole(`switch`, { name: `On` })).toBeChecked();
      });

      it(`should have "on" and "primary" variant styling`, () => {
        render(<Switch defaultValue={true} />);

        expect(screen.getByRole(`switch`, { name: `On` })).toHaveClass(`h-switch--on h-switch--primary`);
      });

      describe(`when the variant prop is set to "positive"`, () => {
        it(`should have "on" and "positive" variant styling`, () => {
          render(<Switch defaultValue={true} variant="positive" />);

          expect(screen.getByRole(`switch`, { name: `On` })).toHaveClass(`h-switch--on h-switch--positive`);
        });
      });

      describe(`when the onChange prop is set`, () => {
        it(`should call the passed function when clicked`, async () => {
          const onChange = jest.fn();
          render(<Switch defaultValue={true} onChange={onChange} />);

          userEvent.click(screen.getByRole(`switch`, { name: `On` }));

          await waitFor(() => {
            expect(onChange).toHaveBeenCalledTimes(1);
          });
        });
      });
    });
  });

  describe(`DOM interactions`, () => {
    it(`should change state when clicked`, async () => {
      render(<Switch />);

      expect(screen.getByRole(`switch`, { name: `Off` })).not.toBeChecked();

      userEvent.click(screen.getByRole(`switch`, { name: `Off` }));

      await waitFor(() => {
        expect(screen.queryByRole(`switch`, { name: `Off` })).not.toBeInTheDocument();
      });

      expect(screen.getByRole(`switch`, { name: `On` })).toBeChecked();
    });

    it(`should change state when the space key is pressed`, async () => {
      render(<Switch />);

      const switchEl = screen.getByRole(`switch`);

      expect(screen.getByRole(`switch`, { name: `Off` })).not.toBeChecked();

      switchEl.focus();
      userEvent.keyboard(` `);

      await waitFor(() => {
        expect(screen.queryByRole(`switch`, { name: `Off` })).not.toBeInTheDocument();
      });

      expect(screen.getByRole(`switch`, { name: `On` })).toBeChecked();
    });
  });
});
