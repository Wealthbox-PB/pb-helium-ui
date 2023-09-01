import React from 'react';
interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
    complete?: boolean;
    label?: string;
    onClick?: () => void;
}
declare const ProgressBar: ({ currentStep, totalSteps, complete, label, }: ProgressBarProps) => React.JSX.Element;
export { ProgressBar };
