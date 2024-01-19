import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

import { Datails } from './pages/Datails'
import { Home } from './pages/Home';
import { SignIn } from './pages/SingIn';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme= { theme } >
      <GlobalStyles/>
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
