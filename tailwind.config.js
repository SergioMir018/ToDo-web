/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				belanosima: ["Belanosima-Regular", "san-serif"],
        "belanosima-bold": ["Belanosima-Bold", "sans-serif"],
        "belanosima-semibold": ["Belanosima-SemiBold", "sans-serif"],
			},
		},
	},
	plugins: [],
};

