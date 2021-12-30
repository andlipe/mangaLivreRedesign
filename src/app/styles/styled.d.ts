import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    fontSize: {
        default: string,
        h1: string,
      },
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
   }
  }
}