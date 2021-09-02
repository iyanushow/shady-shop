import { DefaultTheme } from 'styled-components';
export const theme: DefaultTheme = {
  font: {
    family: "'Open Sans', sans-serif",
    size: {
      default: '0.938rem',
      large: '3rem',
      medium: '1.5rem',
      small: '1.25rem',
      tiny: '.75rem',
    },
    weight: {
      semi: 600,
      bold: 700,
    },
  },
  color: {
    mainColor: '#E55947',
    mainColorAlt: '#D2321E',
    white: '#FAFAFF',
    dark: '#101010',
    darkAlt: '#606060',
    gray: '#F0F1F3',
  },
  margin: {
    m1: '.5rem',
    m2: '1rem',
    m3: '1.5rem',
    m4: '2rem',
  },
  header: {
    headerHeight: '3rem',
  },
  body: { maxWidth: '1440px' },
};
