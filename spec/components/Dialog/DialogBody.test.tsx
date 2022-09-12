import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DialogBody } from '../../../ts/components/Dialog/DialogBody';

const dialogBodyContent = `Are you sure you want to perform this action?`;
const setup = () => render(<DialogBody>{dialogBodyContent}</DialogBody>);

describe(`<DialogBody />`, () => {
  describe(`default`, () => {
    it(`should have children`, () => {
      setup();
      expect(screen.getByText(dialogBodyContent)).toBeInTheDocument();
    });
  });

  describe(`when the bodyClassName prop is set`, () => {
    it(`should have a CSS class for bodyClassName`, () => {
      render(<DialogBody bodyClassName="h-dialog__body--modifier">{dialogBodyContent}</DialogBody>);
      expect(screen.getByTestId(`h-dialog__body`)).toHaveClass(`h-dialog__body--modifier`);
    });
  });

  describe(`when the ariaDescriptionSelector prop is set`, () => {
    it(`should have an id attribute with the ariaDescriptionSelector`, () => {
      render(<DialogBody ariaDescriptionSelector="h-dialog-body-aria">{dialogBodyContent}</DialogBody>);
      expect(screen.getByTestId(`h-dialog__body`)).toHaveAttribute(`id`, `h-dialog-body-aria`);
    });
  });
});
