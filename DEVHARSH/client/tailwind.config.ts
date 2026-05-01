import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        card: 'rgba(15, 23, 42, 0.7)',
        primary: {
          DEFAULT: '#0ea5e9',
          glow: '#38bdf8',
        },
        secondary: {
          DEFAULT: '#a855f7',
          glow: '#c084fc',
        },
        accent: {
          DEFAULT: '#10b981',
          glow: '#34d399',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(14, 165, 233, 0.5), 0 0 20px rgba(14, 165, 233, 0.3)',
        'neon-purple': '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)',
      }
    },
  },
  plugins: [],
}
export default config
