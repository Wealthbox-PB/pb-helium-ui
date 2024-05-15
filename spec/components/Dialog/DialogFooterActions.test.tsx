import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { DialogFooterActions } from '../../../ts/components/Dialog/DialogFooterActions';

const setup = (props?) => {
  render(<DialogFooterActions {...props} />);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe(`props`, () => {
  describe(`buttonSize`, () => {
    describe(`when the prop is set and a cancel and/or confirm button exists`, () => {
      it(`should have a small size`, () => {
        setup({ buttonSize: `sm`, cancel: `Cancel` });
        expect(screen.getByRole(`button`, { name: `Cancel` })).toHaveClass(`h-btn--sm`);
      });

      it(`should have a large size`, () => {
        setup({ buttonSize: `lg`, cancel: `Cancel` });
        expect(screen.getByRole(`button`, { name: `Cancel` })).toHaveClass(`h-btn--lg`);
      });
    });

    describe(`when the prop is set and a cancel and/or confirm button does not exist`, () => {
      it(`should not render a button with buttonSize styling`, () => {
        setup({ buttonSize: `sm` });
        expect(screen.getByRole(`button`)).not.toHaveClass(`h-btn--sm`);
      });
    });

    describe(`when the prop is not set and a cancel and/or confirm button exists`, () => {
      it(`should have a default size`, () => {
        setup({ cancel: `Cancel` });
        expect(screen.getByRole(`button`, { name: `Cancel` })).toHaveClass(`h-btn--md`);
      });
    });
  });

  describe(`cancel`, () => {
    describe(`when the prop is set`, () => {
      it(`should render a cancel button`, () => {
        setup({ cancel: `Cancel` });
        expect(screen.getByRole(`button`, { name: `Cancel` })).toBeInTheDocument();
      });
    });

    describe(`when the prop is not set`, () => {
      it(`should not render a cancel button`, () => {
        setup();
        expect(screen.queryByRole(`button`, { name: `Cancel` })).not.toBeInTheDocument();
      });
    });
  });

  describe(`cancelRef`, () => {
    describe(`when the prop is set`, () => {
      it(`should render a cancel button with a ref`, () => {
        const ref = createRef();
        setup({ cancel: `Cancel`, cancelRef: ref });
        expect(screen.getByRole(`button`, { name: `Cancel` })).toBe(ref.current);
      });
    });

    describe(`when the prop is not set`, () => {
      it(`should not render a cancel button with a ref`, () => {
        setup({ cancel: `Cancel` });
        expect(screen.getByRole(`button`, { name: `Cancel` })).not.toHaveAttribute(`ref`);
      });
    });
  });

  describe(`cancelVariant`, () => {
    describe(`when the prop is not set`, () => {
      it(`should render a cancel button with a secondary variant`, () => {
        setup({ cancel: `Cancel` });
        expect(screen.getByRole(`button`, { name: `Cancel` })).toHaveClass(`h-btn--secondary`);
      });
    });

    describe(`when the prop is set`, () => {
      it(`should render a cancel button with the set variant`, () => {
        setup({ cancel: `Cancel`, cancelVariant: `primary` });
        expect(screen.getByRole(`button`, { name: `Cancel` })).toHaveClass(`h-btn--primary`);
      });
    });
  });

  describe(`confirm`, () => {
    describe(`when the prop is set`, () => {
      it(`should render a confirm button`, () => {
        setup({ confirm: `Confirm` });
        expect(screen.getByRole(`button`, { name: `Confirm` })).toBeInTheDocument();
      });
    });

    describe(`when the prop is not set`, () => {
      it(`should not render a confirm button`, () => {
        setup();
        expect(screen.queryByRole(`button`, { name: `Confirm` })).not.toBeInTheDocument();
      });
    });
  });

  describe(`confirmVariant`, () => {
    describe(`when the prop is not set`, () => {
      it(`should render a confirm button with a positive variant`, () => {
        setup({ confirm: `Confirm` });
        expect(screen.getByRole(`button`, { name: `Confirm` })).toHaveClass(`h-btn--positive`);
      });
    });

    describe(`when the prop is set`, () => {
      it(`should render a confirm button with the set variant`, () => {
        setup({ confirm: `Confirm`, confirmVariant: `negative` });
        expect(screen.getByRole(`button`, { name: `Confirm` })).toHaveClass(`h-btn--negative`);
      });
    });
  });

  describe(`onCancel`, () => {
    let onCancel;

    beforeEach(() => {
      onCancel = jest.fn();
    });

    describe(`when the prop is set`, () => {
      it(`should call the function when the cancel button is clicked`, async () => {
        setup({ cancel: `Cancel`, onCancel });
        await userEvent.click(screen.getByRole(`button`, { name: `Cancel` }));
      });
    });

    describe(`when the prop is not set`, () => {
      it(`should not call the function when the cancel button is clicked`, async () => {
        setup({ cancel: `Cancel` });
        await userEvent.click(screen.getByRole(`button`, { name: `Cancel` }));
        expect(onCancel).not.toHaveBeenCalled();
      });
    });
  });

  describe(`onConfirm`, () => {
    let onConfirm: jest.Mock;

    beforeEach(() => {
      onConfirm = jest.fn();
    });

    describe(`when the prop is set`, () => {
      it(`should call the function when the confirm button is clicked`, async () => {
        setup({ confirm: `Confirm`, onConfirm });
        await userEvent.click(screen.getByRole(`button`, { name: `Confirm` }));
        expect(onConfirm).toHaveBeenCalled();
      });
    });

    describe(`when the prop is not set`, () => {
      it(`should not call the function when the confirm button is clicked`, async () => {
        setup({ confirm: `Confirm` });
        await userEvent.click(screen.getByRole(`button`, { name: `Confirm` }));
        expect(onConfirm).not.toHaveBeenCalled();
      });
    });
  });
});
