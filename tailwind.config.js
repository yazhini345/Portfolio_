/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // TailwindCSS needs to scan these files for class names
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gif': "url('https://media.giphy.com/media/7b8jdNUoFBdcoILjjv/giphy.gif?cid=ecf05e473tijlvpio1ij7qh94qdn87o3wuf5f3trlo54k6np&ep=v1_gifs_related&rid=giphy.gif&ct=g')", // Custom background GIF
      },
      animation: {
        dropIn: 'dropIn 0.8s ease-out forwards', // Custom animation for the drop-in effect
        'slide-up': 'slideUp 1s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        dropIn: {
          '0%': {
            transform: 'translateY(-50px)', // Start above the element's position
            opacity: '0', // Start invisible
          },
          '100%': {
            transform: 'translateY(0)', // End in the element's final position
            opacity: '1', // End fully visible
          },
        },
      },
    },
  },
  plugins: [],
};
