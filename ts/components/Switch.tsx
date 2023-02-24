import React, { useState } from 'react';
import classNames from 'classnames';
import { Switch as HeadlessUiSwitch } from '@headlessui/react';

interface SwitchProps {
  ariaLabel?: string;
  defaultValue?: boolean;
  disabled?: boolean;
  name?: string;
  variant?: `primary` | `positive`;
}

export const Switch = ({
  ariaLabel,
  defaultValue = false,
  disabled = false,
  name,
  variant = `primary`,
}: SwitchProps) => {
  const [on, setOn] = useState(defaultValue);

  return (
    <>
      <input type="hidden" name={name} value={on.toString()} data-testid="h-switch-hidden-input" />
      <HeadlessUiSwitch
        disabled={disabled}
        checked={on}
        onChange={setOn}
        className={classNames(`h-switch`, {
          'h-switch--on': on,
          'h-switch--primary': on && variant === `primary`,
          'h-switch--positive': on && variant === `positive`,
        })}
        aria-label={setAriaLabel(ariaLabel, on)}
      ></HeadlessUiSwitch>
    </>
  );
};

const setAriaLabel = (ariaLabel: string | undefined, on: boolean): string => {
  if (ariaLabel) {
    return ariaLabel;
  }

  return on ? `On` : `Off`;
};
