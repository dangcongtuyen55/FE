module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#f622a4",
        dark_light: "#f5f5f5",
        dark: "#0f172a",
        light: "#ecf0f4",
        grey: "#f5f5f5",
        red_light: "#fe3464",
      },

      fontSize: {
        h1: "25px",
        h2: "22px",
        h3: "19px",
        h4: "17px",
        h5: "15px",
      },
    },
  },
  plugins: [],
};
