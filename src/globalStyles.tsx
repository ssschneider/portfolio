import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-size: 62.5%;
        font-weight: 700;
        scrollbar-width: thin;
        scrollbar-color: #E693DC #B9E5A9;
        
        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: #E693DC;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #B9E5A9;
            border-radius: 8px;
            border: 1px solid #000;
        }
    }

    :root {
        --green: #B9E5A9;
        --pink: #E693DC;
        --blue: #C1D5E6;
        --default-transition: 0.2s linear;
        --default-box-shadow: 6px 6px 0px 2px rgba(0,0,0,1);
        --default-border: 2px solid #000;
        --hover-scale: 0.98;
        --hover-shadow: 3px 3px 0px 2px rgba(0,0,0,1);

    }

    body {
        background-color: var(--green);
    }

    *::selection {
        background-color: var(--blue);
    }
`

export default GlobalStyles