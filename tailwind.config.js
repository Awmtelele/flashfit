/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          light: '#FFD700',
          dark: '#9A7B0A',
          muted: '#B8962E',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          100: '#111111',
          200: '#1A1A1A',
          300: '#222222',
          400: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A227 0%, #FFD700 50%, #9A7B0A 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,162,39,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201,162,39,0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
