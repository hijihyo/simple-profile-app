import React from "react"
import {
  Box, Button, Container, CssBaseline, Grid, Link,
  Paper, Step, StepLabel, Stepper, Typography
} from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Copyright, ProfileForm, RegisterForm } from "../components"

const steps = ["Register", "Write your profile"]

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

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <RegisterForm />
    case 1:
      return <ProfileForm />
    default:
      throw new Error("Unknown step")
  }
}

const SignupPage = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Sign up
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Sign up" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Grid container sx={{ mt: 4, mb: 2, display: 'flex', justifyContent: 'center'}}>
            <Grid item>
              <Link href="/signin" variant="body2" color="secondary">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        <Copyright sx={{ mt: 2, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default SignupPage
