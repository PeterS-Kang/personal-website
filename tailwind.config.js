// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',  // For the app router (Next.js 13)
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}', // If you're still using any pages directory
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          serif: ['Lora', 'serif'],
        },
        animation: {
            'spin-slow': 'spin 4s linear infinite',
          },
      },
    },
    plugins: [],
  };
  