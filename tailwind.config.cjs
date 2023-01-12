/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true
			},
			colors: {
				"Almost-White": "hsl(0, 0%, 98%)",
				"Medium-Gray": "hsl(0, 0%, 41%)",
				"Almost-Black": "hsl(0, 0%, 8%)",
			},
			fontFamily: {
				'Epilogue': ['Epilogue', 'sans-serif']
			}
		},
	},
	plugins: [],
}
