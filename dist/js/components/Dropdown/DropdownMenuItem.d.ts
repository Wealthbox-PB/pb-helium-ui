import React from 'react';
interface DropdownMenuItemProps {
    label: string;
    onClick: () => void;
    variant?: `default` | `negative`;
}
export declare const DropdownMenuItem: ({ label, onClick, variant, ...props }: DropdownMenuItemProps) => React.JSX.Element;
export {};
