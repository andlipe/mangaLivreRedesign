import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-size: ${(props) => props.theme.fontSize.default};
        font-family: ${(props) => props.theme.fonts.default};
    }

    body { 
        background: ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.common.white};
        font-family: sans-serif;
        margin: 0;
    }

    h1 {
        color: ${(props) => props.theme.palette.primary.contrastText};
        font-size: 4rem;
    }

    button {
        appearance: unset;
        border: none;

    }
`
