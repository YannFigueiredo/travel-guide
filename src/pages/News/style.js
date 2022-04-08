import styled from 'styled-components';

export const ContainerNews = styled.div`
    padding: 120px 15px 0 15px;

    @media screen and (min-width: 992px) {
        padding: 120px 40px 30px 40px;
    }
`

export const IntroNews = styled.section`
    background-color: rgb(244, 242, 241);
    padding: 45px 30px;
    margin-bottom: 60px;

    h1{
        font-size: 3em;
        color: rgb(242, 83, 83);
        line-height: 1;
        margin-bottom: 35px;
    }

    h1 span{
        font-size: 0.7em;
    }

    p{
        color: rgba(34, 34, 34, 0.7);
        font-size: 1.1em;
    }

    hr{
        border: 4px solid rgb(230, 228, 227);
        margin: 35px 0px;
    }
`

export const SectionNews = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    
    article{
        margin-bottom: 50px;
    }

    article h3{
        font-size: 1.3em;
        margin: 10px 0;
    }

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }

    @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const Banner = styled.div`
    position: relative;

    img{
        width: 100%;
    }

    span{
        display: inline-block;
        position: absolute;
        color: #fff;
        font-size: 0.9em;
        text-transform: uppercase;
        left: 0;
        top: 0;
        background-color: rgb(242, 83, 83);
        padding: 10px 10px;
        width: 60px;
        text-align: center;
    }
`

export const Description = styled.span`
    color: rgba(34, 34, 34, 0.7);
    font-size: 0.8em;
    margin-bottom: 15px;
    display: inline-block;
`

export const Category = styled.span`
    text-transform: uppercase;
    border-left: 3px solid rgb(242, 83, 83);
    display: inline-block;
    font-weight: 700;
    font-size: 0.7em;
    padding: 5px 12px;
    color: rgba(34, 34, 34, 0.9);
    transition: all ease .5s;
    cursor: pointer;
    margin-right: 5px;

    &:hover{
        background-color: rgb(254, 237, 237);
    }
`