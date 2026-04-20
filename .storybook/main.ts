import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/components/composite/**/*.stories.@(ts|tsx)', '../src/components/ui/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
};

export default config;
