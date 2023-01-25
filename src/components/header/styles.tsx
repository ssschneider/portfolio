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
`

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`