export default {
  border: {
    radius: '0.8rem'
  },
  font: {
    family: "'Poppins', sans-serif",
    light: 300,
    normal: 400,
    semi_bold: 600,
    bold: 700
  },
  sizes: {
    xsmall: '1.2rem',
    small: '1.4rem',
    medium: '1.6rem',
    large: '1.8rem',
    xlarge: '2.0rem',
    xxlarge: '2.8rem',
    huge: '5.2rem'
  },
  colors: {
    primary: '#e6dace',
    secondary: '#f0ece6',
    lightBg: '#F2F2F2',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    yellow: '#eea302',
    red: '#ff3b25',
    blue: '#80d8da',
    darkBlue: '#0050ff',
    transparent: 'transparent'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
