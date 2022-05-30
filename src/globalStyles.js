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
  body: '#fff',
  fontColor: '#000',
  btnColor: '#000',
  btnColorHover: '#00000095',
};

export const darkTheme = {
  body: '#000',
  fontColor: '#fff',
  btnColor: '#ffffff40',
  btnColorHover: '#ffffff90',
};
