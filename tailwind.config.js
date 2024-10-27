/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,css,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#cda719', // Add the custom gold color
                },
            },
        },
    },
};

