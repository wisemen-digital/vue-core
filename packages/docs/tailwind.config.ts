/** @type {import('tailwindcss').Config} */
import TailwindConfig from '../components/tailwind.config'

export default {
  ...TailwindConfig,
  content: [
    '../components/src/components/**/*.{vue,ts}',
    './playground/**/*.{vue,ts}',
    './components/**/*.{vue,ts}',
    './index.html',
  ],
}
