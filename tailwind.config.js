module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			transitionProperty: {
				"height":"height"
			}
		},
	},
	variants: {
		extend: {},
		container: []
	},
	plugins: [],
};
