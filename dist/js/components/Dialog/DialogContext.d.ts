import React from 'react';
export declare const DialogContext: React.Context<{
    ariaLabelSelector: string;
    ariaDescriptionSelector: string;
    closeDialog: () => void;
}>;
export declare function useDialogContext(): {
    ariaLabelSelector: string;
    ariaDescriptionSelector: string;
    closeDialog: () => void;
};
