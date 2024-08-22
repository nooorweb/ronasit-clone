module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#26a0f8',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        transitionTimingFunction: {
          'ease-out-custom': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        },
        transitionDuration: {
          'slow': '2000ms', // 2 seconds for slower transition
        },
      }
      ,
      
      fontSize: {
        'psize': '2.5em',      
        'rh-size': '3.25em',    
        'client-size': '2.75em',
        'counter-size': '3.25em',
        'acy-size': '1.575em',
        'acy-sizeres': '1.7em',
        'circle-size': '11px',
        'service-size': '1.7rem',
        'services-size': '2.57rem',
            'footer-size': '1rem'
        

        
      },
      spacing: {
        'customtop': '-20px',
        'left': '-40px',
         'leftplay':"56px",
         'darkheight':"15px",
         'size':"40px",
         'border':'1px',
         'ph':'5px',
         'pw':'20px'


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
        'acc-colres': ' 1fr '
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
