/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yes: '#ffffff',
        no: '#000000',
        info: '#6b7280',
        main: 'var(--text-main)',
        secondary: 'var(--text-secondary)',
        active: 'var(--bg-active)',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'Monaco', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#000000',
          secondary: '#6b7280',
          accent: '#d1d5db',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#f3f4f6',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#ffffff',
          secondary: '#9ca3af',
          accent: '#374151',
          'base-100': '#000000',
          'base-200': '#0a0a0a',
          'base-300': '#1a1a1a',
        },
      },
    ],
  },
};



























