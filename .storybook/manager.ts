import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Helium UI',
  appBg: '#106ed405',
});

addons.setConfig({ theme });
