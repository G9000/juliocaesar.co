const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                basicSans: ["basic-sans", ...defaultTheme.fontFamily.sans],
                karminaSans: "karmina-sans",
            },
        },
        corePlugins: {
            aspectRatio: false,
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
