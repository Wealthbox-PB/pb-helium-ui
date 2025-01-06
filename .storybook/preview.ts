import type { Preview } from '@storybook/react';
import '../scss/helium.scss';
import '../scss/reset.scss';

const preview: Preview = {
  parameters: {
    backgrounds: { default: 'white', values: [{ name: 'white', value: '#f5f5f5' }] },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
