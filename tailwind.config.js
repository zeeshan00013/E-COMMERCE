const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
  flowbite.content(),
],


  theme: {
    extend: {
      width: {
        ssm: '10px', // Use colon ':' instead of equals '='
      },
      screens:{
        ssm: "490px"
      }
    },
  },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    flowbite.plugin(),

  ],
}