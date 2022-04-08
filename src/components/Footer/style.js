import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    background-color: black;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    nav ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav ul li{
        color: #fff;
        list-style-type: none;
        margin-right: 15px;
        transition: all ease .5s;
    }

    nav ul li:hover{
        color: rgba(255, 255, 255, .6);
    }
`