import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextArea } from '../../ts/components/TextArea';

const setup = (props?) => render(<TextArea {...props} />);

describe(`<TextArea />`, () => {
  describe(`default UI`, () => {
    it(`should have a textarea element with an id attribute`, () => {
      setup();

      expect(screen.getByRole(`textbox`)).toHaveAttribute(`id`);
    });

    it(`should not have a label element`, () => {
      setup();

      expect(screen.queryByTestId(`h-label`)).not.toBeInTheDocument();
    });
  });

  describe(`props`, () => {
    describe(`id`, () => {
      it(`should set the id attribute on the textarea element`, () => {
        setup({ id: `test-id` });

        expect(screen.getByRole(`textbox`)).toHaveAttribute(`id`, `test-id`);
      });
    });

    describe(`label`, () => {
      it(`should have a label element with the label value`, () => {
        setup({ label: `test label` });

        expect(screen.getByTestId(`h-label`)).toHaveTextContent(`test label`);
      });

      describe(`when an id is provided`, () => {
        it(`should have a for attribute equal to the id`, () => {
          setup({ label: `test label`, id: `test-id` });

          expect(screen.getByTestId(`h-label`)).toHaveAttribute(`for`, `test-id`);
        });
      });

      describe(`when an id is not provided`, () => {
        it(`should have a for attribute equal to the textarea's id`, () => {
          setup({ label: `test label` });

          expect(screen.getByTestId(`h-label`)).toHaveAttribute(
            `for`,
            screen.getByRole(`textbox`).getAttribute(`id`),
          );
        });
      });
    });

    describe(`labelClassName`, () => {
      it(`should set a CSS className on the label element`, () => {
        setup({ label: `test label`, labelClassName: `h-label--modifier` });

        expect(screen.getByTestId(`h-label`)).toHaveClass(`h-label--modifier`);
      });
    });

    describe(`className`, () => {
      it(`should set a CSS className on the textarea element`, () => {
        setup({ className: `h-textarea--modifier` });

        expect(screen.getByRole(`textbox`)).toHaveClass(`h-textarea--modifier`);
      });
    });
  });
});
