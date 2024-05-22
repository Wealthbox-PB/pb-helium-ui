import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Portal } from '../../ts/components/Portal';

describe(`<Portal />`, () => {
  describe(`default UI`, () => {
    it(`should render the component inside the document body`, () => {
      render(
        <Portal>
          <h1>Portal Content</h1>
        </Portal>,
      );
      expect(document.body).toContainElement(screen.getByRole(`heading`, { name: `Portal Content` }));
    });
  });

  describe(`props`, () => {
    describe(`children`, () => {
      it(`should have a JSX element`, () => {
        render(
          <Portal>
            <h1>Portal Content</h1>
          </Portal>,
        );
        expect(screen.getByRole(`heading`, { name: `Portal Content` })).toBeInTheDocument();
      });

      it(`should have JSX elements`, () => {
        render(
          <Portal>
            <h1>Portal Content</h1>
            <button>Click Me</button>
          </Portal>,
        );
        expect(screen.getByRole(`heading`, { name: `Portal Content` })).toBeInTheDocument();
        expect(screen.getByRole(`button`, { name: `Click Me` })).toBeInTheDocument();
      });
    });

    describe(`selector`, () => {
      let container: HTMLDivElement | null = null;

      beforeEach(() => {
        container = document.createElement(`div`);
        container.id = `test-container`;
        document.body.appendChild(container);
      });

      afterEach(() => {
        if (container) {
          document.body.removeChild(container);
          container = null;
        }
      });

      it(`should render the Portal component and its content inside the selected DOM node`, () => {
        const testMessage = `Portal Content`;
        const { unmount } = render(
          <Portal selector="#test-container">
            <h1>{testMessage}</h1>
          </Portal>,
        );
        expect(container?.textContent).toBe(testMessage);
        unmount();
      });
    });

    describe(`className`, () => {
      it(`should have a CSS className`, () => {
        render(
          <Portal className="test-class">
            <h1>Portal Content</h1>
          </Portal>,
        );
        const portal = screen.getByRole(`heading`, { name: `Portal Content` }).parentElement;
        expect(portal).toHaveClass(`test-class`);
      });
    });
  });
});
