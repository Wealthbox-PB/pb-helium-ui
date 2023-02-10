import React, { useState } from 'react';
import classNames from 'classnames';
import { Switch as HeadlessUiSwitch } from '@headlessui/react';

interface SwitchProps {
  name?: string;
  ariaLabel?: string;
  defaultValue?: boolean;
  variant?: `primary` | `positive`;
}

export const Switch = ({ name, ariaLabel, defaultValue = false, variant = `primary` }: SwitchProps) => {
  const [enabled, setEnabled] = useState(defaultValue);

  return (
    <>
      <input type="hidden" name={name} value={enabled.toString()} data-testid="h-switch-hidden-input" />
      <HeadlessUiSwitch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(`h-switch`, {
          'h-switch--enabled': enabled,
          'h-switch--primary': enabled && variant === `primary`,
          'h-switch--positive': enabled && variant === `positive`,
        })}
        aria-label={setAriaLabel(ariaLabel, enabled)}
      ></HeadlessUiSwitch>
    </>
  );
};

const setAriaLabel = (ariaLabel: string | undefined, enabled: boolean): string => {
  if (ariaLabel) {
    return ariaLabel;
  }

  return enabled ? `On` : `Off`;
};
