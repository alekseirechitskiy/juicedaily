import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
     
    *,
    *::before,
    *::after{
        box-sizing: inherit;
    }

    body{
        font-family: 'Poppins';
        font-weight: 400;
        color: #121212;
    }

    p{
        margin: 0;
        padding: 0;
    }

    img{
        max-width: 100%;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    .container{
        max-width: 1180px;
        padding: 0 10px;
        margin: 0 auto;
    }

`;
