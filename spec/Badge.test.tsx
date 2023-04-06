import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from '../ts/components/Badge';

describe(`<Badge />`, () => {
  describe(`default UI`, () => {
    it(`should have text content`, () => {
      render(<Badge>Badge Content</Badge>);
      expect(screen.getByText(`Badge Content`)).toBeInTheDocument();
    });

    it(`should have "base" scale styling`, () => {
      render(<Badge>Badge Content</Badge>);
      expect(screen.getByTestId(`h-badge`)).not.toHaveClass(`h-badge--smaller`);
      expect(screen.getByTestId(`h-badge`)).not.toHaveClass(`h-badge--bigger`);
    });

    it(`should have "info" variant styling`, () => {
      render(<Badge>Badge Content</Badge>);
      expect(screen.getByTestId(`h-badge`)).toHaveClass(`h-badge--info`);
    });

    it(`should not have an icon`, () => {
      render(<Badge>Badge Content</Badge>);
      expect(screen.queryByTestId(`h-badge__icon`)).not.toBeInTheDocument();
    });
  });

  describe(`props`, () => {
    describe(`children`, () => {
      describe(`when the "children" prop is a string`, () => {
        it(`should render children`, () => {
          render(<Badge>Badge Content</Badge>);
          expect(screen.getByText(`Badge Content`)).toBeInTheDocument();
        });
      });

      describe(`when the "children" prop is an array of elements`, () => {
        it(`should render children`, () => {
          render(
            <Badge>
              <span>Badge Content 1</span>
              <span>Badge Content 2</span>
            </Badge>
          );
          expect(screen.getByText(`Badge Content 1`)).toBeInTheDocument();
          expect(screen.getByText(`Badge Content 2`)).toBeInTheDocument();
        });
      });

      describe(`when the "children" prop is an element`, () => {
        it(`should render children`, () => {
          render(
            <Badge>
              <span>Badge Content</span>
            </Badge>
          );
          expect(screen.getByText(`Badge Content`)).toBeInTheDocument();
        });
      });
    });

    describe(`when the "className" prop is passed`, () => {
      it(`should have a CSS class for the "className"`, () => {
        render(<Badge className="h-badge--modifier">Badge Content</Badge>);
        expect(screen.getByTestId(`h-badge`)).toHaveClass(`h-badge--modifier`);
      });
    });

    describe(`when the "contentClassName" prop is passed`, () => {
      it(`should have a CSS class for the "contentClassName"`, () => {
        render(<Badge contentClassName="h-badge__content--modifier">Badge Content</Badge>);
        expect(screen.getByTestId(`h-badge__content`)).toHaveClass(`h-badge__content--modifier`);
      });
    });

    describe(`when the "iconClassName" prop is passed`, () => {
      it(`should have an icon`, () => {
        render(<Badge iconClassName="h-icon-user-info">Badge Content</Badge>);
        expect(screen.getByTestId(`h-badge__icon`)).toBeInTheDocument();
      });

      it(`should have a CSS class for the "iconClassName"`, () => {
        render(<Badge iconClassName="h-icon-user-info">Badge Content</Badge>);
        expect(screen.getByTestId(`h-badge__icon`)).toHaveClass(`h-icon-user-info`);
      });
    });

    describe(`scale`, () => {
      describe(`when the "scale" prop is set to "smaller`, () => {
        it(`should have "smaller" scale styling`, () => {
          render(<Badge scale="smaller">Badge Content</Badge>);
          expect(screen.getByTestId(`h-badge`)).toHaveClass(`h-badge--smaller`);
        });
      });

      describe(`when the "scale" prop is set to "base`, () => {
        it(`should have "base" scale styling`, () => {
          render(<Badge>Badge Content</Badge>);
          expect(screen.getByTestId(`h-badge`)).not.toHaveClass(`h-badge--smaller`);
          expect(screen.getByTestId(`h-badge`)).not.toHaveClass(`h-badge--bigger`);
        });
      });

      describe(`when the "scale" prop is set to "bigger`, () => {
        it(`should have "bigger" scale styling`, () => {
          render(<Badge scale="bigger">Badge Content</Badge>);
          expect(screen.getByTestId(`h-badge`)).toHaveClass(`h-badge--bigger`);
        });
      });
    });

    describe(`variant`, () => {
      describe(`when the "variant" prop is set to "info"`, () => {
        it(`should have "info" variant styling`, () => {
          render(<Badge variant="info">Badge Content</Badge>);
          expect(screen.getByTestId(`h-badge`)).toHaveClass(`h-badge--info`);
        });
      });

      describe(`when the "variant" prop is set to "negative"`, () => {
        it(`should have "negative" variant styling`, () => {
          render(<Badge variant="negative">Badge Content</Badge>);
          expect(screen.getByTestId(`h-badge`)).toHaveClass(`h-badge--negative`);
        });
      });

      describe(`when the "variant" prop is set to "positive"`, () => {
        it(`should have "positive" variant styling`, () => {
          render(<Badge variant="positive">Badge Content</Badge>);
          expect(screen.getByTestId(`h-badge`)).toHaveClass(`h-badge--positive`);
        });
      });

      describe(`when the "variant" prop is set to "secondary"`, () => {
        it(`should have "secondary" variant styling`, () => {
          render(<Badge variant="secondary">Badge Content</Badge>);
          expect(screen.getByTestId(`h-badge`)).toHaveClass(`h-badge--secondary`);
        });
      });

      describe(`when the "variant" prop is set to "warning"`, () => {
        it(`should have "warning" variant styling`, () => {
          render(<Badge variant="warning">Badge Content</Badge>);
          expect(screen.getByTestId(`h-badge`)).toHaveClass(`h-badge--warning`);
        });
      });
    });
  });
});
