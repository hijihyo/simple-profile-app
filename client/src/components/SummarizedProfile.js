import React from 'react'
import { Card, CardActionArea, Grid, Typography } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

const SummarizedProfile = ({ key, profile }) => {
  return (
    <Grid item key={ key } xs={12} sm={6} md={4}>
      <Card fullWidth="true" sx={{ boxShadow: 3 }}>
        <CardActionArea href={ `/profile/${profile.id}`} sx={{ py: 5 }}>
          <AccountBoxIcon sx={{ color: "#d1c4e9", width: "18vw", height: "18vh" }}/>
          <Typography component="h4" variant="h5">
            { `${ profile.firstName } ${ profile.lastName }` }
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default SummarizedProfile
