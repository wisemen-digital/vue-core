export default {
  plugins: {
    'autoprefixer': {},
    'tailwindcss': {},
    'postcss-prefix-selector': {
      prefix: ':not(:where(.vp-raw *))',
      includeFiles: [
        /vp-doc\.css/,
        /base\.css/,
      // eslint-disable-next-line ts/explicit-function-return-type
      ], transform(prefix, _selector) {
        const [
          selector,
          pseudo = '',
        ] = _selector.split(/(:\S*)$/)

        return selector + prefix + pseudo
      },
    },
  },
}
