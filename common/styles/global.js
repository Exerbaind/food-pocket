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

body {
    -webkit-overflow-scrolling: touch;
}

a {
    text-decoration: none;
}

span, p, h1, h2, h3, h4, h5, h6, button, label, input, a {
    font-family: 'Rubik-Regular';
}

a,div,button {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
}
`;
