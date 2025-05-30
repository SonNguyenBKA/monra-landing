/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      fontSize: {
        'label-12-semi': [
          '0.75rem',
          {
            fontWeight: 600,
            lineHeight: '150%'
          }
        ]
      }
    },
    screens: {
      xs: '500px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '1440p': '1440px',
      // => @media (min-width: 1440px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
      mobile: { max: '767px' },
      'mobile-sm': { max: '375px' },
      ipad: '1025px',
    },
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.max-w-content': {
          maxWidth: '79.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      })
    }
  ],
}
