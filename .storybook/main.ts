import type { StorybookConfig } from '@storybook/react-vite';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';

const config: StorybookConfig = {
  stories: ['./docs/*.mdx', '../ts/components/**/*.story.@(ts|tsx)'],
  // the order of the addons matters
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-jest',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
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

  viteFinal: async (config) => {
    const PUBLIC_DIR = 'fonts';

    const plugins = [...(config.plugins || []), markdown({ mode: [Mode.HTML, Mode.TOC, Mode.REACT] })];

    const build = {
      ...config.build,
      assetsInlineLimit: 0,
    };

    const css = {
      ...config.css,
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

    const resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@components': '/ts/components',
        '@helpers': '/ts/helpers',
        '@hooks': '/ts/hooks',
        '@types': '/ts/types',
      },
    };

    return {
      ...config,
      build,
      css,
      plugins,
      publicDir: PUBLIC_DIR,
      define: {
        ...config.define,
        process: { env: {} },
      },
      resolve,
    };
  },
};

export default config;
