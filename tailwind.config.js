/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f2c244',
        'primary-light': '#f8e7b3',
        'dark-bg': '#0f1720',
        'dark-accent': '#1f2933',
        'soft-bg': '#0b0d0f',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'parallax': 'parallax 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #f2c244, 0 0 10px #f2c244, 0 0 15px #f2c244' },
          '100%': { boxShadow: '0 0 10px #f2c244, 0 0 20px #f2c244, 0 0 30px #f2c244' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
