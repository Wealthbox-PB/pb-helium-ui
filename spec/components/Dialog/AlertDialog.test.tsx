import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { AlertDialog } from '../../../ts/components/Dialog/AlertDialog';

const closeDialog = jest.fn();
const setup = (props?) => {
  // eslint-disable-next-line react/no-children-prop
  render(<AlertDialog children="Are you sure?" open={true} closeDialog={closeDialog} {...props} />);
};

describe(`<AlertDialog />`, () => {
  describe(`default`, () => {
    it(`should have a wrapper element that animates in`, () => {
      setup();
      expect(screen.getByTestId(`h-dialog-wrapper`)).toHaveClass(
        `h-transition--enter h-transition--enter-active`,
      );
    });

    it(`should have a backdrop element`, () => {
      setup();
      expect(screen.getByTestId(`h-dialog__backdrop`)).toBeInTheDocument();
    });

    it(`should have a dialog element with a default position of center and a size of small`, () => {
      setup();
      expect(screen.getByRole(`alertdialog`)).toHaveClass(`h-dialog--center h-dialog--sm`);
    });

    it(`should have a dialog element child with default animationDirection and animationDistance
        classes`, () => {
      setup();
      expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(
        `h-transition-distance--md h-transition-element h-transition--fade-in h-transition--slide-up`,
      );
    });
  });

  describe(`props`, () => {
    describe(`children`, () => {
      it(`should have a string or JSX element`, () => {
        setup({ children: `Are you sure?` });
        expect(screen.getByText(`Are you sure?`)).toBeInTheDocument();
      });

      it(`should have a JSX element`, () => {
        setup({ children: <div>Are you sure?</div> });
        expect(screen.getByText(`Are you sure?`)).toBeInTheDocument();
      });

      it(`should have an array of JSX elements`, () => {
        setup({ children: [<span key="1">Are you sure?</span>, <button key="2">Cancel</button>] });
        expect(screen.getByText(`Are you sure?`)).toBeInTheDocument();
        expect(screen.getByRole(`button`, { name: `Cancel` })).toBeInTheDocument();
      });
    });

    describe(`closeDialog`, () => {
      it(`should not call the closeDialog function when the backdrop is clicked`, async () => {
        setup();
        await userEvent.click(screen.getByTestId(`h-dialog__backdrop`));
        expect(closeDialog).not.toHaveBeenCalled();
      });
    });
  });

  describe(`open`, () => {
    describe(`when the open prop is set to false`, () => {
      it(`should not have a dialog when open is false`, () => {
        setup({ open: false });
        expect(screen.queryByRole(`alertdialog`)).not.toBeInTheDocument();
      });
    });
  });

  describe(`animateIn`, () => {
    describe(`when the animateIn prop is set to false`, () => {
      it(`should not animate in`, () => {
        setup({ animateIn: false });
        expect(screen.getByTestId(`h-dialog-wrapper`)).not.toHaveClass(
          `h-transition--enter h-transition--enter-active`,
        );
      });
    });
  });

  describe(`backdropClassName`, () => {
    it(`should have a custom backdropClassName`, () => {
      setup({ backdropClassName: `custom-backdrop` });
      expect(screen.getByTestId(`h-dialog__backdrop`)).toHaveClass(`custom-backdrop`);
    });
  });

  describe(`dialogClassName`, () => {
    it(`should have a custom dialogClassName`, () => {
      setup({ dialogClassName: `custom-dialog` });
      expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`custom-dialog`);
    });
  });

  describe(`leastDestructiveRef`, () => {
    it(`should focus the leastDestructiveRef`, () => {
      const leastDestructiveRef = { current: { focus: jest.fn() } };
      setup({ leastDestructiveRef });
      expect(leastDestructiveRef.current.focus).toHaveBeenCalled();
    });
  });

  describe(`position`, () => {
    describe(`when the position prop is set to top`, () => {
      it(`should have a position of top`, () => {
        setup({ position: `top` });
        expect(screen.getByRole(`alertdialog`)).toHaveClass(`h-dialog--top`);
      });
    });

    describe(`when the position prop is set to right`, () => {
      it(`should have a position of right`, () => {
        setup({ position: `right` });
        expect(screen.getByRole(`alertdialog`)).toHaveClass(`h-dialog--right`);
      });
    });

    describe(`when the position prop is set to bottom`, () => {
      it(`should have a position of bottom`, () => {
        setup({ position: `bottom` });
        expect(screen.getByRole(`alertdialog`)).toHaveClass(`h-dialog--bottom`);
      });
    });

    describe(`when the position prop is set to left`, () => {
      it(`should have a position of left`, () => {
        setup({ position: `left` });
        expect(screen.getByRole(`alertdialog`)).toHaveClass(`h-dialog--left`);
      });
    });
  });

  describe(`size`, () => {
    it(`should have a size of small by default`, () => {
      setup();
      expect(screen.getByRole(`alertdialog`)).toHaveClass(`h-dialog--sm`);
    });

    describe(`when the size prop is set to medium`, () => {
      it(`should have a size of medium`, () => {
        setup({ size: `medium` });
        expect(screen.getByRole(`alertdialog`)).toHaveClass(`h-dialog--md`);
      });
    });

    describe(`when the size prop is set to large`, () => {
      it(`should have a size of large`, () => {
        setup({ size: `large` });
        expect(screen.getByRole(`alertdialog`)).toHaveClass(`h-dialog--lg`);
      });
    });
  });
});
