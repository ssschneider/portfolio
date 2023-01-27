import styled from "styled-components";

export const SectionTitle = styled.h2`
    font-size: 4.8rem;
    text-align: center;
    margin: 8.8rem auto;

    @media (max-width: 400px) {
        font-size: 4rem;
    }
`

export const Wrapper = styled.section`
    width: 100%;
    max-width: 80%;
    margin: 6.4rem auto;
    display: grid;
    gap: 3.2rem;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;

    @media (max-width: 1180px) {
        grid-template-columns: 1fr;
    }
`

export const BtnMoreProjects = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    text-decoration: none;
    width: fit-content;
    margin: 0 auto;
    padding: .8rem 1.2rem;
    background-color: var(--pink);
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
`