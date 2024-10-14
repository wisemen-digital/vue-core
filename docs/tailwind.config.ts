/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

import TailwindConfig from '../packages/components/tailwind.config'

export default {
  ...TailwindConfig,
  content: [
    '../packages/components/src/components/**/*.{vue,ts}',
    './playground/**/*.{vue,ts}',
    './components/**/*.{vue,ts}',
    './demos/**/*.{vue,ts}',
    './icons/**/*.{vue,ts}',
    './index.html',
    './.vitepress/**/*.{vue,ts}',
  ],
} satisfies Config
