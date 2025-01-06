import type { StorybookConfig } from '@storybook/react-vite';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';

const config: StorybookConfig = {
  stories: [
    './Introduction.mdx',
    '../ts/components/**/*.story.@(js|jsx|mjs|ts|tsx)',
    '../ts/components/**/*.mdx',
  ],
  addons: ['@storybook/addon-onboarding', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: { builder: {} },
  },
  staticDirs: [
    {
      from: '../fonts',
      to: '/fonts',
    },
  ],
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins || []), markdown({ mode: [Mode.HTML, Mode.TOC, Mode.REACT] })];

    config.publicDir = 'fonts';

    config.build = {
      ...config.build,
      assetsInlineLimit: 0,
    };

    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: `
          $icons_preprocessor_path: "/fonts";
          @function font-url($url) {
              @return url($url);
          }
        `,
        },
      },
    };

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@components': '/ts/components',
        '@helpers': '/ts/helpers',
        '@hooks': '/ts/hooks',
        '@types': '/ts/types',
      },
    };

    return config;
  },
};

export default config;
