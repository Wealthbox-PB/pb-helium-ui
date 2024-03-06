import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { TextInput } from '../../ts/components/TextInput';

describe(`<TextInput />`, () => {
  describe(`Default UI`, () => {
    describe(`The "role" prop`, () => {
      it(`should be set to "textbox" and set as the "role" attribute on the input.`, () => {
        render(<TextInput value="test" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toBeInTheDocument();
      });
    });

    describe(`The "inputType" prop`, () => {
      it(`should be set to "text" and set as the "type" attribute on the input.`, () => {
        render(<TextInput value="test" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`type`, `text`);
      });
    });

    describe(`The "variant" prop`, () => {
      it(`should be set to "default".`, () => {
        render(<TextInput value="test" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).not.toHaveClass(`h-input--dark-blue`);
      });
    });
  });

  describe(`Props`, () => {
    describe(`The "autoFocus" prop`, () => {
      it(`should set the "autoFocus" attribute on the input element.`, () => {
        // eslint-disable-next-line jsx-a11y/no-autofocus
        render(<TextInput value="test" autoFocus={true} onChange={() => {}}></TextInput>);

        expect(document.activeElement).toHaveAttribute(`value`, `test`);
      });
    });

    describe(`The "aria-label" prop`, () => {
      it(`should set the "aria-label" attribute on the input element.`, () => {
        render(<TextInput value="test" aria-label="test name" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`aria-label`, `test name`);
      });
    });

    describe(`The "disabled" prop`, () => {
      it(`should set the "disabled" attribute on the input element.`, () => {
        render(<TextInput disabled={true} value="test" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`disabled`);
      });
    });

    describe(`The "id" prop`, () => {
      it(`should set the "id" attribute on the input element and the "for" attribute on the label.`, () => {
        render(
          <TextInput id="test-id" value="test value" label="Test Label" onChange={() => {}}></TextInput>,
        );

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`id`, `test-id`);
        expect(screen.getByText(`Test Label`)).toHaveAttribute(`for`, `test-id`);
      });
    });

    describe(`The "className" prop`, () => {
      it(`should apply additional classes to the input element.`, () => {
        render(<TextInput value="test value" className="h-input--tall" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveClass(`h-input--tall`);
      });
    });

    describe(`The "label" prop`, () => {
      it(`should render a label element along with the input element.`, () => {
        render(<TextInput value="test value" label="Test Label" onChange={() => {}}></TextInput>);

        expect(screen.getByText(`Test Label`)).toBeInTheDocument();
      });
    });

    describe(`The "labelClassName" prop`, () => {
      it(`should apply custom classes to a label element that is rendered with the input element.`, () => {
        render(
          <TextInput
            value="test value"
            label="Test Label"
            labelClassName="test-class"
            onChange={() => {}}
          ></TextInput>,
        );

        expect(screen.getByText(`Test Label`)).toHaveClass(`test-class`);
      });
    });

    describe(`The "leftIconClassName" prop`, () => {
      it(`should render a left-aligned icon within the Input component.`, () => {
        render(
          <TextInput
            value="test value"
            label="Test Label"
            leftIconClassName="h-icon-search"
            onChange={() => {}}
          ></TextInput>,
        );

        expect(screen.getByTestId(`h-input__icon--left`)).toHaveClass(`h-icon-search`);
      });
    });

    describe(`The "name" prop`, () => {
      it(`should set the "name" attribute on the input element.`, () => {
        render(<TextInput name="test name" value="test value" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`name`, `test name`);
      });
    });

    describe(`The "placeholder" prop`, () => {
      it(`should set the "placeholder" attribute on the input element.`, () => {
        render(<TextInput placeholder="placeholder" value="test value" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`placeholder`, `placeholder`);
      });
    });

    describe(`The "role" prop`, () => {
      it(`should set the "role" attribute on the input element.`, () => {
        render(<TextInput value="test" role="searchbox" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`searchbox`)).toBeInTheDocument();
      });
    });

    describe(`The "variant" prop`, () => {
      it(`should set custom styling on the component.`, () => {
        render(<TextInput value="test" variant="dark-blue" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveClass(`h-input--dark-blue`);
      });
    });

    describe(`The "inputType" prop`, () => {
      it(`should set the "type" attribute on the input element.`, () => {
        render(<TextInput value="test" inputType="email" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`type`, `email`);
      });
    });

    describe(`The "value" prop`, () => {
      it(`should set the "value" attribute on the input element.`, () => {
        render(<TextInput value="test" onChange={() => {}}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`value`, `test`);
      });
    });
  });

  describe(`Interactions`, () => {
    describe(`Clicking on the input label`, () => {
      it(`should focus the input element.`, async () => {
        render(<TextInput value="test" label="Test Label" onChange={() => {}}></TextInput>);

        await userEvent.click(screen.getByText(`Test Label`));

        expect(document.activeElement).toHaveAttribute(`value`, `test`);
      });
    });

    describe(`Focusing on the input`, () => {
      it(`should call the onFocus event.`, async () => {
        const onFocus = jest.fn();

        render(<TextInput value="test value" onFocus={onFocus} onChange={() => {}}></TextInput>);

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
            <TextInput value="" onBlur={onBlur} onChange={() => {}}></TextInput>
          </div>,
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
          rerender(<TextInput value={value} onChange={onChange}></TextInput>);
        });

        const { rerender } = render(<TextInput value={value} onChange={onChange}></TextInput>);

        expect(screen.getByRole(`textbox`)).toHaveValue(``);

        await userEvent.type(screen.getByRole(`textbox`), `test value`);

        expect(screen.getByRole(`textbox`)).toHaveValue(`test value`);
      });
    });
  });
});
