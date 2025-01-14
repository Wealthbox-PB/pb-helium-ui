import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { hideControl } from '../../.storybook/utils/controlHelpers';
import { getHeliumTestResults } from '../../.storybook/utils/jestHelper';
import { Button } from './Button';

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
} satisfies ButtonMeta;

export const Default: StoryObj<typeof Button> = {
  parameters: hideControl<typeof Button>('square'),
  args: {
    children: 'Button',
    variant: 'primary',
    active: false,
    focus: false,
    size: 'md',
    type: 'button',
    className: '',
    disabled: false,
    square: false,
  },
};

export const Square: StoryObj<typeof Button> = {
  render: (args) => {
    return (
      <Button {...args}>
        <span className="h-icon-question-mark--lg"></span>
      </Button>
    );
  },
  args: {
    children: 'Button',
    variant: 'primary',
    active: false,
    focus: false,
    size: 'md',
    type: 'button',
    className: '',
    disabled: false,
    square: true,
  },
};
