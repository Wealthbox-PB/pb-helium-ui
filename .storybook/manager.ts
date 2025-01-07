import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const THEME_BASE = 'light';
const TITLE = 'Helium UI';
const BACKGROUND_COLOR = '#106ed405';

const theme = create({
  base: THEME_BASE,
  brandTitle: TITLE,
  appBg: BACKGROUND_COLOR,
});

addons.setConfig({ theme });
