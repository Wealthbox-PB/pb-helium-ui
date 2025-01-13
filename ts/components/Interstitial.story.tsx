import { Meta, StoryObj } from '@storybook/react/*';
import React from 'react';
import { hideControl } from '../../.storybook/utils/controlHelpers';
import { Button } from './Button';
import { Interstitial } from './Interstitial';

const Example = ({ ...args }) => {
  return (
    <Interstitial iconClassName="h-icon-b-wealthbox" {...args}>
      <p className="mb-3">No results match the selected criteria.</p>
      <Button>Go to homepage</Button>
    </Interstitial>
  );
};
export default {
  title: 'Components/Interstitial',
  component: Interstitial,
  render: Example,
  parameters: hideControl<typeof Interstitial>('children'),
  argTypes: { size: { control: 'select', options: ['small', undefined] } },
} satisfies Meta<typeof Interstitial>;

export const Default: StoryObj<typeof Interstitial> = {
  args: {
    className: '',
    contentClassName: '',
    iconClassName: 'h-icon-b-wealthbox',
    size: undefined,
  },
};
