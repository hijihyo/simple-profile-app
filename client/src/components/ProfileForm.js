import React from "react"
import {
  Box, FormControl, FormControlLabel, FormLabel,
  Radio, RadioGroup, TextField, Typography
} from "@mui/material";

const ProfileForm = ({ setFirstName, setLastName, setGender, setJob, setDescription }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Write your profile
      </Typography>
      <Box sx={{ px: "5vw" }}>
        <Box sx={{ display: 'flex' }}>
          <TextField
            required id="firstName" name="firstName"
            label="First name" autoComplete="given-name"
            variant="standard" fullWidth sx={{ mr: '1vw '}}
            onInput={ e => setFirstName(e.target.value)}
          />
          <TextField
            required id="lastName" name="lastName"
            label="LastName" autoComplete="family-name"
            variant="standard" fullWidth sx={{ ml: '1vw '}}
            onInput={ e => setLastName(e.target.value)}
          />
        </Box>
        <FormControl
          component="fieldset" sx={{ mt: '2vh'}} 
          onInput={ e => setGender(e.target.value)}
        >
          <RadioGroup row aria-label="gender" name="gender" sx={{ flex: 'display', alignItems: 'center' }}>
            <FormLabel component="legend" sx={{ mr: 4 }}>Gender</FormLabel>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField
            required id="job" name="job"
            label="Job" autoComplete="text"
            variant="standard" fullWidth
            onInput={ e => setJob(e.target.value)}
        />
        <TextField
            required id="description" name="description"
            label="Description" autoComplete="text"
            variant="standard" fullWidth multiline rows={3}
            onInput={ e => setDescription(e.target.value)}
        />
      </Box>
    </React.Fragment>
  )
}

export default ProfileForm
