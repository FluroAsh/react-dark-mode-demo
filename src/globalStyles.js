import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
  height: 100vh;
}

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: arial, sans-serif;
    letter-spacing: 1px;
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }
`;

export const lightTheme = {
  body: 'linear-gradient(#1f1f1f, #fff)',
  fontColor: '#000',
  btnColor: '#00000095',
  btnColorHover: '#000000',
};

export const darkTheme = {
  body: '#000',
  fontColor: '#fff',
  btnColor: '#ffffff40',
  btnColorHover: '#ffffff90',
};
