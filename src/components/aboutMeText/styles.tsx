import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    gap: 1.2rem;
    max-width: 40rem;
`

export const SectionTitle = styled.h2`
    font-size: 4.2rem;
    margin-bottom: 3.6rem;

    @media (max-width: 505px) {
        font-size: 3.2rem;
    }

    @media (max-width: 376px) {
        font-size: 2.4rem;
    }
`

export const Text = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    text-align: justify;
    line-height: 115%;
`