import { Meta } from '@storybook/react';
import { ComponentProps, ComponentType } from 'react';

export const hideControl = <T extends ComponentType>(
  ...exclude: (keyof ComponentProps<T>)[]
): Meta<T>['parameters'] => {
  return {
    controls: {
      exclude,
    },
  };
};
