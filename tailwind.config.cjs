const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
	// content: [],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},

		colors: {
			primary: colors.red,
			secondary: colors.amber,
			gray: colors.stone,
			white: colors.white,
			transparent: 'transparent',
			current: 'currentColor'
		},

		fontFamily: {
			// sans: ['Pushster', 'cursive'],
			sans: ['Roboto'],
			fancy: ['Rubik']
		}
	},
	plugins: []
};
