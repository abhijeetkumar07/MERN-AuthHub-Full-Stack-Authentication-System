/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        void: "#070812",
        ink: "#0c1020",
        aurora: "#7c3aed",
        cyan: "#22d3ee",
      },
      boxShadow: {
        glow: "0 0 50px rgba(34, 211, 238, 0.24)",
        neon: "0 0 40px rgba(124, 58, 237, 0.35)",
      },
      animation: {
        "gradient-shift": "gradientShift 12s ease infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 1.8s linear infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("light", ".light &");
    },
  ],
};
