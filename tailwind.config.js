module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        xl: '1000px',
      },
    },
    extend: {
      fontFamily: {
        // sans: ['Graphik', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
        display: ['Staatliches', 'sans'],
        psycho: ['Hi Melody', 'cursive'],
        anchor: ['Special Elite', 'cursive'],
        tag: ['Barriecito', 'cursive'],
      },
      colors: {
        red: '#e51c34',
        highlighter: '#f6e900',
        sky: '#87ceeb',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
