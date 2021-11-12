import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import {
  HomePage,
  NotFoundPage,
  ProfilePage,
  ProfileEditPage,
  ProfilesPage,
  SigninPage,
  SignupPage
} from './pages'
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
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/signin" element={<SigninPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route path="/profile" element={<ProfilesPage />}></Route>
              <Route path="/profile/:pid" element={<ProfilePage />}></Route>
              <Route path="/myprofile" element={<ProfilePage myprofile={ true }/>}></Route>
              <Route path="/myprofile/edit" element={<ProfileEditPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
