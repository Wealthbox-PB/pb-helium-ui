import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from '../../ts/components/Checkbox';

describe(`<Checkbox />`, () => {
  describe(`default ui`, () => {
    describe(`the "checked" prop`, () => {
      it(`should not be set`, () => {
        render(<Checkbox />);

        expect(screen.getByRole(`checkbox`)).not.toBeChecked();
      });
    });

    describe(`the "indeterminate" prop`, () => {
      it(`should not be set`, () => {
        render(<Checkbox />);

        expect(screen.getByRole(`checkbox`)).not.toHaveClass(`h-checkbox__elm--indeterminate`);
      });
    });

    describe(`the "size" prop`, () => {
      it(`should not be set`, () => {
        render(<Checkbox />);

        expect(screen.getByTestId(`h-checkbox`)).not.toHaveClass(`h-checkbox--sm`);
        expect(screen.getByTestId(`h-checkbox`)).not.toHaveClass(`h-checkbox--lg`);
      });
    });

    describe(`the "label" prop`, () => {
      it(`should not be set`, () => {
        render(<Checkbox />);

        expect(document.querySelector(`.h-checkbox__label-content`)).not.toBeInTheDocument();
      });
    });
  });

  describe(`Props`, () => {
    describe(`The "className" prop`, () => {
      it(`should set the class name on the wrapping label element.`, () => {
        render(<Checkbox className="test-class" />);

        expect(screen.getByTestId(`h-checkbox`)).toHaveClass(`test-class`);
      });
    });

    describe(`The "indeterminate" prop`, () => {
      it(`should set the indeterminate state on the input element.`, () => {
        render(<Checkbox indeterminate />);

        expect(screen.getByRole(`checkbox`)).toHaveClass(`h-checkbox__elm--indeterminate`);
      });
    });

    describe(`The "inputClassName" prop`, () => {
      it(`should set the class name on the input element.`, () => {
        render(<Checkbox inputClassName="test-class" />);

        expect(screen.getByRole(`checkbox`)).toHaveClass(`test-class`);
      });
    });

    describe(`The "label" prop`, () => {
      it(`should set the label content.`, () => {
        render(<Checkbox label="test label" />);

        expect(screen.getByText(`test label`)).toBeInTheDocument();
      });
    });

    describe(`The "labelClassName" prop`, () => {
      it(`should set the class name on the label element.`, () => {
        render(<Checkbox label="test label" labelClassName="test-class" />);

        expect(screen.getByText(`test label`)).toHaveClass(`test-class`);
      });
    });

    describe(`The "size" prop`, () => {
      describe(`when set to "sm"`, () => {
        it(`should set the size to small.`, () => {
          render(<Checkbox size="sm" />);

          expect(screen.getByTestId(`h-checkbox`)).toHaveClass(`h-checkbox--sm`);
        });
      });

      describe(`when set to "lg"`, () => {
        it(`should set the size to large.`, () => {
          render(<Checkbox size="lg" />);

          expect(screen.getByTestId(`h-checkbox`)).toHaveClass(`h-checkbox--lg`);
        });
      });
    });
  });
});
