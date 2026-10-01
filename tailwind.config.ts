import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { lg: "1120px", xl: "1200px" },
    },
    extend: {
      colors: {
        // Brand blue, built around #0E5BF9
        brand: {
          50: "#eaf1ff",
          100: "#cfe0ff",
          200: "#9fc0ff",
          300: "#6b9dff",
          400: "#3b7cff",
          500: "#0E5BF9",
          600: "#0b48c7",
          700: "#093a9f",
          800: "#072c78",
          900: "#051f56",
          950: "#03123a",
        },
        // Accent red, built around #f51024
        accent: {
          50: "#ffeaec",
          100: "#ffc9cf",
          200: "#ff9aa6",
          300: "#ff6675",
          400: "#fb3a4c",
          500: "#f51024",
          600: "#d10c1e",
          700: "#a90a18",
          800: "#800713",
          900: "#57050d",
        },
        ink: "#000000",
        mist: "#f4f6fb",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 20px 45px -15px rgba(0,0,0,0.35)",
        soft: "0 10px 30px -10px rgba(0,0,0,0.18)",
        pop: "0 0 0 3px rgba(14,91,249,0.15)",
      },
      borderRadius: {
        xl2: "1.75rem",
        xl3: "2.5rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
        kenburns: "kenburns 8s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
