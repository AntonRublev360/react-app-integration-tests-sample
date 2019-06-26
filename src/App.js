import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import Pages from './pages/Pages.container';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoreProvider from './components/StoreProvider';

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline>
        <StoreProvider>
          <Pages />
        </StoreProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}
