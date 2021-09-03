import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    font-family: Roboto, sans-serif;
    font-size: 16px;    
}

body {
    margin: 0;
    padding: 0;
}

h1, h2, h3 {
    font-weight: 700;
}

h1 {
    font-size: 2rem;
}

h2 {
    font-size: 1.5rem;
}

h3 {
    font-size: 1.25rem;
}

h4 {
    font-size: 1rem;
    font-weight: 400;
}
`;

export default GlobalStyle;
