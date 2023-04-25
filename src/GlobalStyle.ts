import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --azul: #3494E4;
        --azul-claro: #6AB3F8;
        --azul-escuro: #144FC6;
        --branco: #fdfdfd;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: var(--azul);
    }
`