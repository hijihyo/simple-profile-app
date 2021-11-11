import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Header } from './components';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#b2b2b2',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: '#8048b0',
      light: '#996cbf',
      dark: '#59327b',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
          <Header></Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
