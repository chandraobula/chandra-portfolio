/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark background system
        'dark-bg': '#242424',
        'dark-surface': '#121826',
        'dark-surface-2': '#161B2E',
        
        // Accent system
        'electric-blue': '#4F9CFF',
        'neon-violet': '#8B5CF6',
        'cyan-highlight': '#22D3EE',
        
        // Typography
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Space Grotesk', 'Inter Tight', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      // 8px base grid system - mathematically consistent
      spacing: {
        '18': '4.5rem',   // 72px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
        '40': '10rem',    // 160px
        '48': '12rem',    // 192px
        '64': '16rem',    // 256px
        '80': '20rem',    // 320px
        '96': '24rem',    // 384px
        '112': '28rem',   // 448px
        '128': '32rem',   // 512px
      },
      // Golden ratio typography scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],    // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
        '5xl': ['3rem', { lineHeight: '1' }],          // 48px - Golden ratio from 30px
        '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],        // 72px
        '8xl': ['6rem', { lineHeight: '1' }],          // 96px - Hero size
        '9xl': ['8rem', { lineHeight: '1' }],          // 128px
      },
      maxWidth: {
        '8xl': '1320px',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': { 
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgba(79, 156, 255, 0.5)' },
          '100%': { 'box-shadow': '0 0 20px rgba(79, 156, 255, 0.8)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #4F9CFF 0%, #8B5CF6 50%, #22D3EE 100%)',
      }
    },
  },
  plugins: [],
}