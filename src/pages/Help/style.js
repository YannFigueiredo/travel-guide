import styled from 'styled-components';
import bg from '../../assets/help-bg.jpg';

export const ContainerHelp = styled.div`

`

export const IntroHelp = styled.div`    
    background: rgba(0, 0, 0, .5);
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;
    padding: 60px 20px 60px 20px;

    h1{
        color: white;
        font-size: 3.5em;
        margin-bottom: 25px;
    }

    p{
        color: white;
        font-size: 1.1em;
    }

    hr{
        margin: 30px 0px;
        border: 3px solid rgba(255, 255, 255, .3);
    }

    span{
        color: rgb(241, 63, 82);
        font-family: 'Barlow', sans-serif;
        font-weight: 900;
        font-size: 1.2em;
        margin-bottom: 40px;
        display: inline-block;
    }

    @media screen and (min-width: 992px) {
        padding: 60px 40px 60px 40px;
    }
`

export const Contact = styled.div`
    margin: 60px 20px 60px 20px;
    border: 1px solid rgb(233, 233, 233);

    div{
        padding: 30px 40px 50px 40px;
        display: flex;
        flex-direction: column;
    }

    span:nth-child(1){
        font-family: 'Barlow', sans-serif;
        font-weight: 900;
        font-size: 2em;
        display: inline-block;
        margin-bottom: 15px;
    }

    span:nth-child(2){
        color: rgb(241, 63, 82);
        font-weight: 700;
        font-size: 1.2em;
        display: inline-block;
        margin-bottom: 25px;
    }

    span:nth-child(3){
        color: rgba(0, 0, 0, .6);
    }

    hr{
        border: 3px solid rgb(241, 63, 82);
    }

    @media screen and (min-width: 992px) {
        margin: 60px 40px 60px 40px;
    }
`

export const Options = styled.div`
    padding: 40px 20px 40px 20px;

    @media screen and (min-width: 992px) {
        padding: 40px;
    }
`

export const Option = styled.div`
    display: flex;
    margin-bottom: 50px;

    div:nth-child(1){
        width: 60px;
        height: 60px; 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:nth-child(1) .icone{
        transition: ease all .3s;
        border-radius: 50%;
        cursor: pointer;
    }

    div:nth-child(1):hover .icone{
        padding: 6px;
    }

    &:nth-child(1) div:nth-child(1):hover .icone{
        border: 3px solid rgb(240, 83, 81);
    }

    &:nth-child(2) div:nth-child(1):hover .icone{
        border: 3px solid rgb(241, 183, 82);
    }

    &:nth-child(3) div:nth-child(1):hover .icone{
        border: 3px solid rgb(183, 83, 239);
    }

    div:nth-child(2){
        margin-left: 20px;
    }

    div:nth-child(2) h3{
        font-size: 1.6em;
        margin-bottom: 10px;
    }

    div:nth-child(2) p{
        color: rgba(0, 0, 0, .6);
    }
`