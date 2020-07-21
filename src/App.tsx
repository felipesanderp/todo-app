import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';

import Routes from './routes';

import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </Router>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
