import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    max-width: 80%;
    margin: 6.4rem auto 0;
    background-color: var(--pink);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 4.8rem;
    box-shadow: var(--default-box-shadow);

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 2.4rem;
        justify-content: center;
        margin: 3.2rem auto 0;
    }
`

export const Btn = styled.button`
    font-size: 2.4rem;
    padding: 1.8rem 2.4rem;
    text-transform: uppercase;
    border: var(--default-border);
    background-color: var(--blue);
    transition: var(--dafault-transition);
    box-shadow: var(--default-box-shadow);
    margin-right: 1.6rem;
    cursor: pointer;

    &:hover {
        box-shadow: var(--hover-shadow);
        scale: var(--hover-scale);
    }

    @media (max-width: 1000px) {
        font-size: 1.8rem;
        padding: 1.2rem 1.8rem;
    }

    @media (max-width: 800px) {
        font-size: 1.2rem;
        padding: .8rem 1.2rem;
    }

    @media (max-width: 450px) {
        font-size: 1.8rem;
        padding: 1.2rem 1.8rem;
    }
`

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 450px) {
        flex-direction: column;
        gap: 2.4rem;
        justify-content: center;
    }
`