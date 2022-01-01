// theme.ts
import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  fontSize: {
    default: '8px',
  },
  fonts: {
    default: 'Montserrat, sans-serif',
    title: 'Mouse Memoirs, sans-serif',
  },
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#FFFFFF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    background: {
      primary: '#ffffff',
      secondary: '#000000',
      red: '#A4251D',
      blue: '#18A0FB',
      variant: '',
    },
  },
}
