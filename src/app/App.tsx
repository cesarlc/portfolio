import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Portfolio from './components/Portfolio';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6816c8',
      light: '#8d56db',
      dark: '#4f0fa0',
    },
    secondary: {
      main: '#FF5314',
      light: '#ff7b4a',
      dark: '#d66b45',
    },
    background: {
      default: '#120822',
      paper: '#ffffff',
    },
    text: {
      primary: '#120822',
      secondary: '#7c7c84',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Portfolio />
    </ThemeProvider>
  );
}
