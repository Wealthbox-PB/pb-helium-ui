import React from 'react';
import classNames from 'classnames';
import { base64SpinnerImg } from './base_64_spinner_img';

interface HeliumSpinnerProps {
  modifierClass?: string;
  screenReaderText?: string;
  size?: string;
}

const HeliumSpinner = ({
  modifierClass,
  screenReaderText = "Loading",
  size,
}: HeliumSpinnerProps) => (
  <div
    className={classNames(
      `h-spinner`,
      {
        'h-spinner--sm': size === `small`,
        'h-spinner--lg': size === `large`,
      },
      modifierClass,
      `h-line-height-1`
    )}
    role="status"
  >
    <img src={base64SpinnerImg} className="h-img-fluid" alt="Spinner" loading="eager" />
    <span className="visually-hidden">{screenReaderText}</span>
  </div>
);

export { HeliumSpinner };
