/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yes: '#00ff00',
        no: '#ff3333',
        info: '#00d4ff',
        main: 'var(--text-main)',
        secondary: 'var(--text-secondary)',
        active: 'var(--bg-active)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Monaco', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#00ff00',
          secondary: '#00d4ff',
          accent: '#9333ea',
          'primary-content': '#000000',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#00ff00',
          secondary: '#00d4ff',
          accent: '#9333ea',
          'base-100': '#050810',
          'base-200': '#0d1117',
          'base-300': '#151b23',
          'primary-content': '#000000',
        },
      },
    ],
  },
};




































