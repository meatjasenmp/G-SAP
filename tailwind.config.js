module.exports = {
  content: ["./templates/**/*.php", "./template-parts/**/*.php", "./*.php"],
  theme: {
    screens: {
      sm: "480px",
      md: "600px",
      tablet: "767px",
      lg: "900px",
      xl: "1200px",
      xxl: "1440px",
    },
    extend: {
      fontSize: {
        "grotto-md": "2rem",
        "grotto-lg": "4.5rem",
        "grotto-xl": "3.5rem",
      },
      colors: {
        "ups-blue": "#0037BF",
        highlight: "#DDFF4D",
      },
      fontFamily: {
        magdelin: ["MagdelinRegular", "sans-serif"],
        magdelinBold: ["MagdelinBold", "sans-serif"],
      },
      lineHeight: {
        none: "0",
      },
    },
  },
  plugins: [],
};
