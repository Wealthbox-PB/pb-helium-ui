import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeliumSpinner } from '../../ts/components/Spinner/HeliumSpinner';
import { Spinner } from '../../ts/components/Spinner/Spinner';
import { base64SpinnerImg, base64SpinnerImgDark } from '../../ts/components/Spinner/base_64_spinner_img';

describe(`<Spinner />`, () => {
  describe(`default`, () => {
    it(`should only have the default CSS classes`, () => {
      render(<Spinner />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner`, `h-line-height-1`);
      expect(screen.getByRole(`status`)).not.toHaveClass(`h-spinner--sm`, `h-spinner--lg`);
    });

    it(`should have default screen-reader text set by the screenReaderText prop`, () => {
      render(<Spinner />);
      expect(screen.getByText(`Loading`)).toBeInTheDocument();
    });

    it(`should have the default theme`, () => {
      render(<Spinner />);
      expect(screen.getByRole(`img`)).toHaveAttribute(`src`, base64SpinnerImg);
    });
  });

  describe(`when the modifierClass prop is set`, () => {
    it(`should have a CSS class for the modifierClass prop`, () => {
      render(<Spinner modifierClass="h-spinner--modifier" />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner--modifier`);
    });
  });

  describe(`when the screenReaderText prop is set`, () => {
    it(`should have screen-reader text for the screenReaderText prop`, () => {
      render(<Spinner screenReaderText="Loading..." />);
      expect(screen.getByText(`Loading...`)).toBeInTheDocument();
    });
  });

  describe(`when the size prop is set to "small"`, () => {
    it(`should have a CSS class for small sizing`, () => {
      render(<Spinner size="small" />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner--sm`);
      expect(screen.getByRole(`status`)).not.toHaveClass(`h-spinner--lg`);
    });
  });

  describe(`when the size prop is set to "large"`, () => {
    it(`should have a CSS class for large sizing`, () => {
      render(<Spinner size="large" />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner--lg`);
      expect(screen.getByRole(`status`)).not.toHaveClass(`h-spinner--sm`);
    });
  });

  describe(`when the size prop is set to "md"`, () => {
    it(`should not have a CSS class for small or large sizing`, () => {
      render(<Spinner size="md" />);
      expect(screen.getByRole(`status`)).not.toHaveClass(`h-spinner--sm`, `h-spinner--lg`);
    });
  });

  describe(`when the size prop is set to "sm"`, () => {
    it(`should have a CSS class for small sizing`, () => {
      render(<Spinner size="sm" />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner--sm`);
    });
  });

  describe(`when the size prop is set to "lg"`, () => {
    it(`should have a CSS class for large sizing`, () => {
      render(<Spinner size="lg" />);
      expect(screen.getByRole(`status`)).toHaveClass(`h-spinner--lg`);
    });
  });

  describe(`when the theme prop is set to "light"`, () => {
    it(`should use the light spinner asset`, () => {
      render(<Spinner theme="light" />);
      expect(screen.getByRole(`img`)).toHaveAttribute(`src`, base64SpinnerImg);
    });
  });

  describe(`when the theme prop is set to "dark"`, () => {
    it(`should use the dark spinner asset`, () => {
      render(<Spinner theme="dark" />);
      expect(screen.getByRole(`img`)).toHaveAttribute(`src`, base64SpinnerImgDark);
    });
  });

  describe(`when rendering the HeliumSpinner component`, () => {
    it(`should render the Spinner component`, () => {
      render(<HeliumSpinner />);
      expect(screen.getByRole(`status`)).toBeInTheDocument();
    });
  });
});
