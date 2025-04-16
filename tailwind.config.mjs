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
        crimson: 'rgba(var(--color-crimson))',     // #D90429
        blood: 'rgba(var(--color-blood))',         // #A10000

        purewhite: 'rgba(var(--color-pure-white))', 
        offwhite: 'rgba(var(--color-off-white))',  
        lightgray: 'rgba(var(--color-light-gray))', 
        coolgray: 'rgba(var(--color-cool-gray))',   

        emerald: 'rgba(var(--color-emerald))',      
        skyblue: 'rgba(var(--color-sky-blue))',     

        textprimary: 'rgba(var(--color-text-primary))',     
        textsecondary: 'rgba(var(--color-text-secondary))', 
      },
    },
  },
  plugins: [require("daisyui")],
};
