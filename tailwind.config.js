/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '/svg.*/',
    '/fa.*/'
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
      sans: ['Poppins']
    },
    extend: {
      colors: {
        primary: '#39b982',
        primaryShadowed: '#009e66',
        blackLighter: '#161616',
        black: '#101010',
        white: '#ffffff',
        gray: '#9f9f9f',
        textColor: '#dadada;',
        borderGray: 'rgba(255,255,255,.08)'
      }
    }
  },
  variants: {
    extends: {
      ringColor: ['hover', 'active'],
      outline: false
    }
    // backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    // borderStyle: ['hover', 'focus', 'group-hover'],
    // borderColor: ['hover', 'focus', 'group-hover'],
    // borderWidth: ['hover', 'focus', 'group-hover']
  },
  corePlugins: {
    outline: false
  }
}
