import React from 'react';
interface DropdownMenuItemProps {
    label: string;
    onSelect: () => void;
    variant?: `normal` | `negative`;
}
export declare const DropdownMenuItem: ({ label, onSelect, variant }: DropdownMenuItemProps) => React.JSX.Element;
export {};
