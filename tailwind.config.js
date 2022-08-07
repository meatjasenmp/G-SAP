module.exports = {
	content: ["./templates/**/*.php", "./template-parts/**/*.php", "./*.php", "../../plugins/**/*.js"],
	theme: {
		screens: {
			sm: "480px",
			md: "600px",
			tablet: "767px",
			lg: "900px",
			xl: "1200px",
			xxl: "1440px",
		},
		extend: {
			fontSize: {
				'grotto-md': '2rem',
				'grotto-lg': '4.5rem',
				'grotto-xl': '3.5rem',
			},
			colors: {
				"ups-blue": "#0037BF",
				"highlight": "#DDFF4D",
			},
			fontFamily: {
				gibson: ["canada-type-gibson", "sans-serif"],
				rift: ["rift", "sans-serif"],
				grotters: ["Grotters", "sans-serif"],
				qb: ["QBOneVariable", "sans-serif"],
				barlow: ["Barlow", "sans-serif"],
			},
			lineHeight: {
				none: "0",
			},
		},
	},
	plugins: [],
};
