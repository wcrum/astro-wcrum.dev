module.exports = {
  content: ["./src/**/*.{astro,html,svelte,vue,cjs,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      backgroundImage: {
        'contours': "url('/public/contours.png')",
      }
    }
  },
};
