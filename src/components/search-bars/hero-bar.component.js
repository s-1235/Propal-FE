// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react/macro';
import { Box, TextField } from '@mui/material';
// import { useState } from 'react';
import React from 'react';
import { PrimaryAutocomplete } from '../auto-completes/primary-autocomplete.component';

// const defaultProps = {
//   options: top100Films,
//   getOptionLabel: (option) => option.title,
// };

const HeroBar = () => {
  const customOptions = ['val 1', 'val 2', 'val 3', 'val 4', 'val 5'];

  const [value, setValue] = React.useState(null);
  return (
    <Box
      sx={{
        width: '35rem',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '1.2rem 1rem',
        borderRadius: '1.2rem',
      }}
    >
      <PrimaryAutocomplete
        sx={{ width: '30%' }}
        // {...defaultProps}
        options={customOptions}
        id='controlled-demo'
        value={value}
        color='success'
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Province'
            variant='standard'
            sx={{ color: '#13557d', fontSize: 20 }}
          />
        )}
      />
      <PrimaryAutocomplete
        // {...defaultProps}
        sx={{ width: '30%' }}
        options={customOptions}
        id='controlled-demo'
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label='City' variant='standard' />
        )}
      />
      <PrimaryAutocomplete
        // {...defaultProps}
        sx={{ width: '30%' }}
        options={customOptions}
        id='controlled-demo'
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label='Property Type' variant='standard' />
        )}
      />
    </Box>
  );
};

export default HeroBar;
