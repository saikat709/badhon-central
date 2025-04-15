/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      crimson: 'rgb(var(--color-crimson))',       // #D90429
        blood: 'rgb(var(--color-blood))',           // #A10000

        purewhite: 'rgb(var(--color-pure-white))',  // #FFFFFF
        offwhite: 'rgb(var(--color-off-white))',    // #F9FAFB or #111827 (dark)
        lightgray: 'rgb(var(--color-light-gray))',  // #F1F5F9 or #374151 (dark)
        coolgray: 'rgb(var(--color-cool-gray))',    // #6B7280 or #D1D5DB (dark)

        emerald: 'rgb(var(--color-emerald))',       // #10B981
        skyblue: 'rgb(var(--color-sky-blue))',      // #38BDF8

        textprimary: 'rgb(var(--color-text-primary))',     // #1F2937 or #D1D5DB
        textsecondary: 'rgb(var(--color-text-secondary))', // #6B7280 or #9CA3AF
    },
  },},
  plugins: [require("daisyui")],
};
