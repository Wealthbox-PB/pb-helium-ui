import React from 'react';
import classNames from 'classnames';
import { base64SpinnerImg, base64SpinnerImgDark } from './base_64_spinner_img';

interface SpinnerProps {
  /** Class name for styling the spinner wrapper element. */
  modifierClass?: string;
  /** Text for screen readers. */
  screenReaderText?: string;
  /** Size of the spinner. */
  size?: `sm` | `md` | `lg` | `small` | `large`;
  /** Color theme of the spinner. Dark theme returns a white graphical PNG asset. */
  theme?: `light` | `dark`;
}

const Spinner = ({
  modifierClass,
  screenReaderText = `Loading`,
  size = `md`,
  theme = `light`,
}: SpinnerProps) => {
  return (
    <div
      className={classNames(
        `h-spinner`,
        `h-line-height-1`,
        {
          [`h-spinner--${size}`]: size === `sm` || size === `lg`,
          [`h-spinner--sm`]: size === `small`,
          [`h-spinner--lg`]: size === `large`,
        },
        modifierClass,
      )}
      role="status"
    >
      <img
        src={theme === `dark` ? base64SpinnerImgDark : base64SpinnerImg}
        className="h-img-fluid"
        alt="Spinner"
        loading="eager"
      />
      <span className="visually-hidden">{screenReaderText}</span>
    </div>
  );
};

/**
 * @deprecated `HeliumSpinner` will be renamed to `Spinner` in Helium UI v3.0. Please use the `Spinner` component instead.
 */
const HeliumSpinner = ({ ...props }: SpinnerProps) => {
  return <Spinner {...props} />;
};

export { Spinner, HeliumSpinner };
