import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				"primary": "#0E0E0E",
				"secondary": {
					100: "#7B7B7B",
					200: "#565656",
				},
				"tertiary": "#FFFFFF",
				"accent": "#F84757",
			},
		},
	},
	plugins: [
		animations
	],
}
