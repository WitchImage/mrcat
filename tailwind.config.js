/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                nblue: {
                    DEFAULT: "#3700CF",
                    100: "#4100F5",
                    200: "#3E00E8",
                    300: "#3700CF",
                    400: "#1C0069",
                    500: "#150050",
                },
                npurple: {
                    DEFAULT: "#3F0071",
                    100: "#8700F5",
                    200: "#8000E8",
                    300: "#7200CF",
                    400: "#3F0071",
                    500: "#3A0069",
                },
                npink: {
                    DEFAULT: "#E8236E",
                    100: "#FB2576",
                    200: "#D92167",
                    300: "#E8236E",
                    400: "#CF1F62",
                    500: "#691032",
                },
            }
        },
    },
    plugins: [],
};