import './App.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';


import { GlobalStyled } from './lib/global.styled.js';
import {lightTheme, darkTheme} from "./lib/globalTheme.js";
import { AppRoutes } from './AppRoutes.jsx';


function App() {
  const [theme, setTheme] = useState(true);

  return (
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyled />
        <AppRoutes setTheme={setTheme} theme={theme} />
      </ThemeProvider>
  )
}

export default App
