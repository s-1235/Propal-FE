import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '1rem 4rem',
        backgroundImage:
          'linear-gradient(to right top, #051937, #004d7a, #008793)',
        color: '#fff',
        // marginBottom:'-200px'
        // position: 'relative',
        // bottom: 0,
        // width: '100%',
        // zIndex: -1,
        // overflow: 'hidden',
      }}
    >
      <Typography sx={{ textAlign: 'center' }}>
        Copyright © 2022 Propal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
