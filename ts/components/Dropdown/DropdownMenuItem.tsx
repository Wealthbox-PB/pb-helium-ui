import React from 'react';

export const DropdownMenuItem = ({ label, onClick }) => {
  return (
    <li className={`h-dropdown__menu__item `}>
      <button onClick={onClick} tabIndex={-1}>
        {label}
      </button>
    </li>
  );
};
