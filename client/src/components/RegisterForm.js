import React from "react"
import { Box, Typography, TextField } from "@mui/material"

const RegisterForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Register
      </Typography>
      <Box sx={{ px: "8vw" }}>
        <TextField
          required id="username" name="username"
          label="Username" autoComplete="username"
          variant="standard" fullWidth
        />
        <TextField
          required id="password" name="password"
          label="Password" autoComplete="new-password"
          variant="standard" fullWidth
        />
        <TextField
          required id="confirm-password"
          label="Confirm password" autoComplete="password"
          variant="standard" fullWidth
        />
      </Box>
    </React.Fragment>
  )
}

export default RegisterForm
