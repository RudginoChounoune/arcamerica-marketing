/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
      extend: {
        colors: {
          brand:      "#AE2029",            // #AE2029
          "brand-foreground": "#FFFFFF",
          accent:      "var(--accent)",             // e.g. #102E4A
        },
        fontFamily: {
          sans: ["Inter", "ui-sans-serif", "system-ui"],
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"),         // for your login/contact forms later
      require("@tailwindcss/typography"),    // if you build a blog page
    ],
  }
  