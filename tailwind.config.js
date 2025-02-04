/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './data/**/*.{js,ts,jsx,tsx,mdx}',
        './lib/gallery/**/*.{html,js,tsx}',
        './src/**/*.{html,js,tsx}',
    ],
    theme: {
        colors: {
            primary: {
                50: '#f0f9ff',
                100: '#dff1ff',
                200: '#b8e6ff',
                300: '#79d1ff',
                400: '#32bbfe',
                500: '#07a3f0',
                600: '#0082cd',
                700: '#0067a6',
                800: '#035789',
                900: '#094a73',
                950: '#062e4b',
            },
            secondary: colors.blue,
            gray: colors.gray,
            black: colors.black,
            white: colors.white,
            pink: colors.pink,
            transparent: 'transparent',
            current: 'currentColor',
        },
        extend: {
            maxWidth: {
                container: '80rem',
            },
            width: {
                'square-diagonal': (Math.sqrt(2) * 100).toFixed(2) + '%',
            },
            scale: {
                flip: '-1',
            },
            // animation: {
            //     'play-button-ping': '2s ease-in-out infinite alternate play-button-ping',
            // },
            // keyframes: {
            //     'play-button-ping': {
            //       from: { transform: 'translate(-50%, -50%) scale(1)' },
            //       to: { transform: 'translate(-50%, -50%) scale(0.9)' },
            //     }
            // }
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
}
