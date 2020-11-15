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
				'SpaceMono-regular': ['SpaceMono-regular'],
				'SpaceMono-italic': ['SpaceMono-italic'],
				'SpaceMono-italicBold': ['SpaceMono-italicBold'],
				'SpaceMono-bold': ['SpaceMono-bold'],
			},
			lineHeight: {
				'large': '3.5rem',
				'medium': '2.5rem',
				'small': '2rem'
			},
			width: {
				'TapeBox': '1030px',
				'TapeBox-medium': '950px',
			}
		},
		fontSize: {
			'xl': '1.25rem',
			'3xl': '1.5rem',
			'4xl': '2rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
		boxShadow: {
			shadowBox: '8px 9px 0px #000000'
		},
		height: {
			formElementSmall: '48px',
			formElementBig:'64px',
			fullvertical: '100vh',
			tapeBox: '500px',
			fullHeight: '100%',
		}
	},
	variants: {},
	plugins: [],
};
