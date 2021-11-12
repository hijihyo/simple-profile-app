import React from 'react'
import { Container, Grid, Typography } from "@mui/material"
import { SummarizedProfile } from "../components"

const ProfilesPage = () => {
  const users = [
    {
      id: 1,
      username: "alice99",
      firstName: "Alice",
      lastName: "Hawawa",
      gender: "Female",
      job: "Teacher",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, accumsan tempor massa vel, facilisis varius mi.",
    },
    {
      id: 2,
      username: "James167",
      firstName: "James",
      lastName: "Song",
      gender: "Male",
      job: "Student",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, accumsan tempor massa vel, facilisis varius mi.",
    },
    {
      id: 3,
      username: "Mark",
      firstName: "Mark",
      lastName: "Vueuje",
      gender: "Male",
      job: "Programmer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, accumsan tempor massa vel, facilisis varius mi.",
    },
    {
      id: 4,
      username: "Joe",
      firstName: "Joe",
      lastName: "Young",
      gender: "Female",
      job: "Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, accumsan tempor massa vel, facilisis varius mi.",
    },
    {
      id: 5,
      username: "maria",
      firstName: "Maria",
      lastName: "Dwards",
      gender: "Female",
      job: "Teacher",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, accumsan tempor massa vel, facilisis varius mi.",
    },
    {
      id: 6,
      username: "luajua",
      firstName: "Lua",
      lastName: "Start",
      gender: "Male",
      job: "Student",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, accumsan tempor massa vel, facilisis varius mi.",
    },
    {
      id: 7,
      username: "jullie",
      firstName: "Jullie",
      lastName: "Kwers",
      gender: "Male",
      job: "Programmer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, accumsan tempor massa vel, facilisis varius mi.",
    },
    {
      id: 8,
      username: "harry",
      firstName: "Harry",
      lastName: "Potter",
      gender: "Female",
      job: "Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, accumsan tempor massa vel, facilisis varius mi.",
    },
  ];

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
          users.map(user => (
            <SummarizedProfile key={ user.id } user={ user } />
          ))
        }
      </Grid>
    </Container>
  )
}

export default ProfilesPage
