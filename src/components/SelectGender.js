import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

const SelectGender = () => {
    const [gender, setGender] = React.useState("");

    const handleChange = event => {
      setGender(event.target.value);
    };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="gender-select-label">Age</InputLabel>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          value={gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectGender