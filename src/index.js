import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/index';
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";


ReactDOM.render(

  <BrowserRouter >
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
