import React from 'react'
import Container from "@mui/material/Container"
import { Typography } from '@mui/material'

import { Profile } from '../components'

const ProfilePage = ({ myprofile }) => {
  return (
    <Container
      component="main" fullwidth="true"
      sx={{ mx: "10vw", my: "8vh" }}
    >
      <Typography
        component="h1" variant="h3" color="secondary.dark"
        sx={{ textAlign: 'left '}}
      >
        { myprofile ?
          "My profile" : `Profile`
        }
      </Typography>
      <Profile></Profile>
    </Container>
  )
}

export default ProfilePage
