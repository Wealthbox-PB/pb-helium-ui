import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from '../../ts/components/Label';


describe(`<Label />`, () => {
  describe(`The "children" prop`, () => {
    it(`should set the inner contents of the label element when it is rendered.`, () => {
      render(<Label>Test Label</Label>);
      expect(screen.getByTestId(`h-label`)).toHaveTextContent(`Test Label`);
    });
  });

  // describe(`The "variant" prop`, () => {
  //   it(`should set style variations on the ProgressBar.`, () => {
  //     render(<ProgressBar variant="large" completedSteps={3} totalSteps={4} ></ProgressBar>);
  //     expect(screen.getByTestId(`progress-bar-fill`)).toHaveClass(`h-progress-bar--large`);
  //   });
  // });
});
