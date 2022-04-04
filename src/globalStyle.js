import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h1 span, h2 span, h3 span{
        font-family: 'Barlow', sans-serif;
        font-weight: 900;
        color: #222222;
    }

    h2{
        font-size: 2em;
    }

    a{
        text-decoration: none;
        color: rgba(34, 34, 34, 0.7);
    }

    button{
        background-color: rgb(242, 83, 83);
        border: none;
        padding: 15px 20px 15px 20px;
        min-width: 180px;
        color: white;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 1.1em;
    }
`

export default globalStyles;