import React from 'react'
import { useParams } from 'react-router-dom'
import Container from "@mui/material/Container"
import { Typography } from '@mui/material'

import { Profile } from '../components'
import { getProfile, getMyProfile } from '../api'

const ProfilePage = ({ myprofile }) => {
  const [profile, setProfile] = React.useState({
    username: '',
    firstName: '',
    lastName: '',
    gender: '',
    job: '',
    description: '',
  });
  const { pid } = useParams();
    
  React.useEffect(() => {
    (async () => {
      if (myprofile) {
        const result = await getMyProfile();
        if (result) setProfile(result.data);
      } else {
        const result = await getProfile(pid);
        if (result) setProfile(result.data);
      }
    })();
  }, [ myprofile, pid ])

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
      <Profile profile={ profile }></Profile>
    </Container>
  )
}

export default ProfilePage
