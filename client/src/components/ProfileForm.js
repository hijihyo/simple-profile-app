import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ProfileForm = () => {
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
          />
          <TextField
            required id="lastName" name="lastName"
            label="LastName" autoComplete="family-name"
            variant="standard" fullWidth sx={{ ml: '1vw '}}
          />
        </Box>
        <FormControl component="fieldset" sx={{ mt: '2vh'}}>
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
        />
        <TextField
            required id="description" name="description"
            label="Description" autoComplete="text"
            variant="standard" fullWidth multiline rows={3}
        />
      </Box>
    </React.Fragment>
  )
}

export default ProfileForm
