import React from 'react';
import classNames from 'classnames';

interface LabelProps {
  /** Content for the label. */
  children: string | JSX.Element | JSX.Element[];
  /** Sets the `htmlFor` of the label. */
  htmlFor?: string;
  /** Adds class names to the label. */
  labelClassName?: string;
}

const Label = ({ children, htmlFor, labelClassName }: LabelProps) => (
  <label className={classNames(`h-form-label`, labelClassName)} htmlFor={htmlFor}>
    {children}
  </label>
);

export { Label };
