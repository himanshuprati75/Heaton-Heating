/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heatonGreen: {
          50: '#f0f7f3',
          100: '#dceddf',
          200: '#bddcb4',
          300: '#93c4a2',
          400: '#64a57b',
          500: '#3d8558',
          600: '#2e6b45',
          700: '#255437',
          800: '#1f432d',
          900: '#183625', // Wisconsin Spruce Pine
          950: '#0a1c13', // Midnight Pine Depth
        },
        frostCyan: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7', // Cool Arctic Air
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        fireOrange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c', // Emergency Furnace Heat
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        amberGold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

