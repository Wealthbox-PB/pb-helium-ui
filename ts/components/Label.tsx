import React from 'react';
import classNames from 'classnames';

interface LabelProps {
  children: string | JSX.Element | JSX.Element[];
  htmlFor?: string;
  labelClassName?: string;
}

const Label = ({ children, htmlFor, labelClassName }: LabelProps) => (
  <label className={classNames(`h-form-label`, labelClassName)} htmlFor={htmlFor}>
    {children}
  </label>
);

export { Label };
