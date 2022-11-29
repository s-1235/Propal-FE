import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { DefaultTheme } from './MuiTheme';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
