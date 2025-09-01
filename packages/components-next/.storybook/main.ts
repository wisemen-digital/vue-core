import type { StorybookConfig } from '@storybook/vue3-vite';
import { resolve } from 'node:path';
import { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/vue3-vite'),
    "options": {}
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const tailwindcss = await import('@tailwindcss/vite');
    
    return mergeConfig(config, {
      plugins: [
        tailwindcss.default(),
      ],
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/styles/index.css";`
          }
        }
      }
    });
  }
};
export default config;