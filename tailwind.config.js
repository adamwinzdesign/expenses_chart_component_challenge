/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				10: "10px",
			},
			colors: {
				cream_bg: "#F8E9DD",
				orange_main: "#EC755D",
				orange_light: "FF9B86",
				cyan: "#76B5BC",
				card_white: "#FFFBF6",
				black: "#382314",
				medium_brown: "#92857A",
			},
			height: {
				97: "97px",
				421: "421px",
				534: "534px",
			},
			width: {
				343: "343px",
			},
		},
	},
	plugins: [],
};
