import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'

import Sidebar from './Sidebar'

const Header = () => {
  const [sidebar, setSidebar] = React.useState(false)
  const toggleDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setSidebar(value)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <React.Fragment key="sidebar">
            <IconButton
              size="large" edge="start" color="inherit"
              aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={sidebar} onClose={toggleDrawer(false)}>
              <Sidebar sidebar={ sidebar } toggleDrawer={ toggleDrawer }/>
            </Drawer>
          </React.Fragment>
          <Link
            variant="h5" href="/" underline="none"
            sx={{ color: "secondary.main", fontWeight: "bolder", textAlign: 'left', flexGrow: 1 }}
          >
            Simple Profile App
          </Link>
          <Button
            variant="outlined" href="/signin" size="large"
            sx={{ mx: '0.5vw', px: '1vw', color: "secondary.main", fontWeight: "bold", borderColor: "secondary.main", "&:hover": { backgroundColor: "#eeeeee", borderColor: "secondary.main", boxShadow: 'none', } }}
          >
            Sign In
          </Button>
          <Button
            href="/signup" size="large"
            sx={{ mx: '0.5vw', px: '1vw', color: "primary.main", fontWeight: "bold", backgroundColor: "secondary.main", "&:hover": { backgroundColor: "secondary.dark", boxShadow: 'none', } }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
