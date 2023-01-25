import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    margin: 13rem auto 0;
`

export const Text = styled.p`
    text-transform: uppercase;
    font-size: 3.2rem;
    text-align: center;
    max-width: 28rem;
`

export const Btn = styled.button`
    font-size: 2.8rem;
    padding: 2.4rem 5.4rem;
    text-transform: uppercase;
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
`