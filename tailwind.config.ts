import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#1B1B1B",
                light: "#FFF",
                accent: "#7B00D3",
                accentDark: "#FFDB4D",
                gray: "#747474"
            },
            fontFamily: {
                mr: ["var(--font-mr)"],
                in: ["var(--font-in)"]
            }
        },
    },
    plugins: [],
};
export default config;


