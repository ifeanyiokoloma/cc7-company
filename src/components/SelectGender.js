import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

const SelectGender = ({onChange, value}) => {
   
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          value={value}
          label="Gender"
          onChange={onChange}
          name="gender"
          required
        >
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectGender