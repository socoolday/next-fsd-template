import type { StorybookConfig } from '@storybook/nextjs-vite';

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
          'react-day-picker',
          'date-fns',
          'date-fns/locale',
          'sonner',
        ],
      },
    };
  },
};

export default config;
