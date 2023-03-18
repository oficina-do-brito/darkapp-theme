import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    background:#394551;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: white;
  }
`;
