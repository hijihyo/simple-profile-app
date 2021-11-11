import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large" edge="start" color="inherit"
            aria-label="menu" sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            variant="h5" href="/" underline="none"
            sx={{ color: "secondary.main", fontWeight: "bolder", textAlign: 'left', flexGrow: 1 }}
          >
            Simple Profile App
          </Link>
          <Button
            variant="outlined" href="/signin"
            sx={{ width: '7vw', mx: '0.5vw', color: "secondary.main", fontWeight: "bold", borderColor: "secondary.main", "&:hover": { backgroundColor: "#eeeeee", borderColor: "secondary.main", boxShadow: 'none', } }}
          >
            Sign In
          </Button>
          <Button
            href="/signup"
            sx={{ width: '7vw', mx: '0.5vw', color: "primary.main", fontWeight: "bold", backgroundColor: "secondary.main", "&:hover": { backgroundColor: "secondary.dark", boxShadow: 'none', } }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
