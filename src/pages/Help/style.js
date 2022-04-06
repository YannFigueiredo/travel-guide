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