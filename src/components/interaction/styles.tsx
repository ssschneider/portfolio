import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    margin: 10rem auto 6rem;
`

export const Text = styled.p`
    text-transform: uppercase;
    font-size: 3.2rem;
    text-align: center;
    max-width: 28rem;

    @media (max-width: 430px) {
        font-size: 2.4rem;
    }
`

export const Btn = styled.button`
    padding: 2.4rem 5.4rem;
    border: var(--default-border);
    background-color: var(--blue);
    transition: var(--dafault-transition);
    box-shadow: var(--default-box-shadow);
    margin-right: 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    &:hover {
        box-shadow: var(--hover-shadow);
        scale: var(--hover-scale);
    }

    @media (max-width: 430px) {
        padding: 1.2rem 2.4rem;
    }
`