import styled from 'styled-components';

export const ContainerActivities = styled.section`
    padding: 40px 15px 40px 15px;

    @media screen and (min-width: 992px) {
        padding: 30px 40px 30px 40px;
    }
`

export const Activities = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-gap: 15px;
    margin-top: 40px;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const Activitie = styled.article`
    display: flex;
    flex-direction: column;
` 

export const Photo = styled.div`
    img{
        width: 100%;
    }
`

export const Title = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    width: 90%;

    span{
        color: rgb(242, 83, 83);
        font-size: 0.9em;
        display: inline-block;
        margin-top: 5px;
    }
`

export const Local = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(232, 232, 232);
    border-bottom: 1px solid rgb(232, 232, 232);
    padding: 5px 0px; 

    span{
        font-size: 0.9em;
        color: rgb(242, 83, 83);
        margin-left: 8px;
    }
`

export const Category = styled.span`
    margin-top: 15px;
    font-size: 0.6em;
    font-weight: 700;
    color: rgb(34, 34, 34);
    padding: 5px 10px;
    text-transform: uppercase;
    border-left: 3px solid rgb(242, 83, 83);
    cursor: pointer;
    transition: all ease 0.5s;

    &:hover{
        background-color: rgb(254, 237, 237);
    }
`
