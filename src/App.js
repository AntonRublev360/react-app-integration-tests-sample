import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import Pages from './pages/Pages'
import CssBaseline from '@mui/material/CssBaseline';
import StoreProvider from './components/StoreProvider';

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline>
        <StoreProvider>
          <Pages isEditingUsername={true}/>
        </StoreProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}
