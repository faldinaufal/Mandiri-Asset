module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {lg: "1050px", md: { max: "1050px" }, sm: { max: "550px" }, },
    extend: {
      colors: {
        blue___main: "var(--blue___main)",
        neutral: { white: "var(--neutral_white)" },
        text: { default: "var(--text_default)", disable: "var(--text_disable)" },
        yellow___main: "var(--yellow___main)",
        amber: { 500: "var(--amber_500)", 600: "var(--amber_600)" },
        black: {
          900: "var(--black_900)",
          "900_0c": "var(--black_900_0c)",
          "900_0f": "var(--black_900_0f)",
          "900_19": "var(--black_900_19)",
        },
        blue: { 50: "var(--blue_50)", 400: "var(--blue_400)", 700: "var(--blue_700)" },
        blue_gray: {
          50: "var(--blue_gray_50)",
          100: "var(--blue_gray_100)",
          800: "var(--blue_gray_800)",
          "50_01": "var(--blue_gray_50_01)",
          "50_02": "var(--blue_gray_50_02)",
        },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          300: "var(--gray_300)",
          700: "var(--gray_700)",
          900: "var(--gray_900)",
          "100_01": "var(--gray_100_01)",
          "200_01": "var(--gray_200_01)",
          "200_02": "var(--gray_200_02)",
          "300_01": "var(--gray_300_01)",
          "50_01": "var(--gray_50_01)",
          "900_01": "var(--gray_900_01)",
        },
        green: { 300: "var(--green_300)" },
        indigo: {
          50: "var(--indigo_50)",
          100: "var(--indigo_100)",
          900: "var(--indigo_900)",
          "100_01": "var(--indigo_100_01)",
          "900_00": "var(--indigo_900_00)",
          "900_01": "var(--indigo_900_01)",
        },
        red: { 500: "var(--red_500)", 600: "var(--red_600)" },
        teal: { 50: "var(--teal_50)" },
        white: { a700: "var(--white_a700)" },
        yellow: { 700: "var(--yellow_700)" },
      },
      boxShadow: { xs: "0 4px 16px 0 #0000000f", sm: "0 4px 16px 0 #0000000c", md: "0 4px 16px 0 #00000019" },
      fontFamily: {
        manrope: "Manrope",
        ibmplexsans: "IBM Plex Sans",
        notosans: "Noto Sans",
        inter: "Inter",
        sen: "Sen",
        roboto: "Roboto",
      },
      backgroundImage: { gradient: "radial-gradient(84deg, #0c396d,#0c396d00)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
