/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/**/*.{js,vue,ts}",
        "./src/layouts/**/*.vue",
        "./src/pages/**/*.vue",
        "./src/plugins/**/*.{js,ts}",
        "./src/nuxt.config.{js,ts}",
        "./src/app.vue",
        "./node_modules/flowbite/**/*.{js,ts}"
    ],
    darkMode: 'class',

    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],

}