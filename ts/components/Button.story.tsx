import type { Meta, StoryObj } from '@storybook/react';
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

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: buttonVariants,
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {};
