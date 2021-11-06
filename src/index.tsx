import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import {ThemeProvider} from "@material-ui/core";
import {theme} from "./styles/theme.styles";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

