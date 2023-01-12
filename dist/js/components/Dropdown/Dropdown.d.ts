import * as React from 'react';
interface MenuItemProps {
    label: string;
    disabled?: boolean;
}
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
interface MenuProps {
    label: string;
    nested?: boolean;
    children?: React.ReactNode | string;
}
export declare const MenuComponent: React.ForwardRefExoticComponent<Omit<MenuProps & React.HTMLProps<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const Dropdown: React.ForwardRefExoticComponent<Omit<MenuProps & React.HTMLProps<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
