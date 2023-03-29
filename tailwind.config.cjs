/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      lineHeight: {
        "space-heading": "38px",
        "space-subheading": "33px",
        "space-h3": "24px",
        paragraph: "25px",
        "space-h4": "20px",
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
