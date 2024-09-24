import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// color palette from: https://colorffy.com/dark-theme-generator
				primary: {
					100: "#382bf0",
					200: "#5e43f3",
					300: "#7a5af5",
					400: "#9171f8",
					500: "#a688fa",
					600: "#ba9ffb",
				},
				surface: {
					100: "#121212",
					200: "#282828",
					300: "#3f3f3f",
					400: "#575757",
					500: "#717171",
					600: "#8b8b8b",
				},
				surfaceMix: {
					100: "#1a1625",
					200: "#2f2b3a",
					300: "#46424f",
					400: "#5e5a66",
					500: "#76737e",
					600: "#908d96",
				},
        "default-text-color": "#f1f3f5"
			},
		},
	},
	plugins: [],
};
export default config;
