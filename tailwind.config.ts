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
					100: "#cfd1d4",
					200: "#9fa2aa",
					300: "#6f747f",
					400: "#3f4555",
					500: "#0f172a",
					600: "#0c1222",
					700: "#090e19",
					800: "#060911",
					900: "#030508",
				},
				// surfaceMix: {
				// 	100: "#1a1625",
				// 	200: "#2f2b3a",
				// 	300: "#46424f",
				// 	400: "#5e5a66",
				// 	500: "#76737e",
				// 	600: "#908d96",
				// },
				"default-text-color": "#f1f3f5",
				"text-dimmed-1": "#E2E8F0",
				"text-dimmed-2": "#94A3B8",
				"border-custom": "#333D4D",
			},
		},
	},
	plugins: [],
};
export default config;
