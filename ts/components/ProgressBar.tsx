import React from 'react';
import classNames from 'classnames';

interface ProgressBarProps {
  /** The number of steps that have been completed. */
  completedSteps: number;
  /** Set the total number of steps. */
  totalSteps: number;
  /** Controls the variant of the progress bar. */
  variant?: `default` | `large`;
}

const ProgressBar = ({ completedSteps, totalSteps, variant = `default` }: ProgressBarProps) => (
  <div role="progressbar" className="h-progress-bar">
    <div
      data-testid="progress-bar-fill"
      style={{ width: `${percentComplete(completedSteps, totalSteps)}%` }}
      className={classNames(`h-progress-bar__fill h-color-background-blue-500`, `h-progress-bar--${variant}`)}
    ></div>
    <div className={classNames(`h-progress-bar__background`, `h-progress-bar--${variant}`)}></div>
  </div>
);

const percentComplete = (completedSteps, totalSteps) => {
  return (completedSteps / totalSteps) * 100;
};

export { ProgressBar };
