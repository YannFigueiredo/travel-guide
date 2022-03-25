import styled from 'styled-components';

export const ContainerIntro = styled.section`
    padding: 60px 20px 0 20px;
`

export const Presentation = styled.div`
    h1{
        font-size: 3.5em;
    }

    h1 span{
        color: rgb(242, 83, 83);
    }

    p{
        color: rgba(34, 34, 34, 0.7);
        margin-top: 30px;
        margin-bottom: 40px;
        font-size: 1.2em;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
    }

    div div{
        border: 2px solid rgba(34, 34, 34, 0.1); 
        margin-bottom: 7px;
        padding: 8px 10px 8px 10px;
        min-width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    div input{
        border: none;
        outline: none;
        padding: 8px;
        font-size: 1.1em;
    }

    div input::placeholder{
        color: rgba(34, 34, 34, 0.6);
    }

    div input:focus input::placeholder{
        color: red;
    }

    div .btn-category, div .btn-position{
        border: 2px solid rgba(34, 34, 34, 0.1); 
        padding: 12px;
        box-sizing: content-box;
        margin-right: 7px;
        cursor: pointer;
    }
`

export const Cards = styled.div`

`