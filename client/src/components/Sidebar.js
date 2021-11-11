import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import SearchIcon from '@mui/icons-material/Search'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'

const Sidebar = ({ sidebar, toggleDrawer }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/profile">
            <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
            <ListItemText primary="Profiles" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/myprofile">
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default Sidebar
