import React from 'react';
import { ThemeProvider as MuiThermeProvider } from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
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
