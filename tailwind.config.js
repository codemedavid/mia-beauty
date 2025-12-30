/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MIA BEAUTY - Minimal Luxury Beauty Theme
        'theme-bg': '#FBF6F0',           // Soft Cream - Main background
        'theme-text': '#6F6A64',         // Warm Greige - Primary text
        'theme-accent': '#D6B87C',       // Champagne Gold - Primary accent
        'theme-accent-hover': '#C5A96A', // Taupe Gold - Hover states
        'theme-secondary': '#EAD6CF',    // Blush Nude - Soft accent
        'text-secondary': '#8A847D',     // Lighter greige - Secondary text

        // Gold scale (Primary Accent)
        gold: {
          50: '#FDF9F3',
          100: '#FAF0E1',
          200: '#F5E4C8',
          300: '#EDD5A8',
          400: '#E3C48A',
          500: '#D6B87C', // Champagne Gold - Primary
          600: '#C5A96A', // Taupe Gold
          700: '#B39755',
          800: '#9A8147',
          900: '#7D693A',
        },
        // Primary scale mapped to gold for compatibility
        primary: {
          50: '#FDF9F3',
          100: '#FAF0E1',
          200: '#F5E4C8',
          300: '#EDD5A8',
          400: '#E3C48A',
          500: '#D6B87C',
          600: '#C5A96A',
          700: '#B39755',
          800: '#9A8147',
          900: '#7D693A',
        },
        // Cream scale (Backgrounds)
        cream: {
          50: '#FEFDFB',
          100: '#FBF6F0',  // Main background
          200: '#F7F0E8',
          300: '#F2E9DE',
          400: '#EBE0D2',
          500: '#E2DED8',  // Stone
          600: '#D4CFC8',
          700: '#C5BFB7',
          800: '#B5AFA6',
          900: '#A49D94',
        },
        // Blush scale (Soft accents)
        blush: {
          50: '#FDF8F6',
          100: '#F9F0EC',
          200: '#F4E5DF',
          300: '#EAD6CF',  // Blush Nude
          400: '#DFC5BC',
          500: '#D2B3A8',
          600: '#C4A093',
          700: '#B38D7F',
          800: '#A07A6B',
          900: '#8C6758',
        },
        // Greige scale (Text)
        greige: {
          50: '#F7F6F5',
          100: '#EFEEED',
          200: '#E0DEDA',
          300: '#CFCBC5',
          400: '#B5B0A8',
          500: '#9A948B',
          600: '#8A847D',
          700: '#6F6A64',  // Primary text
          800: '#555149',
          900: '#3C3934',
        },
        // Accent colors for compatibility
        accent: {
          light: '#E3C48A',   // Light gold
          DEFAULT: '#D6B87C', // Champagne Gold
          dark: '#B39755',
          white: '#FBF6F0',   // Cream
          black: '#3C3934',   // Dark greige
        },
        // Navy mapped to greige for backward compatibility
        navy: {
          50: '#F7F6F5',
          100: '#EFEEED',
          200: '#E0DEDA',
          300: '#CFCBC5',
          400: '#B5B0A8',
          500: '#9A948B',
          600: '#8A847D',
          700: '#6F6A64',
          800: '#555149',
          900: '#3C3934',
        },
        // Magenta mapped to gold for backward compatibility
        magenta: {
          50: '#FDF9F3',
          100: '#FAF0E1',
          200: '#F5E4C8',
          300: '#EDD5A8',
          400: '#E3C48A',
          500: '#D6B87C',
          600: '#C5A96A',
          700: '#B39755',
          800: '#9A8147',
          900: '#7D693A',
        },
        // Teal mapped to gold for backward compatibility
        teal: {
          50: '#FDF9F3',
          100: '#FAF0E1',
          200: '#F5E4C8',
          300: '#EDD5A8',
          400: '#E3C48A',
          500: '#D6B87C',
          600: '#C5A96A',
          700: '#B39755',
          800: '#9A8147',
          900: '#7D693A',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(111, 106, 100, 0.04)',
        'medium': '0 4px 15px rgba(111, 106, 100, 0.06)',
        'hover': '0 8px 25px rgba(111, 106, 100, 0.08)',
        'gold': '0 4px 20px rgba(214, 184, 124, 0.15)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideIn': 'slideIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
