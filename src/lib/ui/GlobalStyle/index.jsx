import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
}

body {
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4 {
    font-weight: 700;
}

h1 {
    font-size: 32px;
}

h2 {
    font-size: 24px;
}

h3 {
    font-size: 20px;
}

h4 {
    font-size: 16px;
}
`;

export default GlobalStyle;
