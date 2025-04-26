import { defineConfig } from "tailwindcss";
export default defineConfig({
    content:[
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/formkit/**/*.js',
    ],
    safelist:[
        {
            pattern:/^formkit-/,
        },
    ],
    theme:{
        extend: {},
    },
    plugins:[
        require('@formkit/tailwindcss'),
    ],
})