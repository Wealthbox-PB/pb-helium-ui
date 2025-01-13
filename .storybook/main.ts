import type { StorybookConfig } from '@storybook/react-vite';
import { UserConfig } from 'vite';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';

const config: StorybookConfig = {
  stories: ['./docs/*.mdx', '../ts/components/**/*.story.@(ts|tsx)'],
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

  viteFinal: async (config: UserConfig) => {
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
      resolve,
    };
  },
};

export default config;
