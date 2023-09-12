import React from 'react';
import classNames from 'classnames';

interface LabelProps {
  htmlFor?: string;
  labelText: string;
  labelClassName?: string;
}

const Label = ({
  htmlFor,
  labelText,
  labelClassName,
}: LabelProps) => (
  <label
    data-testid="h-label"
    className={classNames(`h-input-label`, labelClassName)}
    htmlFor={htmlFor}>
    {labelText}
  </label>
);

export { Label };
