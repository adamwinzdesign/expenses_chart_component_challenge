/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				logo: "url(./images/logo.svg)",
			},
			borderRadius: {
				10: "10px",
			},
			colors: {
				cream_bg: "#F8E9DD",
				orange_main: "#EC755D",
				orange_light: "FF9B86",
				cyan: "#76B5BC",
				light_cyan: "#B4E0E5",
				card_white: "#FFFBF6",
				black: "#382314",
				medium_brown: "#92857A",
			},
			fontFamily: {
				sans: ["DM Sans", "sans-serif"],
			},
			fontSize: {
				font15: "15px",
				font24: "24px",
				font30: "30px",
			},
			height: {
				63: "63px",
				97: "97px",
				177: "177px",
				201: "201px",
				225: "225px",
				421: "421px",
				534: "534px",
			},
			lineHeight: {
				31: "31px",
				39: "39px",
			},
			spacing: {
				38: "38px",
				52: "52px",
			},
			width: {
				72: "72px",
				343: "343px",
			},
		},
	},
	plugins: [],
};
