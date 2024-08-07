module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#26a0f8',
      },
      fontSize: {
        'psize': '2.5em',       // Custom font size
        'rh-size': '3.25em',    // Custom font size
        'client-size': '2.75em',// Custom font size
        'counter-size': '3.25em',// Custom font size
        'acy-size': '1.875em'// Custom font size
        
      },
      spacing: {
        'customtop': '-20px',
        'left': '-40px',
         'leftplay':"56px"

      },
      minHeight: {
        'box-height': '299px', // Custom min-height
      },
      maxWidth: {
        'cbox-width': '269px',
        'box-width': '600px',  // Custom max-width
      },
      gridTemplateColumns: {
        'cols-layout': '1fr 1fr 4fr 1fr 1fr',
        'acc-cols': '0.5fr 1fr 1fr',
      },
      gridTemplateRows: {
        'rows-layout': '100px 100px 100px',
      },
      width: {
        'width': '200px',
      },
      inset: {
        '-100': '-25rem', // Adjust the value to fit your design needs
      },
    },
  },
  plugins: [],
};
