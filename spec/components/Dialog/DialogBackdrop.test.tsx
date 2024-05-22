import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { DialogBackdrop } from '../../../ts/components/Dialog/DialogBackdrop';
import { ModalDialog } from '../../../ts/components/Dialog/ModalDialog';

afterEach(() => {
  jest.clearAllMocks();
});

describe(`<DialogBackdrop />`, () => {
  describe(`default UI`, () => {
    it(`should have a button with the default CSS classNames`, () => {
      render(<DialogBackdrop />);
      expect(screen.getByRole(`button`, { name: `Close Dialog` })).toHaveClass(
        `h-dialog__backdrop h-cursor-auto`,
      );
    });
  });

  describe(`props`, () => {
    describe(`className`, () => {
      it(`should add a CSS className`, () => {
        render(<DialogBackdrop className="test" />);
        expect(screen.getByRole(`button`, { name: `Close Dialog` })).toHaveClass(`test`);
      });
    });

    describe(`closeDialog`, () => {
      describe(`when the closeDialog prop is set`, () => {
        let closeDialog: jest.Mock;

        beforeEach(() => {
          closeDialog = jest.fn();
        });

        it(`should call the closeDialog function when the dialog backdrop is clicked`, async () => {
          render(<DialogBackdrop closeDialog={closeDialog} />);
          await userEvent.click(screen.getByTestId(`h-dialog__backdrop`));
          expect(closeDialog).toHaveBeenCalledTimes(1);
        });
      });

      describe(`when the closeDialog prop is not set`, () => {
        let consoleSpy: jest.SpyInstance;

        beforeEach(() => {
          consoleSpy = jest.spyOn(console, `log`);
          consoleSpy.mockImplementation(() => {});
        });

        it(`should call the context closeDialog function when the dialog backdrop is clicked`, async () => {
          render(
            <ModalDialog
              open={true}
              closeDialog={() => {
                // eslint-disable-next-line no-console
                console.log();
              }}
              backdrop={false}
            >
              <DialogBackdrop />
            </ModalDialog>,
          );
          await userEvent.click(screen.getByTestId(`h-dialog__backdrop`));
          expect(consoleSpy).toHaveBeenCalled();
        });
      });
    });
  });
});
