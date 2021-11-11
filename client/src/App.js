import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Home, NotFound, Profile, ProfileEdit, Profiles, Signin, Signup } from './pages'
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
      <Router>
        <div className="App">
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/profile" element={<Profiles />}></Route>
              <Route path="/profile/:pid" element={<Profile />}></Route>
              <Route path="/myprofile" element={<Profile />}></Route>
              <Route path="/myprofile/edit" element={<ProfileEdit />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
