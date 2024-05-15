import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { DialogContext, useDialogContext } from '../../../ts/components/Dialog/DialogContext';
import { DialogBackdrop } from '../../../ts/components/Dialog/DialogBackdrop';
import { DialogHeader } from '../../../ts/components/Dialog/DialogHeader';
import { DialogBody } from '../../../ts/components/Dialog/DialogBody';

const ariaDescriptionSelector = `desc`;
const ariaLabelSelector = `label`;
let consoleSpy: jest.SpyInstance;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, `log`);
  consoleSpy.mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
});

describe(`DialogContext`, () => {
  it(`provides default values when no overriding values are set`, async () => {
    render(
      <DialogContext.Provider
        value={{
          ariaDescriptionSelector,
          ariaLabelSelector,
          closeDialog: () => {
            // eslint-disable-next-line no-console
            console.log(`closeDialog`);
          },
        }}
      >
        <DialogBackdrop />
        <DialogHeader>Dialog Title</DialogHeader>
        <DialogBody>
          <p>Dialog Content</p>
        </DialogBody>
      </DialogContext.Provider>,
    );
    expect(screen.getByRole(`heading`, { name: `Dialog Title` })).toHaveAttribute(`id`, ariaLabelSelector);
    expect(screen.getByTestId(`h-dialog__body`)).toHaveAttribute(`id`, ariaDescriptionSelector);
    await userEvent.click(screen.getByTestId(`h-dialog__backdrop`));
    expect(consoleSpy).toHaveBeenCalled();
  });

  it(`allows overriding of the default values when values are set`, async () => {
    render(
      <DialogContext.Provider value={{ ariaDescriptionSelector, ariaLabelSelector, closeDialog: jest.fn() }}>
        <DialogBackdrop
          closeDialog={() => {
            // eslint-disable-next-line no-console
            console.log(`closeDialog`);
          }}
        />
        <DialogHeader ariaLabelSelector="custom-label">Dialog Title</DialogHeader>
        <DialogBody ariaDescriptionSelector="custom-desc">
          <p>Dialog Content</p>
        </DialogBody>
      </DialogContext.Provider>,
    );
    expect(screen.getByRole(`heading`, { name: `Dialog Title` })).not.toHaveAttribute(
      `id`,
      ariaLabelSelector,
    );
    expect(screen.getByRole(`heading`, { name: `Dialog Title` })).toHaveAttribute(`id`, `custom-label`);
    expect(screen.getByTestId(`h-dialog__body`)).not.toHaveAttribute(`id`, ariaDescriptionSelector);
    expect(screen.getByTestId(`h-dialog__body`)).toHaveAttribute(`id`, `custom-desc`);
    await userEvent.click(screen.getByTestId(`h-dialog__backdrop`));
    expect(consoleSpy).toHaveBeenCalled();
  });
});

describe(`useDialogContext`, () => {
  it(`returns the context value`, () => {
    const mockContextValue = { ariaLabelSelector, ariaDescriptionSelector, closeDialog: jest.fn() };
    function TestComponent() {
      const contextValue = useDialogContext();
      return <main id={contextValue.ariaDescriptionSelector}>Dialog Content</main>;
    }
    render(
      <DialogContext.Provider value={mockContextValue}>
        <TestComponent />
      </DialogContext.Provider>,
    );

    expect(screen.getByRole(`main`)).toHaveAttribute(`id`, ariaDescriptionSelector);
  });
});
