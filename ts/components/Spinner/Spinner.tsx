import React from 'react';
import classNames from 'classnames';
import { base64SpinnerImg, base64SpinnerImgDark } from './base_64_spinner_img';

export interface SpinnerProps {
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
  const parsedSize = size === `small` ? `sm` : size === `large` ? `lg` : size;

  return (
    <div
      className={classNames(
        `h-spinner`,
        `h-line-height-1`,
        {
          [`h-spinner--${parsedSize}`]: size !== `md`,
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

export { Spinner };
