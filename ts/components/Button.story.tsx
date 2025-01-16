import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { hideControl } from '../../.storybook/utils/controlHelpers';
import { getHeliumTestResults } from '../../.storybook/utils/jestHelper';
import { Button } from './Button';
import { fn } from '@storybook/test';

const buttonVariants = [
  'primary',
  'secondary',
  'positive',
  'negative',
  'info',
  'magic',
  'primary-outline',
  'positive-outline',
  'secondary-outline',
  'negative-outline',
  'info-outline',
  'link-primary',
  'link-secondary',
  'border-hover',
  null,
];

const buttonSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const buttonTypes = ['button', 'submit', 'reset'];

type ButtonMeta = Meta<typeof Button>;

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [getHeliumTestResults()],
  parameters: hideControl<typeof Button>('children'),
  argTypes: {
    variant: { control: 'select', options: buttonVariants },
    size: { control: 'select', options: buttonSizes },
    type: { control: 'select', options: buttonTypes },
  },
  args: {
    children: 'Button',
    variant: 'secondary',
    active: false,
    focus: false,
    size: 'md',
    disabled: false,
    square: false,
    className: '',
    type: 'button',
    onClick: fn(),
  },
} satisfies ButtonMeta;

export const Default: StoryObj<typeof Button> = {
  parameters: hideControl<typeof Button>('square'),
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Square: StoryObj<typeof Button> = {
  render: (args) => {
    return (
      <Button {...args}>
        <span className="h-icon-add" aria-label="Add"></span>
      </Button>
    );
  },
  args: {
    children: 'Button',
    variant: 'secondary',
    square: true,
  },
};
