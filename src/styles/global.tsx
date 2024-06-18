import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #ff0000;
  }

  button {
    font-family: 'Open Sans Condensed';
    cursor: pointer;
    color: #ff0000;
  }

  * {
    box-sizing: border-box;
  }
`;

