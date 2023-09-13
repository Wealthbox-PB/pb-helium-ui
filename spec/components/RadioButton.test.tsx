import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { RadioButton } from '../../ts/components/RadioButton';


describe(`<RadioButton />`, () => {
  describe(`Default UI`, () => {
    describe(`The "name" prop`, () => {
      it(`should be set on the radio input.`, () => {
        render(<RadioButton name="radio-group-1" />);

        expect(screen.getByRole(`radio`)).toHaveAttribute(`name`, `radio-group-1`);
      });
    });

    describe(`The "checked" prop`, () => {
      it(`should not be set`, () => {
        render(<RadioButton name="radio-group-1" />);

        expect(screen.getByRole(`radio`)).not.toBeChecked();
      });
    });

    describe(`The "disabled" prop`, () => {
      it(`should not be set`, () => {
        render(<RadioButton name="radio-group-1" />);

        expect(screen.getByRole(`radio`)).toBeEnabled();
      });
    });

    describe(`The "variant" prop`, () => {
      it(`should not set the custom 'pill' styling on the component.`, () => {
        render(<RadioButton name="radio-group-1" />);

        expect(screen.getByTestId(`h-radio`)).not.toHaveClass(`h-radio--pill-button`);
      });
    });
  });

  describe(`Props`, () => {
    describe(`The "autofocus" prop`, () => {
      it(`should autofocus the radio input`, () => {
        render(<RadioButton autofocus={true} name="radio-group-1" label="label" />);

        expect(document.activeElement).toHaveAttribute(`name`, `radio-group-1`);
      });
    });

    describe(`The "checked" prop`, () => {
      it(`should set the "checked" attribute of the radio input`, () => {
        const onChange = jest.fn();
        render(<RadioButton checked={true} name="radio-group-1" onChange={onChange} label="label" />);

        expect(screen.getByRole(`radio`)).toBeChecked();
      });
    });

    describe(`The "disabled" prop`, () => {
      it(`should set the "disabled" attribute of the radio input`, () => {
        render(<RadioButton disabled={true} name="radio-group-1" label="label" />);

        expect(screen.getByRole(`radio`)).toBeDisabled();
      });
    });

    describe(`The "id" prop`, () => {
      it(`should set the "id" attribute of the radio input`, () => {
        render(<RadioButton id="test" name="radio-group-1" label="label" />);

        expect(screen.getByRole(`radio`)).toHaveAttribute(`id`, `test`);
      });
    });

    describe(`The "label" prop`, () => {
      it(`should display a label beside the radio button`, () => {
        render(<RadioButton name="radio-group-1" label="label" />);

        expect(screen.getByTestId(`h-label`)).toBeInTheDocument();
      });
    });

    describe(`The "name" prop`, () => {
      it(`should set the "name" attribute of the radio input`, () => {
        render(<RadioButton name="radio-group-1" label="label" />);

        expect(screen.getByRole(`radio`)).toHaveAttribute(`name`, `radio-group-1`);
      });
    });

    describe(`The "size" prop`, () => {
      it(`should set the "name" attribute of the radio input`, () => {
        render(<RadioButton name="radio-group-1" size="small" label="label" />);

        expect(screen.getByTestId(`h-radio`)).toHaveClass(`h-radio--sm`);
      });
    });

    describe(`The "variant" prop`, () => {
      it(`should set custom styling on the component`, () => {
        render(<RadioButton variant="pill" name="radio-group-1" />);

        expect(screen.getByTestId(`h-radio`)).toHaveClass(`h-radio--pill-button`);
      });
    });

  });

  describe(`Interactions`, () => {
    describe(`The "onChange" prop`, () => {
      it(`should call the passed function when the radio value changes.`, async () => {
        const onChange = jest.fn();
        render(<RadioButton name="radio-group-1" onChange={onChange} />);

        userEvent.click(screen.getByRole(`radio`));

        await waitFor(() => {
          expect(onChange).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe(`The "onClick" prop`, () => {
      it(`should call the passed function when clicked.`, async () => {
        const onClick = jest.fn();
        render(<RadioButton name="radio-group-1" onClick={onClick} />);

        userEvent.click(screen.getByRole(`radio`));

        await waitFor(() => {
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe(`The "checked" prop`, () => {
      it(`should update the checked state of the radio button`, async () => {
        let checked = false;
        const onChange = jest.fn(() => {
          checked = !checked;
        });
        const { rerender } = render(<RadioButton name="radio-group-1" checked={checked} onChange={onChange} />);

        expect(screen.getByRole(`radio`)).not.toBeChecked();

        userEvent.click(screen.getByRole(`radio`));

        await waitFor(() => {
          expect(onChange).toHaveBeenCalledTimes(1);
        });

        rerender(<RadioButton name="radio-group-1" checked={checked} onChange={onChange} />);

        expect(screen.getByRole(`radio`)).toBeChecked();
      });
    });

    describe(`The "label" prop`, () => {
      it(`should select the radio input when clicked`, async () => {
        let checked = false;
        const onChange = jest.fn(() => {
          checked = !checked;
        });
        const { rerender } = render(<RadioButton name="radio-group-1" checked={checked} onChange={onChange} label="label" />);

        expect(screen.getByRole(`radio`)).not.toBeChecked();

        userEvent.click(screen.getByTestId(`h-label`));

        await waitFor(() => {
          expect(onChange).toHaveBeenCalledTimes(1);
        });

        rerender(<RadioButton name="radio-group-1" checked={checked} onChange={onChange} />);

        expect(screen.getByRole(`radio`)).toBeChecked();
      });
    });
  });
});
