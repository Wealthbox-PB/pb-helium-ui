import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DropdownMenuItem } from '../../../ts/components/Dropdown/DropdownMenuItem';
import { Dropdown } from '../../../ts/components/Dropdown/Dropdown';
import userEvent from '@testing-library/user-event';

const onClick: jest.Mock = jest.fn();

const setup = () => render(<DropdownMenuItem label="One" onClick={() => onClick()} />);

const dropdownSetup = () =>
  render(
    <div style={{ width: `1000px`, height: `1000px`, position: `relative`, display: `block` }}>
      <Dropdown
        renderOpener={({ ref, ...props }) => (
          <button ref={ref} {...props}>
            button
          </button>
        )}
      >
        <DropdownMenuItem label="One" onClick={() => onClick()} />
        <DropdownMenuItem label="Two" variant="negative" onClick={() => onClick()} />
      </Dropdown>
    </div>
  );

describe(`<DropdownMenuItem />`, () => {
  describe(`default`, () => {
    it(`should render the menu item`, () => {
      setup();
      expect(screen.getByRole(`menuitem`)).toBeInTheDocument();
    });
  });

  describe(`props`, () => {
    it(`should render the label`, () => {
      setup();
      expect(screen.getByText(`One`)).toBeInTheDocument();
    });
  });

  describe(`interactions`, () => {
    describe(`when the menu item is hovered over and unhovered`, () => {
      it(`should add and remove the active class`, async () => {
        dropdownSetup();
        userEvent.click(screen.getByText(`button`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        userEvent.hover(screen.getByText(`One`));
        await waitFor(async () => {
          expect(screen.getByText(`One`).parentElement).toHaveClass(`h-dropdown__menu__item--active`);
        });
        userEvent.unhover(screen.getByText(`One`));
        await waitFor(async () => {
          expect(screen.getByText(`One`).parentElement).not.toHaveClass(`h-dropdown__menu__item--active`);
        });
      });
    });

    describe(`when the menu item with the negative variant is hovered over and unhovered`, () => {
      it(`should add and remove the negative class`, async () => {
        dropdownSetup();
        userEvent.click(screen.getByText(`button`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        userEvent.hover(screen.getByText(`Two`));
        await waitFor(async () => {
          expect(screen.getByText(`Two`).parentElement).toHaveClass(`h-dropdown__menu__item--negative`);
        });
        userEvent.unhover(screen.getByText(`Two`));
        await waitFor(async () => {
          expect(screen.getByText(`Two`).parentElement).not.toHaveClass(`h-dropdown__menu__item--negative`);
        });
      });
    });

    describe(`when the menu item is navigated to`, () => {
      it(`should add active class`, async () => {
        dropdownSetup();
        userEvent.click(screen.getByText(`button`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        userEvent.keyboard(`[ArrowDown][ArrowDown]`);
        await waitFor(async () => {
          expect(screen.getByText(`Two`).parentElement).toHaveClass(`h-dropdown__menu__item--active`);
        });
      });

      describe(`when the user hits enter after navigating to the item`, () => {
        it(`should call the onClick funtion`, async () => {
          dropdownSetup();
          userEvent.click(screen.getByText(`button`));
          await waitFor(async () => {
            screen.getByRole(`menu`);
          });
          userEvent.keyboard(`[ArrowDown][ArrowDown][Enter]`);
          await waitFor(async () => {
            expect(onClick).toHaveBeenCalled();
          });
        });
      });
    });

    describe(`when the user types the first letter of a menu item label`, () => {
      it(`should navigate to the item`, async () => {
        dropdownSetup();
        userEvent.click(screen.getByText(`button`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        userEvent.keyboard(`[[t]`);
        await waitFor(async () => {
          expect(screen.getByText(`Two`).parentElement).toHaveClass(`h-dropdown__menu__item--active`);
        });
      });

      describe(`when the user hits enter after navigating to the item`, () => {
        it(`should call the onClick funtion`, async () => {
          dropdownSetup();
          userEvent.click(screen.getByText(`button`));
          await waitFor(async () => {
            screen.getByRole(`menu`);
          });
          userEvent.keyboard(`[t][Enter]`);
          await waitFor(async () => {
            expect(onClick).toHaveBeenCalled();
          });
        });
      });
    });

    describe(`when the menu item is clicked`, () => {
      it(`should call the onClick funtion`, async () => {
        dropdownSetup();
        userEvent.click(screen.getByText(`button`));
        await waitFor(async () => {
          screen.getByRole(`menu`);
        });
        userEvent.click(screen.getByText(`One`));
        await waitFor(async () => {
          expect(onClick).toHaveBeenCalled();
        });
      });
    });
  });
});
