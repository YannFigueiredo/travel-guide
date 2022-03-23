import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
    }

    h1, h2{
        font-family: 'Barlow', sans-serif;
        font-weight: 900;
        color: #222222;
    }

    a{
        text-decoration: none;
        color: rgba(34, 34, 34, 0.7);
    }
`

export default globalStyles;