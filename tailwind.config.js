module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  }, daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D75F1A",
          secondary: "#000",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
