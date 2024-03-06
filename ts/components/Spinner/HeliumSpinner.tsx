import React from 'react';
import { Spinner, SpinnerProps } from './Spinner';

/**
 * @deprecated `HeliumSpinner` will be renamed to `Spinner` in Helium UI v3.0.
 * Please use the `Spinner` component instead.
 */
const HeliumSpinner = ({ ...props }: SpinnerProps) => {
  return <Spinner {...props} />;
};

export { HeliumSpinner };
