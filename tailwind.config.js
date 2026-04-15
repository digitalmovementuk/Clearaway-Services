/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        clearaway: {
          cyan: '#00A3EE',
          cyanDark: '#007CB6',
          blue: '#0056A7',
          navy: '#09034D',
          ink: '#0F172A',
          green: '#6BBC05',
          greenDark: '#3D7E00',
          mist: '#F4F9FC',
          line: '#D7E7F1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        clean: '0 18px 50px rgba(9, 3, 77, 0.14)',
      },
    },
  },
  plugins: [],
}
