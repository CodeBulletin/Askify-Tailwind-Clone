module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        screens: {
            xs: '100px',
            sm: '400px',
            md: '768px',
            lg: '1080px',
            xl: '1440px',
            xxl: '2160px'
        },
        extend: {
            colors: {
                askifyBGYello: '#f2f0e3',
                askifyGrayishYello: 'hsl(55, 22%, 89%)',
                askifyBrightYello: 'hsl(62, 55%, 87%)',
                askifyWhite: 'hsl(55, 52%, 96%)',
                textPurple: 'hsl(300, 46%, 34%)'
            }
        },
    },
    plugins: [],
  }