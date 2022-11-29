import { Avatar, Box, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const MyAccount = () => {
  const userData = useSelector(({ auth }) => auth.user);
  console.log(userData);
  return (
    <Box>
      <Box sx={{ background: '#A8DADC', width: '100%' }}>
        <Typography
          variant='h4'
          component='h4'
          sx={{
            color: '#ddd',
            fontWeight: '500',
            textTransform: 'capitalize',
            textAlign: 'center',
            // ml: '6rem',
            padding: '2rem 0',
            bgcolor: '#1d3557',
          }}
        >
          Account Details!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          padding: '5rem 8rem',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ flexBasis: '30%' }}>
          <Avatar
            sx={{
              height: '10rem',
              width: '10rem',
              fontSize: '3rem',
            }}
          >
            M
          </Avatar>
        </Box>
        <Box sx={{ flexBasis: '60%', '&>*': { marginBottom: '1rem' } }}>
          <Box sx={{ display: 'flex' }}>
            <Typography
              component='h3'
              sx={{
                color: '#1d3557',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginRight: '.6rem',
              }}
            >
              Name:
            </Typography>
            <TextField
              variant='outlined'
              size='small'
              sx={{}}
              placeholder='Mazen'
            />
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography
              component='h3'
              sx={{
                color: '#1d3557',
                fontSize: '1.6rem',
                fontWeight: 'bold',
                marginRight: '.6rem',
              }}
            >
              Email:
            </Typography>
            <TextField
              variant='outlined'
              size='small'
              sx={{}}
              placeholder='Mazen'
            />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography
              component='h3'
              sx={{
                color: '#1d3557',
                fontSize: '1.6rem',
                fontWeight: 'bold',
                marginRight: '.6rem',
              }}
            >
              Phone Number:
            </Typography>
            <TextField
              variant='outlined'
              size='small'
              sx={{}}
              placeholder='Mazen'
            />
          </Box>

          <Typography
            sx={{
              fontStyle: 'italic',
              background: '#1d3557',
              color: '#fff',
              display: 'inline-block',
              padding: '0 .4rem',
              '&:hover': {
                transform: 'scale(1.1) translate(0,-2px)',
                cursor: 'pointer',
                transition: 'all .2s',
              },
            }}
          >
            Change Password
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MyAccount;
