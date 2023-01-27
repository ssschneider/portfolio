import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1.6rem 2.4rem;
    box-shadow: var(--default-box-shadow);
    transition: var(--default-transition);
    max-width: 45rem;
    height: 59.8rem;
    background-color: var(--blue);

    &:hover {
        box-shadow: var(--hover-shadow);
        scale: var(--hover-scale);
    }

    @media (max-width: 540px) {
        max-width: 35rem;
    }

    @media (max-width: 404px) {
        max-width: 26rem;
        height: fit-content;
    }
`

export const ProjectImage = styled.img`
    max-width: 41rem;
    margin-bottom: 1.8rem;
    border: var(--default-border);

    @media (max-width: 540px) {
        max-width: 30rem;
    }

    @media (max-width: 404px) {
        max-width: 22rem;
    }
`

export const ProjectTitle = styled.h3`
    font-size: 3.2rem;
    margin-bottom: 1.2rem;

    @media (max-width: 540px) {
        font-size: 2.8rem;
    }

    @media (max-width: 404px) {
       font-size: 2.4rem;
    }
`

export const ProjectDescription = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
    text-align: justify;

    @media (max-width: 540px) {
        max-width: 35rem;
    }
`

export const ProjectStacks = styled.h5`
    font-size: 1.6rem;
    margin-bottom: 1.6rem;

    @media (max-width: 404px) {
       text-align: justify;
    }
`

export const ProjectLinks = styled.div`
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;

    
`

export const ProjectBtn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    text-decoration: none;
    padding: .8rem 1.2rem;
    background-color: #E6CA9E;
    color: #000;
    font-size: 2.4rem;
    text-transform: uppercase;
    border: var(--default-border);
    box-shadow: var(--default-box-shadow);
    transition: var(--default-transition);

    &:hover {
        box-shadow: var(--hover-shadow);
        scale: var(--hover-scale);
        cursor: pointer;
    }

    @media (max-width: 540px) {
        font-size: 1.6rem;
    }

    @media (max-width: 404px) {
        flex-direction: column;
    }
`