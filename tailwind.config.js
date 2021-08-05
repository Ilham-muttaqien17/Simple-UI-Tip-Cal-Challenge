module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono","ui-monospace", "SFMono-Regular"]
      },
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "primary-cyan": "hsl(172, 67%, 45%)",
        "cyan": {
          "very-dark": "hsl(183, 100%, 15%)",
          "dark-grayish-1": "hsl(186, 14%, 43%)",
          "dark-grayish-2": "hsl(184, 14%, 56%)",
          "light-grayish-1": "hsl(185, 41%, 84%)",
          "light-grayish-2": "hsl(189, 41%, 97%)",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
