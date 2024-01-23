import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Switch as HeadlessUiSwitch } from '@headlessui/react';

interface SwitchProps {
  /** Aria label for the switch. Defaults to On/Off depending on the switch's checked value */
  ariaLabel?: string;
  /** Controls whether the switch is checked or not. */
  checked?: boolean;
  /**
   * Sets the default checked value for the switch. Cannot be updated using an external state after the component is mounted.
   * @deprecated `defaultValue` prop is deprecated. Please use the `checked` prop instead.
   */
  defaultValue?: boolean;
  /** Controls whether the switch is disabled or not. */
  disabled?: boolean;
  /** Name for the hidden input. */
  name?: string;
  /** Callback function when the switch is changed. */
  onChange?: (value: boolean) => void;
  /** Controls the color of the switch. */
  variant?: `primary` | `positive`;
}

export const Switch = ({
  ariaLabel,
  // DEPRECATION NOTICE: we should default checked to false once we remove defaultValue
  checked,
  defaultValue = false,
  disabled = false,
  name,
  onChange,
  variant = `primary`,
}: SwitchProps) => {
  const [on, setOn] = useState(checked || defaultValue);

  useEffect(() => {
    if (checked === undefined) {
      return;
    }
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
