import styled, { keyframes } from "styled-components";

export const Wrapper = styled.section`
	width: 100%;
	max-width: 80%;
	margin: 8rem auto 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

    
    @media(max-width: 1100px){
        flex-direction: column;
        justify-content: center;
        gap: 4.8rem;
    }

`;

const pop = keyframes`
    0% {
        scale: 1;
    }
    50% {
        scale: 0.9;
    }

    100% {
        scale: 1;
    }
`;

export const ProfilePhoto = styled.img`
	max-width: 437px;
	max-height: auto;
    border-radius: 500px;
    -webkit-box-shadow: var(--default-box-shadow);
    box-shadow: var(--default-box-shadow);
    -moz-border-radius: 500px;
    -webkit-border-radius: 500px;
    transition: 0.5s linear;

	&:hover {
		animation: ${pop} 1.5s ease-in-out infinite both;
        -webkit-box-shadow: var(--hover-shadow);
        box-shadow: var(--hover-shadow);
	}

    @media (max-width: 545px) {
        max-width: 290px;
    }
`;
