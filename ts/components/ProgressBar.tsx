import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  complete?: boolean;
  label?: string;
  onClick?: () => void;
}

const ProgressBar = ({
  currentStep = 1,
  totalSteps = 4,
  complete = false,
  label,
}: ProgressBarProps) => (
  <>
    <div className="d-flex align-items-center">
      {label ?
        <div className="pe-2">
          {label}
        </div>
        :
        null
      }
      <div className="position-relative flex-grow-1">
        <div
          style={{ width: `${percentComplete(currentStep, totalSteps, complete)}%` }}
          className="h-progress-bar-fill position-absolute h-color-background-blue-500"
        ></div>
        <div className="h-progress-bar"></div>
      </div>
    </div>
  </>
);

const percentComplete = (currentStep, totalSteps, complete) => {
  if (complete) {
    return 100;
  }
  return ((currentStep + ((totalSteps - currentStep) * 0.1)) - 0.5) / totalSteps * 100;
};

export { ProgressBar };
