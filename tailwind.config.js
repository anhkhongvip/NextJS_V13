/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary-color': '#475BE8',
      'secondary-color': '#DADEFA',
      'secondary-color-2': '#CFC8FF',
      'white-color': '#FCFCFC',
      'text-primary-color': '#11142D',
      'text-second-color': '#808191',
      'bg-color': '#F4F4F4',
      'gray-1': '#E4E8EF',
      'divider-color': '#E4E4E4',
      'hover-color': '#F7F7F7',
      'bg-color-dark': '#111315',
      'black-color': '#1A1D1F',
      'text-color-dark': '#EFEFEF',
      'second-color-dark': '#6F767E',
      'divider-color-dark': '#272B30'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      padding: {
        '18px_15px': '18px 15px'
      },
      gap: {
        '10px': '10px'
      }
    },
  },
  plugins: [],
}