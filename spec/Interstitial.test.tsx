import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Interstitial } from '../ts/components/Interstitial';

const interstitialContent = `No results matched the selected criteria.`;

const setup = () => render(<Interstitial>{interstitialContent}</Interstitial>);

describe(`<Interstitial />`, () => {
  describe(`default`, () => {
    it(`should not have a CSS class for animation`, () => {
      setup();
      expect(screen.getByTestId(`h-interstitial`)).not.toHaveClass(`h-animate-fade-in`);
    });

    it(`should not have a CSS class for sizing`, () => {
      setup();
      expect(screen.getByTestId(`h-interstitial`)).not.toHaveClass(`h-interstitial--sm`);
    });

    it(`should have a default icon`, () => {
      setup();
      expect(screen.getByTestId(`h-interstitial__icon`)).toHaveClass(`h-icon-b-wealthbox`);
    });

    it(`should have children`, () => {
      setup();
      expect(screen.getByText(interstitialContent)).toBeInTheDocument();
    });
  });

  describe(`when the animate prop is set to true`, () => {
    it(`should have a CSS class for animation`, () => {
      render(<Interstitial animate={true}>{interstitialContent}</Interstitial>);
      expect(screen.getByTestId(`h-interstitial`)).toHaveClass(`h-animate-fade-in`);
    });
  });

  describe(`when the size prop is set to "small"`, () => {
    it(`should have a CSS class for small sizing`, () => {
      render(<Interstitial size={`small`}>{interstitialContent}</Interstitial>);
      expect(screen.getByTestId(`h-interstitial`)).toHaveClass(`h-interstitial--sm`);
    });
  });

  describe(`when the className prop is set`, () => {
    it(`should have a CSS class for the className`, () => {
      render(<Interstitial className="h-interstitial--modifier">{interstitialContent}</Interstitial>);
      expect(screen.getByTestId(`h-interstitial`)).toHaveClass(`h-interstitial--modifier`);
    });
  });

  describe(`when the iconClassName prop is set`, () => {
    it(`should have a CSS class for an icon`, () => {
      render(<Interstitial iconClassName="h-icon-exclamation-circle">{interstitialContent}</Interstitial>);
      expect(screen.getByTestId(`h-interstitial__icon`)).toHaveClass(`h-icon-exclamation-circle`);
    });
  });

  describe(`when the contentClassName prop is set`, () => {
    it(`should have a CSS class for the content`, () => {
      render(
        <Interstitial contentClassName="h-interstitial__content--modifier">
          {interstitialContent}
        </Interstitial>
      );
      expect(screen.getByTestId(`h-interstitial__content`)).toHaveClass(`h-interstitial__content--modifier`);
    });
  });
});
