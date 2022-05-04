import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Rubik-Regular';
    src: url('/fonts/Rubik-Regular.ttf') format('truetype');
}
@font-face {
    font-family: 'Rubik-Medium';
    src: url('/fonts/Rubik-Medium.ttf') format('truetype');
}
@font-face {
    font-family: 'Rubik-Bold';
    src: url('/fonts/Rubik-Bold.ttf') format('truetype');
}
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}
`;
