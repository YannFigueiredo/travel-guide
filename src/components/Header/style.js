import styled from 'styled-components';

export const ContainerHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: ${props => props.posScroll > 150 ? '8px' : '15px'};
    padding-bottom: ${props => props.posScroll > 150 ? '8px' : '15px'};
    padding-right: 20px;
    padding-left: 20px;
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
        padding-top: ${props => props.posScroll > 150 ? '15px' : '30px'};
        padding-bottom: ${props => props.posScroll > 150 ? '15px' : '30px'};
        padding-right: 40px;
        padding-left: 40px;
    }
`

export const Logo = styled.div `
    width: ${props => props.posScroll > 150 ? '40px' : '47px'};

    img{
        width: 100%;
    }

    @media screen and (min-width: 600px){
        width: ${props => props.posScroll > 150 ? '47px' : '60px'};
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
        color: rgba(34, 34, 34, 0.7);
        transition: all ease .5s;
    }

    li{
        margin-bottom: 20px;
    }

    a:nth-child(${props => props.pageActive}) li{
        color: rgb(0, 0, 0);
    }

    li:hover, a:hover{
        color: rgb(0, 0, 0);
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
            color: ${props => props.theme};
        }

        li{
            margin-bottom: 0px;
            margin-left: 40px;
        }

        a:nth-child(${props => props.pageActive}) li{
            color: rgb(242, 83, 83);
        }

        li:hover, a:hover{
            color: rgb(242, 83, 83);
        }
    }
`