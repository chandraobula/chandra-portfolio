/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // New Design System Colors
        "primary-bg": "#F6F7F5",
        "secondary-bg": "#EEF3ED",
        "primary-text": "#0F0F0F",
        "secondary-text": "#6B7280",
        "muted-text": "#9CA3AF",
        accent: "#C7F000",

        // Legacy aliases for gradual transition
        "dark-bg": "#F6F7F5",
        "dark-surface": "#EEF3ED",
        "dark-surface-2": "#E5E7EB",
        "text-primary": "#0F0F0F",
        "text-secondary": "#6B7280",
        "electric-blue": "#C7F000",
        "neon-violet": "#8B5CF6",
        "cyan-highlight": "#22D3EE",
        "lime-accent": "#C7F000",
        "lime-hover": "#B8F500",
      },
      fontFamily: {
        display: ["Neue Montreal", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "Monaco", "monospace"],
      },
      // 8px base grid system - mathematically consistent
      spacing: {
        18: "4.5rem", // 72px
        20: "5rem", // 80px
        24: "6rem", // 96px
        32: "8rem", // 128px
        40: "10rem", // 160px
        48: "12rem", // 192px
        64: "16rem", // 256px
        80: "20rem", // 320px
        96: "24rem", // 384px
        112: "28rem", // 448px
        128: "32rem", // 512px
      },
      // Golden ratio typography scale
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px - Golden ratio from 30px
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
        "8xl": ["6rem", { lineHeight: "1" }], // 96px - Hero size
        "9xl": ["8rem", { lineHeight: "1" }], // 128px
      },
      maxWidth: {
        "8xl": "1320px",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { "box-shadow": "0 0 5px rgba(79, 156, 255, 0.5)" },
          "100%": { "box-shadow": "0 0 20px rgba(79, 156, 255, 0.8)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #4F9CFF 0%, #8B5CF6 50%, #22D3EE 100%)",
      },
    },
  },
  plugins: [],
};
