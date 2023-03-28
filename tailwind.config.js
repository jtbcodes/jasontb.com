module.exports = {
  content: ['./src/**/*.{md,astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', "sans-serif"],
      }
    }
  },
  daisyui: {
    themes: [
      {
        mydark: {
          "primary": "#374151",
          "secondary": "#3b82f6",
          "accent": "#fde047",
          "neutral": "#374151",
          "base-100": "#111827",
          "info": "#bfdbfe",
          "success": "#16a34a",
          "warning": "#dc2626",
          "error": "#dc2626",
          "--btn-text-case": "none",
        },
      },
      {
        mylight: {
          "primary": "#d1d5db",
          "secondary": "#93c5fd",
          "accent": "#fde047",
          "neutral": "#d1d5db",
          "base-100": "#f3f4f6",
          "info": "#bfdbfe",
          "success": "#4ade80",
          "warning": "#dc2626",
          "error": "#dc2626",
          "--btn-text-case": "none",
        },
      },
    ]
  }
}
