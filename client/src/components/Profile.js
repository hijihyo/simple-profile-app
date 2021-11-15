import React from "react";
import { Box, Grid, Paper, Typography } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

const Profile = ({ profile }) => {
  return (
    <Paper
      variant="outlined" fullWidth="true"
      sx={{ my: { xs: 3, md: 6 }, px: { xs: 10, md: 15 }, py: { xs: 2, md: 3 } }}
    >
      <Box fullWidth="true" sx={{ px: { xs: 2, md: 25 }}}>
        <AccountBoxIcon sx={{ color: "#d1c4e9", width: "18vw", height: "18vh" }}/>
        <Typography component="h4" variant="h4">
          { `${ profile.firstName } ${ profile.lastName } (${ profile.username })` }
        </Typography>
        <Typography
          component="body1"
          sx={{ color: "#9e9e9e", fontStyle: "italic" }}
        >
          { profile.description }
        </Typography>
      </Box>
      <Grid
        container spacing={ 3 }
        sx={{ px: 25, py: 5 }}
      >
        <Grid item xs={ 6 }>
          <Typography component="h4" variant="h6">
            Gender
          </Typography>
        </Grid>
        <Grid item xs={ 6 }>
          <Typography component="body1" variant="h6">
            { profile.gender }
          </Typography>
          </Grid>
        <Grid item xs={ 6 }>
          <Typography component="h4" variant="h6">
            Job
          </Typography>
        </Grid>
        <Grid item xs={ 6 }>
          <Typography component="body1" variant="h6">
            { profile.job }
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
