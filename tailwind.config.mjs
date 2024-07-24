/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			title: ['Poppins', 'sans-serif'],
			body: ['Roboto', 'sans-serif'],
		}
	},
	plugins: [],
}
