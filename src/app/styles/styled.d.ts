import 'styled-components'
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    fontSize: {
      default: string
    }
    fonts: {
      default: string
      title: string
    }
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
      background: {
        primary: string
        secondary: string
        red: string
        blue: string
        variant: string
      }
    }
  }
}
