import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from '../../ts/components/Label';


describe(`<Label />`, () => {
  describe(`The "children" prop`, () => {
    it(`should set the inner contents of the label element when it is rendered.`, () => {
      render(<Label>Test Label</Label>);
      expect(screen.getByText(`Test Label`)).toHaveTextContent(`Test Label`);
    });
  });

  describe(`The "htmlFor" prop`, () => {
    it(`should set the "for" attribute on the label element when it is rendered.`, () => {
      render(<Label htmlFor="test-id">Test Label</Label>);
      expect(screen.getByText(`Test Label`)).toHaveAttribute(`for`, `test-id`);
    });
  });

  describe(`The "labelClassName" prop`, () => {
    it(`should set custom class names on the label element when it is rendered.`, () => {
      render(<Label labelClassName="test-class">Test Label</Label>);
      expect(screen.getByText(`Test Label`)).toHaveClass(`test-class`);
    });
  });
});
