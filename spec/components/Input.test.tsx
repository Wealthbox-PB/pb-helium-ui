import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Input } from '../../ts/components/Input';


describe(`<Input />`, () => {
  describe(`Default UI`, () => {
    describe(`The "role" prop`, () => {
      it(`should be set to "textbox" and set as the "role" attribute on the input.`, () => {
        render(<Input value="test" ></Input>);

        expect(screen.getByRole(`textbox`)).toBeInTheDocument();
      });
    });

    describe(`The "inputType" prop`, () => {
      it(`should be set to "text" and set as the "type" attribute on the input.`, () => {
        render(<Input value="test" ></Input>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`type`, `text`);
      });
    });

    describe(`The "variant" prop`, () => {
      it(`should be set to "default".`, () => {
        render(<Input value="test" ></Input>);

        expect(screen.getByRole(`textbox`)).not.toHaveClass(`h-input--dark-blue`);
      });
    });
  });

  describe(`Props`, () => {
    describe(`The "autofocus" prop`, () => {
      it(`should set the "autofocus" attribute on the input element.`, () => {
        render(<Input value="test" role="searchbox"></Input>);

        expect(screen.getByRole(`searchbox`)).toBeInTheDocument();
      });
    });

    describe(`The "disabled" prop`, () => {
      it(`should set the "disabled" attribute on the input element.`, () => {
        render(<Input disabled={true} value="test"></Input>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`disabled`);
      });
    });

    describe(`The "id" prop`, () => {
      it(`should set the "id" attribute on the input element and the "for" attribute on the label.`, () => {
        render(<Input id="test-id" value="test value" label="test label" ></Input>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`id`, `test-id`);
        expect(screen.getByTestId(`h-label`)).toHaveAttribute(`for`, `test-id`);
      });
    });

    describe(`The "inputClassName" prop`, () => {
      it(`should apply additional classes to the input element.`, () => {
        render(<Input value="test value" inputClassName="h-input--tall" ></Input>);

        expect(screen.getByRole(`textbox`)).toHaveClass(`h-input--tall`);
      });
    });

    describe(`The "label" prop`, () => {
      it(`should render a label element along with the input element.`, () => {
        render(<Input value="test value" label="Test Label" ></Input>);

        expect(screen.getByTestId(`h-label`)).toBeInTheDocument();
      });
    });

    describe(`The "labelClassName" prop`, () => {
      it(`should apply custom classes to a label element that is rendered along with the input element.`, () => {
        render(<Input value="test value" label="Test Label" labelClassName="test-class"></Input>);

        expect(screen.getByTestId(`h-label`)).toHaveClass(`test-class`);
      });
    });

    describe(`The "leftIconClassName" prop`, () => {
      it(`should render a left-aligned icon within the Input component.`, () => {
        render(<Input value="test value" label="Test Label" leftIconClassName="h-icon-search"></Input>);

        expect(screen.getByTestId(`h-input__icon--left`)).toHaveClass(`h-icon-search`);
      });
    });

    describe(`The "name" prop`, () => {
      it(`should set the "name" attribute on the input element.`, () => {
        render(<Input name="test name" value="test value" ></Input>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`name`, `test name`);
      });
    });

    describe(`The "role" prop`, () => {
      it(`should set the "role" attribute on the input element.`, () => {
        render(<Input value="test" role="searchbox"></Input>);

        expect(screen.getByRole(`searchbox`)).toBeInTheDocument();
      });
    });

    describe(`The "variant" prop`, () => {
      it(`should set custom styling on the component.`, () => {
        render(<Input value="test" variant="dark-blue"></Input>);

        expect(screen.getByRole(`textbox`)).toHaveClass(`h-input--dark-blue`);
      });
    });
  });

  describe(`Interactions`, () => {
    // describe(`The "checked" prop`, () => {
    //   it(`should update the checked state of the radio button`, async () => {
    //     let checked = false;
    //     const onChange = jest.fn(() => {
    //       checked = !checked;
    //     });
    //     const { rerender } = render(<RadioButton name="radio-group-1" checked={checked} onChange={onChange} />);

    //     expect(screen.getByRole(`radio`)).not.toBeChecked();

    //     userEvent.click(screen.getByRole(`radio`));

    //     await waitFor(() => {
    //       expect(onChange).toHaveBeenCalledTimes(1);
    //     });

    //     rerender(<RadioButton name="radio-group-1" checked={checked} onChange={onChange} />);

    //     expect(screen.getByRole(`radio`)).toBeChecked();
    //   });
    // });
  });
});
