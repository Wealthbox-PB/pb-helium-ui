import React, { useState } from 'react';
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
        render(<Input value="test" autofocus={true}></Input>);

        expect(document.activeElement).toHaveAttribute(`value`, `test`);
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

    describe(`The "inputType" prop`, () => {
      it(`should set the "type" attribute on the input element.`, () => {
        render(<Input value="test" inputType="email"></Input>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`type`, `email`);
      });
    });

    describe(`The "value" prop`, () => {
      it(`should set the "value" attribute on the input element.`, () => {
        render(<Input value="test"></Input>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`value`, `test`);
      });
    });
  });

  describe(`Interactions`, () => {
    describe(`Clicking on the input label`, () => {
      it(`should focus the input element.`, async () => {
        render(<Input value="test" label="test-label"></Input>);

        await userEvent.click(screen.getByTestId(`h-label`));

        expect(document.activeElement).toHaveAttribute(`value`, `test`);
      });
    });

    describe(`Focusing on the input`, () => {
      it(`should call the onFocus event.`, async () => {
        const onFocus = jest.fn();

        render(<Input value="test value" onFocus={onFocus}></Input>);

        await userEvent.click(screen.getByRole(`textbox`));

        expect(onFocus).toHaveBeenCalledTimes(1);
      });
    });

    describe(`Removing focus from the input`, () => {
      it(`should call the onBlur function.`, async () => {
        const onBlur = jest.fn();

        render(
          <div>
            <div data-testid="test-div">test</div>
            <Input value="" onBlur={onBlur}></Input>
          </div>
        );

        await userEvent.click(screen.getByRole(`textbox`));

        await userEvent.click(screen.getByTestId(`test-div`));

        expect(onBlur).toHaveBeenCalledTimes(1);
      });
    });

    describe(`Typing in the input`, () => {
      it(`should call the onChange function.`, async () => {
        let value = ``;

        const onChange = jest.fn((e) => {
          value = e.target.value;
          rerender(<Input value={value} onChange={onChange}></Input>);
        });

        const { rerender } = render(<Input value={value} onChange={onChange}></Input>);

        expect(screen.getByRole(`textbox`)).toHaveValue(``);

        await userEvent.type(screen.getByRole(`textbox`), `test value`);

        expect(screen.getByRole(`textbox`)).toHaveValue(`test value`);
      });
    });
  });
});
