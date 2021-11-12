import React from 'react'
import { CssBaseline, Grid, Typography } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#8048b0",
      light: "#996cbf",
      dark: "#59327b",
      contrastText: "#ffffff",
    },
  },
})

const HomePage = () => {
  return (
    <ThemeProvider theme={ theme }>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item
          xs={12} sm={6} md={4} component="div" square
        >
          <Typography
            component="h1" variant="h3"
            sx={{ color: "primary.dark", fontWeight: "bolder", mt: "20vh", mb: "5vh" }}
          >
            Simple Profile App
          </Typography>
          <Typography
            component="h5" variant="h5"
            sx={{ color: "#424242", px: "2vw" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque velit orci, dignissim nec velit ut, mattis
            pellentesque tellus. Cras ultrices mattis eros sit amet
            convallis. Curabitur turpis dui, tincidunt sed lacus id,
            interdum posuere diam.
          </Typography>
        </Grid>
        <Grid item xs={false} sm={6} md={8}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default HomePage
