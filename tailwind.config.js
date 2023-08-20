/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
        },
        background: '#1F1F1F',
        foreground: '#FFFFFF',
        primary: '#5865f2',
      },
    }
  },
  plugins: []
};