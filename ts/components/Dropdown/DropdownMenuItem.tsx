import React, { Children, cloneElement } from 'react';
import { useListItem } from '@floating-ui/react';

interface DropdownMenuItemProps {
  label: string;
  children: JSX.Element;
}

export const DropdownMenuItem = ({ label, ...props }: DropdownMenuItemProps) => {
  const { ref } = useListItem({ label });

  return (
    <li {...props}>
      {cloneElement(Children.only(props.children), {
        className: props.children.props.className,
        ref,
      })}
    </li>
  );
};
