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
			},
			lineHeight: {
				'large': '3.5rem',
				'medium': '2.5rem',
				'small': '2rem'
			}
		},
		fontSize: {
			'3xl': '1.5rem',
			'4xl': '2rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		}
	},
	variants: {},
	plugins: [],
};
