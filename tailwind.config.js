/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fade: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      },
      animation: {
        'loading-bar': 'loading-bar 1s linear infinite',
        fade: 'fade 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
