import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProgressBar } from '../../ts/components/ProgressBar';


describe(`<ProgressBar />`, () => {
  describe(`The progress bar fill width`, () => {
    it(`should be equal to the percent of completed steps.`, () => {
      render(<ProgressBar completedSteps={3} totalSteps={4} ></ProgressBar>);
      expect(screen.getByTestId(`progress-bar-fill`).style.width).toBe(`75%`);
    });
  });

  describe(`The "variant" prop`, () => {
    it(`should set style variations on the ProgressBar.`, () => {
      render(<ProgressBar variant="large" completedSteps={3} totalSteps={4} ></ProgressBar>);
      expect(screen.getByTestId(`progress-bar-fill`)).toHaveClass(`h-progress-bar--large`);
    });
  });
});
