import React from 'react';
interface ProgressBarProps {
    completedSteps: number;
    totalSteps: number;
    variant?: `default` | `large`;
}
declare const ProgressBar: ({ completedSteps, totalSteps, variant }: ProgressBarProps) => React.JSX.Element;
export { ProgressBar };
