import React, { ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import { Switch as HeadlessUiSwitch } from '@headlessui/react';

interface SwitchProps {
  ariaLabel?: string;
  defaultValue?: boolean;
  disabled?: boolean;
  name?: string;
  variant?: `primary` | `positive`;
  onChange?: (e: ChangeEvent<HTMLInputElement> | boolean) => void;
}

export const Switch = ({
  ariaLabel,
  defaultValue = false,
  disabled = false,
  name,
  variant = `primary`,
  onChange,
}: SwitchProps) => {
  const [on, setOn] = useState(defaultValue);

  return (
    <>
      <input type="hidden" name={name} value={on.toString()} data-testid="h-switch-hidden-input" />
      <HeadlessUiSwitch
        disabled={disabled}
        checked={on}
        onChange={(e) => {
          onChange?.(e);
          setOn(!on);
        }}
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
