import { Meta, StoryObj } from '@storybook/react/*';
import React from 'react';
import { Button } from './Button';
import { Interstitial } from './Interstitial';

export default {
  title: 'Components/Interstitial',
  component: Interstitial,
  render: ({ children, ...args }) => {
    return (
      <Interstitial iconClassName="h-icon-b-wealthbox" {...args}>
        <p style={{ marginBottom: '1rem' }}>No results match the selected criteria.</p>
        <Button>Go to homepage</Button>
      </Interstitial>
    );
  },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof Interstitial>;

export const Default: StoryObj<typeof Interstitial> = {};
