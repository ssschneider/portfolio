import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #E6CA9E;
    box-shadow: var(--default-box-shadow);
    border: 5px solid #000;
    padding: 2.4rem 4.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin: 0 auto 2.4rem;
    width: 100%;
    max-width: 80%;
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

    @media (max-width: 680px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
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

    &:hover {
        scale: 0.8;
    }
`