import styled from 'styled-components';
import bg from '../../../../assets/intro-bg.jpg';

export const ContainerIntro = styled.section`
    padding: 120px 20px 0 20px;

    @media screen and (min-width: 992px) {
        padding: 120px 40px 30px 40px;
    }
`

export const Presentation = styled.div`
    div:nth-child(1) h1{
        font-size: 3.5em;
    }

    div:nth-child(1) h1 span{
        color: rgb(242, 83, 83);
    }

    div:nth-child(1) p{
        color: rgba(34, 34, 34, 0.7);
        margin-top: 30px;
        margin-bottom: 40px;
        font-size: 1.2em;
    }

    div:nth-child(1) div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
    }

    div:nth-child(1) div div{
        border: 2px solid rgba(34, 34, 34, 0.1); 
        margin-bottom: 7px;
        padding: 8px 10px 8px 10px;
        min-width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    div:nth-child(1) div input{
        border: none;
        outline: none;
        padding: 8px;
        font-size: 1.1em;
    }

    div:nth-child(1) div input::placeholder{
        color: rgba(34, 34, 34, 0.6);
    }

    div:nth-child(1) div input:focus input::placeholder{
        color: red;
    }

    div:nth-child(1) div .btn-category, div .btn-position{
        border: 2px solid rgba(34, 34, 34, 0.1); 
        padding: 12px;
        box-sizing: content-box;
        margin-right: 7px;
        cursor: pointer;
    }

    @media screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 10px;

        div:nth-child(2){
            background-image: url(${bg});
            background-size: cover;
            background-position: center center;
        }
    }

    @media screen and (min-width: 1200px) {
        div:nth-child(1) div{
            justify-content: space-between;
            border: 2px solid rgba(34, 34, 34, 0.1); 
        }

        div:nth-child(1) div div{
            border: none; 
            margin-bottom: 0;
            min-width: auto;
        }

        div:nth-child(1) div .btn-category, div .btn-position{
            border: none;
            padding: 6px;
            margin-right: 0;
        }

        div:nth-child(1) div button{
            height: 100%;
        }
    }
`

export const Cards = styled.div`
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
        

    div{
        margin-bottom: 50px;
    }

    div img{
        width: 100%;
    }

    div h3{
        text-transform: uppercase;
        font-size: 1.4em;
        margin-top: 15px;
    }

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;

        div{
            margin-bottom: 0;
        }

        div:nth-child(3), div:nth-child(4){
            margin-top: 30px;
        }
    }
`