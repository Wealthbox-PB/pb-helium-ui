import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { LinkButton } from '../../ts/components/LinkButton';

const href = `#test`;
const setup = (props?) => {
  render(
    <LinkButton href={href} {...props}>
      Click Me
    </LinkButton>,
  );
};

describe(`<LinkButton />`, () => {
  describe(`default UI`, () => {
    it(`should not have an active CSS className for active styling`, () => {
      setup();
      expect(screen.getByRole(`link`)).not.toHaveClass(`h-btn--active`);
    });

    it(`should not have a focus CSS className for focus styling`, () => {
      setup();
      expect(screen.getByRole(`link`)).not.toHaveClass(`h-btn--focus`);
    });

    it(`should have a medium CSS className for medium sizing`, () => {
      setup();
      expect(screen.getByRole(`link`)).toHaveClass(`h-btn--md`);
    });

    it(`should not have a square CSS className for square styling`, () => {
      setup();
      expect(screen.getByRole(`link`)).not.toHaveClass(`h-btn--square`);
    });

    it(`should have a positive CSS className for positive styling`, () => {
      setup();
      expect(screen.getByRole(`link`)).toHaveClass(`h-btn--positive`);
    });

    it(`should not have a target attribute`, () => {
      setup();
      expect(screen.getByRole(`link`)).not.toHaveAttribute(`target`);
    });

    it(`should not have a rel attribute`, () => {
      setup();
      expect(screen.getByRole(`link`)).not.toHaveAttribute(`rel`);
    });

    it(`should have an href attribute`, () => {
      setup();
      expect(screen.getByRole(`link`)).toHaveAttribute(`href`, `#test`);
    });
  });

  describe(`props`, () => {
    describe(`active`, () => {
      it(`should have an active CSS className for active styling`, () => {
        setup({ active: true });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--active`);
      });
    });

    describe(`children`, () => {
      it(`should render the string`, () => {
        setup();
        expect(screen.getByRole(`link`)).toHaveTextContent(`Click Me`);
      });

      it(`should render the JSX elements`, () => {
        render(
          <LinkButton href={href}>
            <span>Click</span>
            <span> Me</span>
          </LinkButton>,
        );
        expect(screen.getByRole(`link`)).toHaveTextContent(`Click Me`);
      });

      it(`should render the JSX element`, () => {
        render(
          <LinkButton href={href}>
            <span>Click Me</span>
          </LinkButton>,
        );
        expect(screen.getByRole(`link`)).toHaveTextContent(`Click Me`);
      });
    });

    describe(`className`, () => {
      it(`should have a CSS className for the className prop`, () => {
        setup({ className: `test-class` });
        expect(screen.getByRole(`link`)).toHaveClass(`test-class`);
      });
    });

    describe(`focus`, () => {
      it(`should have a focus CSS className for focus styling`, () => {
        setup({ focus: true });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--focus`);
      });
    });

    describe(`href`, () => {
      it(`should have an href attribute`, () => {
        setup();
        expect(screen.getByRole(`link`)).toHaveAttribute(`href`, `#test`);
      });
    });

    describe(`isExternal`, () => {
      it(`should have a target attribute`, () => {
        setup({ isExternal: true, href: `http://www.wealthbox.com` });
        expect(screen.getByRole(`link`)).toHaveAttribute(`target`, `_blank`);
      });

      it(`should have a rel attribute`, () => {
        setup({ isExternal: true, href: `http://www.wealthbox.com` });
        expect(screen.getByRole(`link`)).toHaveAttribute(`rel`, `noopener noreferrer`);
      });
    });

    describe(`onClick`, () => {
      it(`should call the onClick function`, async () => {
        const onClick = jest.fn();
        setup({ onClick });
        await userEvent.click(screen.getByRole(`link`));
        expect(onClick).toHaveBeenCalled();
      });
    });

    describe(`size`, () => {
      it(`should have an extra small CSS className for extra small sizing`, () => {
        setup({ size: `xs` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--xs`);
      });

      it(`should have a small CSS className for small sizing`, () => {
        setup({ size: `sm` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--sm`);
      });

      it(`should have a medium CSS className for medium sizing`, () => {
        setup({ size: `md` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--md`);
      });

      it(`should have a large CSS className for large sizing`, () => {
        setup({ size: `lg` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--lg`);
      });

      it(`should have an extra large CSS className for extra large sizing`, () => {
        setup({ size: `xl` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--xl`);
      });
    });

    describe(`square`, () => {
      it(`should have a square CSS className for square styling`, () => {
        setup({ square: true });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--square`);
      });
    });

    describe(`variant`, () => {
      it(`should have a primary CSS className for primary styling`, () => {
        setup({ variant: `primary` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--primary`);
      });

      it(`should have a secondary CSS className for secondary styling`, () => {
        setup({ variant: `secondary` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--secondary`);
      });

      it(`should have a positive CSS className for positive styling`, () => {
        setup({ variant: `positive` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--positive`);
      });

      it(`should have a negative CSS className for negative styling`, () => {
        setup({ variant: `negative` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--negative`);
      });

      it(`should have an info CSS className for info styling`, () => {
        setup({ variant: `info` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--info`);
      });

      it(`should have a magic CSS className for magic styling`, () => {
        setup({ variant: `magic` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--magic`);
      });

      it(`should have a primary-outline CSS className for primary outline styling`, () => {
        setup({ variant: `primary-outline` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--primary-outline`);
      });

      it(`should have a secondary-outline CSS className for secondary outline styling`, () => {
        setup({ variant: `secondary-outline` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--secondary-outline`);
      });

      it(`should have a negative-outline CSS className for negative outline styling`, () => {
        setup({ variant: `negative-outline` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--negative-outline`);
      });

      it(`should have an info-outline CSS className for info outline styling`, () => {
        setup({ variant: `info-outline` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--info-outline`);
      });

      it(`should have a link-primary CSS className for link primary styling`, () => {
        setup({ variant: `link-primary` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--link-primary`);
      });

      it(`should have a link-secondary CSS className for link secondary styling`, () => {
        setup({ variant: `link-secondary` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--link-secondary`);
      });

      it(`should have a border-hover CSS className for border hover styling`, () => {
        setup({ variant: `border-hover` });
        expect(screen.getByRole(`link`)).toHaveClass(`h-btn--border-hover`);
      });

      it(`should not have a CSS className for a null variant`, () => {
        setup({ variant: null });
        expect(screen.getByRole(`link`)).not.toHaveClass(`h-btn--null`);
      });
    });
  });
});
