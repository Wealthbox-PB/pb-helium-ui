import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Switch as HeadlessUiSwitch } from '@headlessui/react';

interface SwitchProps {
  ariaLabel?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (value: boolean) => void;
  variant?: `primary` | `positive`;
}

export const Switch = ({
  ariaLabel,
  checked = false,
  disabled = false,
  name,
  onChange,
  variant = `primary`,
}: SwitchProps) => {
  const [on, setOn] = useState(checked);

  useEffect(() => {
    setOn(checked);
  }, [checked]);

  return (
    <>
      <input type="hidden" name={name} value={on.toString()} data-testid="h-switch-hidden-input" />
      <HeadlessUiSwitch
        disabled={disabled}
        checked={on}
        onChange={(value) => {
          onChange?.(value);
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
