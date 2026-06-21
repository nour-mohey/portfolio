/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#000000",
        surface: "#0a0a0a",
        surface2: "#111111",
        line: "rgba(255,255,255,0.08)",
        ink: "#E7EBF3",
        muted: "#8A93A6",
        indigo: {
          500: "#6366F1",
          400: "#818CF8",
        },
        cyan: {
          400: "#22D3EE",
        },
        violet: {
          400: "#A78BFA",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
        "grad-violet": "linear-gradient(135deg, #A78BFA 0%, #6366F1 100%)",
        "grad-radial-hero":
          "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(34,211,238,0.12), transparent 40%), radial-gradient(circle at 50% 90%, rgba(167,139,250,0.10), transparent 45%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,0.25)",
        card: "0 8px 30px rgba(0,0,0,0.35)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
