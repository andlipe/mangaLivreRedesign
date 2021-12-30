import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body { 
        background: ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.common.white};
        font-family: sans-serif;
    }

    h1 {
        color: ${(props) => props.theme.palette.primary.contrastText};
        font-size: ${(props) => props.theme.fontSize.h1};
    }
`
