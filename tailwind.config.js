import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                isi: '#47663B',
                background: '#D9DCD6',
                judul: '#5F7470',
                link: '#2EA3F2',
                footer: '#0A0F29',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
};
