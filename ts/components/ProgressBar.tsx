import React from 'react';
import classNames from 'classnames';

interface ProgressBarProps {
  completedSteps: number;
  totalSteps: number;
  variant?: `default` | `large`;
}

const ProgressBar = ({
  completedSteps,
  totalSteps,
  variant = `default`,
}: ProgressBarProps) => (
  <div
    role="progressbar"
    className="h-progress-bar">
    <div
      data-testid="progress-bar-fill"
      style={{ width: `${percentComplete(completedSteps, totalSteps)}%` }}
      className={classNames(`h-progress-bar__fill h-color-background-blue-500`,
        `h-progress-bar--${variant}`)}
    ></div>
    <div className={classNames(`h-progress-bar__background`, `h-progress-bar--${variant}`)}></div>
  </div>
);

const percentComplete = (completedSteps, totalSteps) => {
  return completedSteps / totalSteps * 100;
};

export { ProgressBar };
