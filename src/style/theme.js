export default {
  font: ['Lato', 'Merriweather'],
  colors: {
    ghost: 'transparent',
    neutral0: '#ffffff',
    neutral300: '#DADADA',
    neutral500: '#C5CEE0',
    neutral900: '#333333',
    red400: '#EA8079',
    red500: '#E2645A',
    red700: '#e74c3c',
    aqua500: '#86D0CB',
    pink500: '#DB5D79',
    yellow500: '#FFB854',
  },
  button: {
    default: {
      padding: '0.75rem 1.5rem',
    },
  },
  heading: {
    h1: {
      min: '24px',
      max: '40px',
    },
    h2: {
      min: 24,
      max: 48,
    },
    h3: {
      min: 24,
      max: 24,
    },
    h4: {
      min: 24,
      max: 24,
    },
    h5: {
      min: 24,
      max: 24,
    },
    h6: {
      min: 24,
      max: 24,
    },
  },
  awesomegrid: {
    mediaQuery: 'only screen',
    columns: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
    gutterWidth: {
      xs: 2,
      sm: 2,
      md: 2,
      lg: 2,
      xl: 2,
    },
    paddingWidth: {
      xs: 1.5,
      sm: 1.5,
      md: 1,
      lg: 1,
      xl: 1,
    },
    container: {
      xs: 'full', // 'full' = max-width: 100%
      sm: 55, // max-width: 880px
      md: 60, // max-width: 960px
      lg: 73, // max-width: 1168px
      xl: 75, // max-width: 1200px
    },
    breakpoints: {
      xs: 1,
      sm: 48, // 768px
      md: 62, // 992px
      lg: 75, // 1200px
      xl: 90, // 1440px
    },
  },
}
