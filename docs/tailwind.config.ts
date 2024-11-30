/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default {
  content: [
    './playground/**/*.{vue,ts}',
    './components/**/*.{vue,ts}',
    './demos/**/*.{vue,ts}',
    './icons/**/*.{vue,ts}',
    './index.html',
    './.vitepress/**/*.{vue,ts}',
  ],
} satisfies Config
