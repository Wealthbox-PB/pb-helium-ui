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
  <>
    <div className="d-flex align-items-center">
      <div className="position-relative flex-grow-1">
        <div
          style={{ width: `${percentComplete(completedSteps, totalSteps)}%` }}
          className={classNames(`h-progress-bar-fill position-absolute h-color-background-blue-500`,
            `h-progress-bar-${variant}`)}
        ></div>
        <div className={classNames(`h-progress-bar`, `h-progress-bar-${variant}`)}></div>
      </div>
    </div>
  </>
);

const percentComplete = (completedSteps, totalSteps) => {
  return completedSteps / totalSteps * 100;
};

export { ProgressBar };
