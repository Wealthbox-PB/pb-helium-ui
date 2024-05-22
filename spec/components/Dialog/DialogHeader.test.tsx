import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { DialogHeader } from '../../../ts/components/Dialog/DialogHeader';
import { ModalDialog } from '../../../ts/components/Dialog/ModalDialog';

const setup = (props?) => {
  return render(<DialogHeader {...props} />);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe(`<DialogHeader />`, () => {
  describe(`props`, () => {
    describe(`ariaLabelSelector`, () => {
      describe(`when the ariaLabelSelector prop is set`, () => {
        it(`should have a dialog heading id set to the ariaLabelSelector`, () => {
          setup({ ariaLabelSelector: `test-id`, children: `Dialog Heading` });
          expect(screen.getByRole(`heading`)).toHaveAttribute(`id`, `test-id`);
        });
      });

      describe(`when the ariaLabelSelector prop is not set`, () => {
        it(`should have a dialog heading id set to the default context value`, () => {
          setup({ children: `Dialog Heading` });
          expect(screen.getByRole(`heading`)).toHaveAttribute(`id`, ``);
        });
      });
    });

    describe(`children`, () => {
      describe(`when the children prop is set`, () => {
        describe(`when the children prop is a string`, () => {
          it(`should render the children prop as the dialog heading content`, () => {
            setup({ children: `Dialog Heading` });
            expect(screen.getByRole(`heading`, { name: `Dialog Heading` })).toBeInTheDocument();
          });
        });

        describe(`when the children prop is an element`, () => {
          it(`should render the children prop as the dialog heading content`, () => {
            setup({ children: <span>Dialog Heading</span> });
            expect(screen.getByRole(`heading`, { name: `Dialog Heading` })).toBeInTheDocument();
          });
        });

        describe(`when the children prop is an array of elements`, () => {
          it(`should render the children prop as the dialog heading content`, () => {
            setup({ children: [<span key="1">Dialog{` `}</span>, <span key="2">Heading</span>] });
            expect(screen.getByRole(`heading`, { name: `Dialog Heading` })).toBeInTheDocument();
          });
        });
      });

      describe(`when the children prop is not set`, () => {
        it(`should not render a dialog heading`, () => {
          setup();
          expect(screen.queryByRole(`heading`)).not.toBeInTheDocument();
        });
      });
    });

    describe(`closeDialog`, () => {
      describe(`when the closeDialog prop is set`, () => {
        let closeDialog: jest.Mock;

        beforeEach(() => {
          closeDialog = jest.fn();
        });

        it(`should call the closeDialog function when the close button is clicked`, async () => {
          setup({ closeDialog });
          await userEvent.click(screen.getByRole(`button`, { name: `Close Dialog` }));
          expect(closeDialog).toHaveBeenCalledTimes(1);
        });
      });

      describe(`when the closeDialog prop is not set`, () => {
        let consoleSpy: jest.SpyInstance;

        beforeEach(() => {
          consoleSpy = jest.spyOn(console, `log`);
          consoleSpy.mockImplementation(() => {});
        });

        it(`should call the context closeDialog function when the close button is clicked`, async () => {
          render(
            <ModalDialog
              open={true}
              closeDialog={() => {
                // eslint-disable-next-line no-console
                console.log();
              }}
            >
              <DialogHeader />
            </ModalDialog>,
          );
          await userEvent.click(screen.getAllByRole(`button`, { name: `Close Dialog` })[1]);
          expect(consoleSpy).toHaveBeenCalled();
        });
      });
    });

    describe(`closeInHeader`, () => {
      describe(`when the closeInHeader prop is set to true`, () => {
        it(`should render a close button in the dialog header`, () => {
          setup({ closeInHeader: true });
          expect(screen.getByRole(`button`, { name: `Close Dialog` })).toBeInTheDocument();
        });
      });

      describe(`when the closeInHeader prop is set to false`, () => {
        it(`should not render a close button in the dialog header`, () => {
          setup({ closeInHeader: false });
          expect(screen.queryByRole(`button`, { name: `Close Dialog` })).not.toBeInTheDocument();
        });
      });
    });

    describe(`headerClassName`, () => {
      it(`should add a CSS classname to the dialog header element`, () => {
        setup({ headerClassName: `test-class` });
        expect(screen.getByTestId(`h-dialog__header`)).toHaveClass(`test-class`);
      });
    });
  });
});
