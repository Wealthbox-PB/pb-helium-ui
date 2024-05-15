import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { ModalDialog } from '../../../ts/components/Dialog/ModalDialog';

const closeDialog = jest.fn();
const setup = (props?) => {
  // eslint-disable-next-line react/no-children-prop
  render(<ModalDialog children="Are you sure?" open={true} closeDialog={closeDialog} {...props} />);
};

describe(`<ModalDialog />`, () => {
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

    it(`should have a dialog element with a default position of center and a size of medium`, () => {
      setup();
      expect(screen.getByRole(`dialog`)).toHaveClass(`h-dialog--center h-dialog--md`);
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
      it(`should call the closeDialog function when the backdrop is clicked`, async () => {
        setup();
        await userEvent.click(screen.getByTestId(`h-dialog__backdrop`));
        expect(closeDialog).toHaveBeenCalled();
      });
    });
  });

  describe(`open`, () => {
    describe(`when the open prop is set to false`, () => {
      it(`should not have a dialog when open is false`, () => {
        setup({ open: false });
        expect(screen.queryByRole(`dialog`)).not.toBeInTheDocument();
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

  describe(`animationDirection`, () => {
    describe(`when the animationDirection prop is set to down`, () => {
      it(`should have an animationDirection of slide-down`, () => {
        setup({ animationDirection: `down` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition--slide-down`);
      });
    });

    describe(`when the animationDirection prop is set to left`, () => {
      it(`should have an animationDirection of slide-left`, () => {
        setup({ animationDirection: `left` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition--slide-left`);
      });
    });

    describe(`when the animationDirection prop is set to right`, () => {
      it(`should have an animationDirection of slide-right`, () => {
        setup({ animationDirection: `right` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition--slide-right`);
      });
    });

    describe(`when the animationDirection prop is set to none`, () => {
      it(`should have an animationDirection of none`, () => {
        setup({ animationDirection: `none` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition--slide-none`);
      });
    });
  });

  describe(`animationDistance`, () => {
    describe(`when the animationDistance prop is set to xxs`, () => {
      it(`should have an animationDistance of xxs`, () => {
        setup({ animationDistance: `xxs` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition-distance--xxs`);
      });
    });

    describe(`when the animationDistance prop is set to xs`, () => {
      it(`should have an animationDistance of xs`, () => {
        setup({ animationDistance: `xs` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition-distance--xs`);
      });
    });

    describe(`when the animationDistance prop is set to sm`, () => {
      it(`should have an animationDistance of sm`, () => {
        setup({ animationDistance: `sm` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition-distance--sm`);
      });
    });

    describe(`when the animationDistance prop is set to md`, () => {
      it(`should have an animationDistance of md`, () => {
        setup({ animationDistance: `md` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition-distance--md`);
      });
    });

    describe(`when the animationDistance prop is set to lg`, () => {
      it(`should have an animationDistance of lg`, () => {
        setup({ animationDistance: `lg` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition-distance--lg`);
      });
    });

    describe(`when the animationDistance prop is set to none`, () => {
      it(`should have an animationDistance of none`, () => {
        setup({ animationDistance: `none` });
        expect(screen.getByTestId(`h-dialog__el`)).toHaveClass(`h-transition-distance--none`);
      });
    });
  });

  describe(`backdrop`, () => {
    describe(`when the backdrop prop is set to false`, () => {
      it(`should not have a backdrop`, () => {
        setup({ backdrop: false });
        expect(screen.queryByTestId(`h-dialog__backdrop`)).not.toBeInTheDocument();
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

  describe(`position`, () => {
    describe(`when the position prop is set to top`, () => {
      it(`should have a position of top`, () => {
        setup({ position: `top` });
        expect(screen.getByRole(`dialog`)).toHaveClass(`h-dialog--top`);
      });
    });

    describe(`when the position is set to right`, () => {
      it(`should have a position of right`, () => {
        setup({ position: `right` });
        expect(screen.getByRole(`dialog`)).toHaveClass(`h-dialog--right`);
      });
    });

    describe(`when the position prop is set to bottom`, () => {
      it(`should have a position of bottom`, () => {
        setup({ position: `bottom` });
        expect(screen.getByRole(`dialog`)).toHaveClass(`h-dialog--bottom`);
      });
    });

    describe(`when the position prop is set to left`, () => {
      it(`should have a position of left`, () => {
        setup({ position: `left` });
        expect(screen.getByRole(`dialog`)).toHaveClass(`h-dialog--left`);
      });
    });
  });

  describe(`size`, () => {
    describe(`when the size prop is set to small`, () => {
      it(`should have a size of small`, () => {
        setup({ size: `small` });
        expect(screen.getByRole(`dialog`)).toHaveClass(`h-dialog--sm`);
      });
    });

    describe(`when the size prop is set to large`, () => {
      it(`should have a size of large`, () => {
        setup({ size: `large` });
        expect(screen.getByRole(`dialog`)).toHaveClass(`h-dialog--lg`);
      });
    });
  });
});
