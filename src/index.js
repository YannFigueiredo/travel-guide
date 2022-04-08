import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyle';
import ThemeProvider from './contexts/Themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);