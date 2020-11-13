module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [
		'./components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'Agrandir': ['Agrandir'],
				'Agrandir-Regular': ['Agrandir-regular'],
				'Agrandir-ThinItalic': ['Agrandir-ThinItalic'],
				'Agrandir-Tight': ['Agrandir-Tight'],
			}
		},
		fontSize: {
			'AgrandirBlack': '5rem',
			'AgrandirRegular': '3rem'
		}
	},
	variants: {},
	plugins: [],
};
