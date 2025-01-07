import type { Meta, StoryObj } from '@storybook/react';
import { hideControl } from '../../.storybook/utils/controlHelpers';
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
type ButtonMeta = Meta<typeof Button>;
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: buttonVariants,
    },
  },
  parameters: hideControl<typeof Button>('children'),
  args: {
    children: 'Button',
    variant: 'primary',
  },
} satisfies ButtonMeta;

export const Default: StoryObj<typeof Button> = {};
