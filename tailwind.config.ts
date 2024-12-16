import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        quicksand: ['"Quicksand"', 'sans-serif'], // Para texto moderno y ligero
        rem: ['"REM"', 'sans-serif'], // Fuente específica para diseño estilizado
        murecho: ['"Murecho"', 'sans-serif'], // Fuente japonesa estilizada
        poppins: ['"Poppins"', 'sans-serif'], // Fuente minimalista y profesional
        alfaSlabOne: ['"Alfa Slab One"', 'serif'], // Fuente para títulos destacados
      },
    },
  },
  plugins: [],
} satisfies Config;
