/** @type {import('tailwindcss').Config} */
import TailwindConfig from '../components/tailwind.config'

export default {
  ...TailwindConfig,
  content: [
    '../components/src/components/**/*.{vue,ts}',
    './src/**/*.{vue,ts}',
    './index.html',
  ],
}
