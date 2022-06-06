const path = require("path");
const fromRoot = (p) => path.join(__dirname, p);
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
            backgroundImage: {
                "grid-tile-light": "url('/grid-tiles-light.svg')",
                "grid-tile": "url('/grid-tiles.svg')",
            },
        },
        corePlugins: {
            aspectRatio: false,
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
