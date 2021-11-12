import React from "react";
import { Box, Grid, Paper, Typography } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

const Profile = () => {
  const user = {
    id: 1,
    username: "alice99",
    firstName: "Alice",
    lastName: "Hawawa",
    gender: "Female",
    job: "Teacher",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, accumsan tempor massa vel, facilisis varius mi.",
  };
  return (
    <Paper
      variant="outlined" fullWidth="true"
      sx={{ my: { xs: 3, md: 6 }, px: { xs: 10, md: 15 }, py: { xs: 2, md: 3 } }}
    >
      <Box fullWidth="true" sx={{ px: { xs: 2, md: 25 }}}>
        <AccountBoxIcon sx={{ color: "#d1c4e9", width: "18vw", height: "18vh" }}/>
        <Typography component="h4" variant="h4">
          { `${ user.firstName } ${ user.lastName } (${ user.username })` }
        </Typography>
        <Typography
          component="body1"
          sx={{ color: "#9e9e9e", fontStyle: "italic" }}
        >
          { user.description }
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
            { user.gender }
          </Typography>
          </Grid>
        <Grid item xs={ 6 }>
          <Typography component="h4" variant="h6">
            Job
          </Typography>
        </Grid>
        <Grid item xs={ 6 }>
          <Typography component="body1" variant="h6">
            { user.job }
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
