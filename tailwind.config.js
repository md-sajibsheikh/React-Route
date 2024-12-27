/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Make sure to include your root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, TSX files in the src folder
  ],
  theme: {
    extend: {
      // Example of extending the theme with custom colors
      colors: {
        "custom-blue": "#1D4ED8",
        "custom-green": "#10B981",
      },
      // Example of extending spacing, fontSize, etc.
      spacing: {
        128: "32rem", // Add a custom spacing value
      },
      fontSize: {
        xxs: "0.65rem", // Adding custom font size
      },
    },
  },
  plugins: [
    
  ],
};
