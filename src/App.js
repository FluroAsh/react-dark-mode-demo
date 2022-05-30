import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './globalStyles';
import { Container, Button } from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [theme, setTheme] = useState('dark');

  function themeToggler() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container>
          <h1>Dark Mode Demo</h1>
          {theme === 'light' ? (
            <Button onClick={themeToggler}>
              <FontAwesomeIcon icon={faMoon} size="4x" />
            </Button>
          ) : (
            <Button onClick={themeToggler}>
              <FontAwesomeIcon icon={faSun} size="4x" />
            </Button>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
