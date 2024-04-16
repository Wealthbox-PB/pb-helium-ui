import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion } from '../ts/components/Accordion';

const setup = () =>
  render(
    <Accordion
      items={[
        {
          label: `Panel Label`,
          children: `Panel Content`,
        },
      ]}
    />,
  );

describe(`Accordion`, () => {
  describe(`default UI`, () => {
    it(`should have a card style applied via a CSS class`, () => {
      setup();
      expect(screen.getByTestId(`h-accordion`)).toHaveClass(`h-card`);
    });

    it(`should have a panel that is closed/collapsed`, () => {
      setup();
      expect(screen.getByTestId(`h-accordion__panel`)).toHaveAttribute(`aria-expanded`, `false`);
    });

    it(`should have a panel with a label`, () => {
      setup();
      expect(screen.getByText(`Panel Label`)).toBeInTheDocument();
    });

    it(`should have a panel with an expand button`, () => {
      setup();
      expect(screen.getByRole(`button`, { name: `Expand` })).toBeInTheDocument();
    });

    it(`should have a panel with an expand icon on the right`, () => {
      setup();
      expect(screen.getByTestId(`h-accordion__panel__icon-right`)).toHaveClass(`h-icon-add`);
    });

    it(`should have a panel with no visible children content`, () => {
      setup();
      expect(screen.queryByText(`Panel Content`)).not.toBeVisible();
    });

    it(`should have a panel with content with closed/collapsed styles applied`, () => {
      setup();
      expect(screen.getByTestId(`h-accordion__panel__content`)).toHaveStyle(`height: 0px`);
      expect(screen.getByTestId(`h-accordion__panel__content`)).toHaveStyle(`visibility: hidden`);
      expect(screen.getByTestId(`h-accordion__panel__content`)).toHaveStyle(`opacity: 0`);
    });
  });

  describe(`props`, () => {
    describe(`allowMultipleOpen`, () => {
      describe(`when set to true`, () => {
        it(`should allow multiple panels to be open/expanded at the same time`, () => {
          render(
            <Accordion
              allowMultipleOpen={true}
              items={[
                {
                  label: `Panel Label 1`,
                  children: `Panel Content 1`,
                },
                {
                  label: `Panel Label 2`,
                  children: `Panel Content 2`,
                },
              ]}
            />,
          );
          const expandButtons = screen.getAllByRole(`button`, { name: `Expand` });
          expandButtons.forEach((button) => {
            fireEvent.click(button);
          });
          expect(screen.getAllByTestId(`h-accordion__panel`)).toHaveLength(2);
          expect(screen.getAllByTestId(`h-accordion__panel`)[0]).toHaveAttribute(`aria-expanded`, `true`);
          expect(screen.getAllByTestId(`h-accordion__panel`)[1]).toHaveAttribute(`aria-expanded`, `true`);
          expect(screen.getByText(`Panel Content 1`)).toBeVisible();
          expect(screen.getByText(`Panel Content 2`)).toBeVisible();
        });

        it(`should allow individual panels to be closed/collapsed while other panels are still
        open/expanded`, () => {
          render(
            <Accordion
              allowMultipleOpen={true}
              items={[
                {
                  label: `Panel Label 1`,
                  children: `Panel Content 1`,
                },
                {
                  label: `Panel Label 2`,
                  children: `Panel Content 2`,
                },
              ]}
            />,
          );
          const expandButtons = screen.getAllByRole(`button`, { name: `Expand` });
          expandButtons.forEach((button) => {
            fireEvent.click(button);
          });
          expect(screen.getAllByTestId(`h-accordion__panel`)).toHaveLength(2);
          expect(screen.getAllByTestId(`h-accordion__panel`)[0]).toHaveAttribute(`aria-expanded`, `true`);
          expect(screen.getAllByTestId(`h-accordion__panel`)[1]).toHaveAttribute(`aria-expanded`, `true`);
          expect(screen.getByText(`Panel Content 1`)).toBeVisible();
          expect(screen.getByText(`Panel Content 2`)).toBeVisible();
          fireEvent.click(screen.getAllByRole(`button`, { name: `Collapse` })[1]);
          expect(screen.getAllByTestId(`h-accordion__panel`)[1]).not.toHaveAttribute(`aria-expanded`, `true`);
        });
      });

      describe(`when set to false`, () => {
        it(`should only allow one panel to be open/expanded at a time`, () => {
          render(
            <Accordion
              allowMultipleOpen={false}
              items={[
                {
                  label: `Panel Label 1`,
                  children: `Panel Content 1`,
                },
                {
                  label: `Panel Label 2`,
                  children: `Panel Content 2`,
                },
              ]}
            />,
          );
          const expandButtons = screen.getAllByRole(`button`, { name: `Expand` });
          expandButtons.forEach((button) => {
            fireEvent.click(button);
          });
          expect(screen.getAllByTestId(`h-accordion__panel`)).toHaveLength(2);
          expect(screen.getAllByTestId(`h-accordion__panel`)[0]).toHaveAttribute(`aria-expanded`, `false`);
          expect(screen.getAllByTestId(`h-accordion__panel`)[1]).toHaveAttribute(`aria-expanded`, `true`);
          expect(screen.queryByText(`Panel Content 1`)).not.toBeVisible();
          expect(screen.getByText(`Panel Content 2`)).toBeVisible();
        });
      });
    });

    describe(`when the className prop is set`, () => {
      it(`should have a CSS class for the className`, () => {
        render(
          <Accordion
            className="h-accordion--modifier"
            items={[
              {
                label: `Panel Label`,
                children: `Panel Content`,
              },
            ]}
          />,
        );
        expect(screen.getByTestId(`h-accordion`)).toHaveClass(`h-accordion--modifier`);
      });
    });

    describe(`when the collapseIconName prop is set`, () => {
      it(`should have a panel with a CSS className for the collapseIcon`, () => {
        render(
          <Accordion
            collapseIconName="chevron-up"
            items={[
              {
                label: `Panel Label`,
                children: `Panel Content`,
              },
            ]}
          />,
        );

        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        expect(screen.getByTestId(`h-accordion__panel__icon-right`)).toHaveClass(`h-icon-chevron-up`);
      });
    });

    describe(`when the expandIconName prop is set`, () => {
      it(`should have a panel with a CSS className for the expandIcon`, () => {
        render(
          <Accordion
            openFirstPanel={true}
            expandIconName="chevron-down"
            items={[
              {
                label: `Panel Label`,
                children: `Panel Content`,
              },
            ]}
          />,
        );

        fireEvent.click(screen.getByRole(`button`, { name: `Collapse` }));
        expect(screen.getByTestId(`h-accordion__panel__icon-right`)).toHaveClass(`h-icon-chevron-down`);
      });
    });

    describe(`when the iconPosition prop is set to left`, () => {
      it(`should have a panel with an icon on the left`, () => {
        render(
          <Accordion
            iconPosition="left"
            items={[
              {
                label: `Panel Label`,
                children: `Panel Content`,
              },
            ]}
          />,
        );
        expect(screen.getByTestId(`h-accordion__panel__icon-left`)).toBeInTheDocument();
        expect(screen.queryByTestId(`h-accordion__panel__icon-right`)).not.toBeInTheDocument();
      });
    });

    describe(`items`, () => {
      it(`should have a panel for each item`, () => {
        const items = [
          {
            label: `Panel Label 1`,
            children: `Panel Content 1`,
          },
          {
            label: `Panel Label 2`,
            children: `Panel Content 2`,
          },
        ];

        render(<Accordion allowMultipleOpen={true} items={items} />);
        expect(screen.getAllByTestId(`h-accordion__panel`)).toHaveLength(items.length);
      });
    });

    describe(`when the panelClassName prop is set`, () => {
      it(`should have a panel with a CSS class for the panelClassName`, () => {
        render(
          <Accordion
            panelClassName="h-accordion__panel--modifier"
            items={[
              {
                label: `Panel Label`,
                children: `Panel Content`,
              },
            ]}
          />,
        );
        expect(screen.getByTestId(`h-accordion__panel`)).toHaveClass(`h-accordion__panel--modifier`);
      });
    });

    describe(`when the renderInCard prop is set to false`, () => {
      it(`should not have a card style applied via a CSS class`, () => {
        render(
          <Accordion
            renderInCard={false}
            items={[
              {
                label: `Panel Label`,
                children: `Panel Content`,
              },
            ]}
          />,
        );
        expect(screen.getByTestId(`h-accordion`)).not.toHaveClass(`h-card`);
      });
    });
  });

  describe(`DOM interactions`, () => {
    describe(`when the expand button is triggered`, () => {
      it(`should have a panel that is open/expanded`, () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        expect(screen.getByTestId(`h-accordion__panel`)).toHaveAttribute(`aria-expanded`, `true`);
      });

      it(`should have a panel with an open CSS class`, () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        expect(screen.getByTestId(`h-accordion__panel`)).toHaveClass(`h-accordion__panel--open`);
      });

      it(`should have a panel with a collapse button`, async () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        await screen.findByRole(`button`, { name: `Collapse` });
        expect(screen.queryByRole(`button`, { name: `Expand` })).not.toBeInTheDocument();
      });

      it(`should have a panel with a collapse icon on the right`, () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        expect(screen.getByTestId(`h-accordion__panel__icon-right`)).toHaveClass(`h-icon-minus`);
      });

      it(`should have a panel with visible children content`, () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        expect(screen.getByText(`Panel Content`)).toBeVisible();
      });

      it(`should have a panel with content with opened/expanded styles applied`, async () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        await waitFor(() => {
          expect(screen.getByTestId(`h-accordion__panel__content`)).not.toHaveStyle(`height: 0px`);
        });
        expect(screen.getByTestId(`h-accordion__panel__content`)).toHaveStyle(`visibility: visible`);
        expect(screen.getByTestId(`h-accordion__panel__content`)).toHaveStyle(`opacity: 1`);
      });
    });

    describe(`when the collapse button is triggered`, () => {
      it(`should have a panel that is collapsed/closed`, () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        expect(screen.getByTestId(`h-accordion__panel`)).toHaveAttribute(`aria-expanded`, `true`);
        fireEvent.click(screen.getByRole(`button`, { name: `Collapse` }));
        expect(screen.getByTestId(`h-accordion__panel`)).toHaveAttribute(`aria-expanded`, `false`);
      });

      it(`should have a panel with an expand button`, () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        fireEvent.click(screen.getByRole(`button`, { name: `Collapse` }));
        expect(screen.getByRole(`button`, { name: `Expand` })).toBeInTheDocument();
      });

      it(`should have a panel with an expand icon on the right`, () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        expect(screen.getByTestId(`h-accordion__panel__icon-right`)).toHaveClass(`h-icon-minus`);
        fireEvent.click(screen.getByRole(`button`, { name: `Collapse` }));
        expect(screen.getByTestId(`h-accordion__panel__icon-right`)).toHaveClass(`h-icon-add`);
      });

      it(`should have a panel with no visible children content`, () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        expect(screen.getByText(`Panel Content`)).toBeVisible();
        fireEvent.click(screen.getByRole(`button`, { name: `Collapse` }));
        expect(screen.queryByText(`Panel Content`)).not.toBeVisible();
      });

      it(`should have a panel with content with closed/collapsed styles applied`, () => {
        setup();
        fireEvent.click(screen.getByRole(`button`, { name: `Expand` }));
        fireEvent.click(screen.getByRole(`button`, { name: `Collapse` }));
        expect(screen.getByTestId(`h-accordion__panel__content`)).toHaveStyle(`height: 0px`);
        expect(screen.getByTestId(`h-accordion__panel__content`)).toHaveStyle(`visibility: hidden`);
        expect(screen.getByTestId(`h-accordion__panel__content`)).toHaveStyle(`opacity: 0`);
      });
    });
  });
});
