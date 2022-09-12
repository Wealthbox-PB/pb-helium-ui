import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeliumSpinner } from '../ts/components/Spinner/Spinner';

describe(`<HeliumSpinner />`, () => {
  describe(`default`, () => {
    it(`should only have the default CSS classes`, () => {
      render(<HeliumSpinner />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner`, `h-line-height-1`);
      expect(screen.getByRole(`status`)).not.toHaveClass(`h-spinner--sm`, `h-spinner--lg`);
    });

    it(`should have default screen-reader text set by the screenReaderText prop`, () => {
      render(<HeliumSpinner />);
      expect(screen.getByText(`Loading`)).toBeInTheDocument();
    });
  });

  describe(`when the modifierClass prop is set`, () => {
    it(`should have a CSS class for the modifierClass prop`, () => {
      render(<HeliumSpinner modifierClass="h-spinner--modifier" />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner--modifier`);
    });
  });

  describe(`when the screenReaderText prop is set`, () => {
    it(`should have screen-reader text for the screenReaderText prop`, () => {
      render(<HeliumSpinner screenReaderText="Loading..." />);
      expect(screen.getByText(`Loading...`)).toBeInTheDocument();
    });
  });

  describe(`when the size prop is set to "small"`, () => {
    it(`should have a CSS class for small sizing`, () => {
      render(<HeliumSpinner size="small" />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner--sm`);
      expect(screen.getByRole(`status`)).not.toHaveClass(`h-spinner--lg`);
    });
  });

  describe(`when the size prop is set to "large"`, () => {
    it(`should have a CSS class for large sizing`, () => {
      render(<HeliumSpinner size="large" />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner--lg`);
      expect(screen.getByRole(`status`)).not.toHaveClass(`h-spinner--sm`);
    });
  });
});
