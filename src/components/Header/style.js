import styled from 'styled-components';

export const ContainerHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px 15px 20px;
    background-color: ${props => props.posScroll > 150 ? 'white' : 'transparent'};
    position: ${props => props.posScroll > 150 ? 'fixed' : 'absolute'};
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    div, nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (min-width: 992px) {
        padding: 30px 40px 30px 40px;
    }
`

export const Logo = styled.div `
    width: 47px;

    img{
        width: 100%;
    }

    @media screen and (min-width: 600px){
        width: 60px;
    }
`

export const TituloSite = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    a, span{
        align-self: flex-start;
    }
    
    a{
        font-family: 'Barlow', sans-serif;
        font-weight: 900;
        color: ${props => props.theme};
        text-transform: uppercase;
        font-size: 1.4em;
    }

    span{
        font-size: 0.9em;
        color: ${props => props.theme};
        display: ${props => props.posScroll > 150 ? 'none' : 'inline-block'};
    }

    @media screen and (min-width: 600px){
        margin-left: 15px;

        a{
            font-size: 2em;
        }
    }
`

export const Menu = styled.ul `
    list-style: none;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    padding: 75px 40px 0px 40px;
    z-index: 998;    
    
    a, li{
        font-size: 1.17em;
        color: ${props => props.theme};
    }

    li{
        margin-bottom: 20px;
    }

    li:hover{
        color: black;
    }

    @media screen and (min-width: 992px) {
        position: static;
        background-color: transparent;
        width: auto;
        height: auto;
        padding: 0;
        display: flex;

        a, li{
            font-size: 1em;
        }

        li{
            margin-bottom: 0px;
            margin-left: 40px;
        }
    }
`