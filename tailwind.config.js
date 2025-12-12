/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimalist SlimDose Theme
        'theme-bg': '#FFFFFF',      // White
        'theme-text': '#1A1A1A',    // Soft Black
        'theme-accent': '#1A1A1A',  // Black for primary actions
        'theme-secondary': '#F0E6D2', // Beige

        // Mapping standard colors to the new theme for compatibility
        primary: {
          50: '#FFFFFF',
          100: '#F9F9F9',
          200: '#F0E6D2', // Beige
          300: '#E0D0B0',
          400: '#C0B090',
          500: '#1A1A1A', // Dark
          600: '#151515',
          700: '#101010',
          800: '#0A0A0A',
          900: '#000000',
        },
        // Deprecating gold but mapping to secondary/accent to prevent breaks
        gold: {
          50: '#FFFFFF',
          100: '#FDFCF8',
          200: '#F8F4EA',
          300: '#F0E6D2', // Beige
          400: '#E0D0B0',
          500: '#C0B090',
          600: '#A09070',
          700: '#807050',
          800: '#605030',
          900: '#1A1A1A',
        },
        accent: {
          light: '#F0E6D2', // Beige
          DEFAULT: '#1A1A1A', // Black
          dark: '#000000',
          white: '#ffffff',
          black: '#1A1A1A',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'medium': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 25px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
