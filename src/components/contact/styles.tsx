import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #E6CA9E;
    box-shadow: var(--default-box-shadow);
    border: 5px solid #000;
    padding: 2.4rem 4.8rem;
    display: grid;
    grid-template-rows: fit-content, 1fr;
    place-items: center;
    margin: 0 auto 2.4rem;
    width: 100%;
    max-width: 70%;
    gap: 0.8rem;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);

    @media (max-width: 680px) {
        align-items: center;
    }

`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.6rem;

    @media (max-width: 800px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
    }

    @media (max-width: 560px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }
`

export const SocialMediaWrapper = styled.a`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    max-width: 10rem;
    text-decoration: none;
    color: #030303;
    transition: 0.5s linear;

    &:hover {
        scale: 1.1;
    }
`

export const SocialMediaInfo = styled.p`
    font-size: 1.4rem;
    text-align: center;
    max-width: 10rem;
`

export const BtnClose = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;
    transition: 0.5s linear;
    place-self: flex-end;

    &:hover {
        scale: 0.8;
    }
`