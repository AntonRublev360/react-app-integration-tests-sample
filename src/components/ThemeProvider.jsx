import React from 'react';
import { ThemeProvider as MuiThermeProvider, responsiveFontSizes, createTheme }  from '@mui/material';

const theme = responsiveFontSizes(createTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: 'light'
  }
}));

export default function ThemeProvider({ children }) {
  return (
    <MuiThermeProvider theme={theme}>{children}</MuiThermeProvider>
  );
}
