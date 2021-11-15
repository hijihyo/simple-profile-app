import React from "react"
import { Box, Typography, TextField } from "@mui/material"

const RegisterForm = ({ setUsername, setPassword }) => {
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
          onInput={ e => setUsername(e.target.value)}
        />
        <TextField
          required id="password" name="password"
          label="Password" autoComplete="new-password"
          variant="standard" fullWidth type="password"
          onInput={ e => setPassword(e.target.value)}
        />
        <TextField
          required id="confirm-password"
          label="Confirm password" autoComplete="password"
          variant="standard" fullWidth type="password"
        />
      </Box>
    </React.Fragment>
  )
}

export default RegisterForm
