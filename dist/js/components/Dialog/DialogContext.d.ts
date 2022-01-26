import React from 'react';
export declare const DialogContext: React.Context<{
    ariaDescriptionSelector: string;
    ariaLabelSelector: string;
    closeDialog: () => void;
}>;
export declare function useDialogContext(): {
    ariaDescriptionSelector: string;
    ariaLabelSelector: string;
    closeDialog: () => void;
};
