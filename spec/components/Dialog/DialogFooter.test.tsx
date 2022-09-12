import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DialogFooter } from '../../../ts/components/Dialog/DialogFooter';

let dialogFooterContent;
const setup = () => render(<DialogFooter>{dialogFooterContent}</DialogFooter>);

describe(`<DialogFooter />`, () => {
  describe(`default`, () => {
    it(`should have a CSS class for footerBackground`, () => {
      setup();
      expect(screen.getByRole(`contentinfo`)).toHaveClass(`h-dialog__footer--with-background`);
    });

    it(`should not have children`, () => {
      dialogFooterContent = ``;
      setup();
      expect(screen.queryByTestId(`h-dialog__footer-cta-container`)).not.toBeInTheDocument();
    });
  });

  describe(`when the children prop is set`, () => {
    it(`should have children`, () => {
      dialogFooterContent = `Copyright Wealthbox. All rights reserved.`;
      setup();
      expect(screen.getByTestId(`h-dialog__footer-cta-container`)).toBeInTheDocument();
      expect(screen.getByText(dialogFooterContent)).toBeInTheDocument();
    });
  });

  describe(`when the footerBackground prop is set to false`, () => {
    it(`should not have a CSS class for footerBackground`, () => {
      render(<DialogFooter footerBackground={false}>{dialogFooterContent}</DialogFooter>);
      expect(screen.queryByRole(`contentinfo`)).not.toHaveClass(`h-dialog__footer--with-background`);
    });
  });

  describe(`when the footerClassName prop is set`, () => {
    it(`should have a CSS class for footerClassName`, () => {
      render(<DialogFooter footerClassName="h-dialog__footer--modifier">{dialogFooterContent}</DialogFooter>);
      expect(screen.getByRole(`contentinfo`)).toHaveClass(`h-dialog__footer--modifier`);
    });
  });
});
