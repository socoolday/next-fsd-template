import type { StorybookConfig } from '@storybook/nextjs-vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: [
    "../public"
  ],
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': path.resolve(__dirname, '../src'),
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include ?? []),
          '@radix-ui/react-radio-group',
          '@radix-ui/react-slider',
          '@radix-ui/react-alert-dialog',
          '@radix-ui/react-popover',
          '@radix-ui/react-accordion',
          '@radix-ui/react-progress',
          '@radix-ui/react-scroll-area',
          '@radix-ui/react-toast',
          '@radix-ui/react-toggle',
          '@radix-ui/react-toggle-group',
          '@radix-ui/react-navigation-menu',
          '@radix-ui/react-context-menu',
          '@radix-ui/react-hover-card',
          '@radix-ui/react-collapsible',
          '@radix-ui/react-aspect-ratio',
          'react-day-picker',
          'date-fns',
          'date-fns/locale',
          'sonner',
          'vaul',
          'cmdk',
        ],
      },
    };
  },
};

export default config;
