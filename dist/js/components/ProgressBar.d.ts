import React from 'react';
interface ProgressBarProps {
    /** The number of steps that have been completed. */
    completedSteps: number;
    /** Set the total number of steps. */
    totalSteps: number;
    /** Controls the variant of the progress bar. */
    variant?: `default` | `large`;
}
declare const ProgressBar: ({ completedSteps, totalSteps, variant }: ProgressBarProps) => React.JSX.Element;
export { ProgressBar };
