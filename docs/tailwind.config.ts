/** @type {import('tailwindcss').Config} */
import TailwindConfig from '../packages/components/tailwind.config'

export default {
  ...TailwindConfig,
  content: [
    '../packages/components/src/components/**/*.{vue,ts}',
    './playground/**/*.{vue,ts}',
    './components/**/*.{vue,ts}',
    './icons/**/*.{vue,ts}',
    './index.html',
  ],
}
