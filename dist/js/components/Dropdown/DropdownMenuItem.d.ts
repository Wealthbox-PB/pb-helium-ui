import React from 'react';
interface DropdownMenuItemProps {
    label: string;
    children: JSX.Element;
}
export declare const DropdownMenuItem: ({ label, ...props }: DropdownMenuItemProps) => React.JSX.Element;
export {};
