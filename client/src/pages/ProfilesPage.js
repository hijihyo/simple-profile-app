import React from 'react'
import { Container, Grid, Typography } from "@mui/material"
import { SummarizedProfile } from "../components"
import { getProfiles } from "../api";

const ProfilesPage = () => {
  const [profiles, setProfiles] = React.useState([]);

  React.useEffect(() => {
    (async () => {
        const result = await getProfiles();
        if (result) setProfiles(result.data);
    })();
  }, [])

  return (
    <Container
      component="main" fullwidth="true"
      sx={{ mx: "10vw", my: "8vh" }}
    >
      <Typography
        component="h1" variant="h3" color="secondary.dark"
        sx={{ textAlign: 'left '}}
      >
        Profiles
      </Typography>
      <Grid container spacing={ 3 } alignItems="stretch" sx={{ my: 3}}>
        {
          profiles.map((profile, index) => (
            <SummarizedProfile key={ index } profile={ profile } />
          ))
        }
      </Grid>
    </Container>
  )
}

export default ProfilesPage
