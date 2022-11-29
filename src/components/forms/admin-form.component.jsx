import { Typography, TextField, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, adminLogin } from '../../store/slices/adminSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    dispatch(adminLogin({ name, password }));

    // console.log(name, password);
  };
  const isLoggedIn = useSelector(({ admin }) => admin.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) navigate('/adminDashboard');
  }, [isLoggedIn]);
  return (
    <form onSubmit={handleAdminLogin}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '35rem',
          margin: '5rem auto',
        }}
      >
        <Typography
          variant='h4'
          component='h2'
          sx={{
            color: '#1d3557',
            fontWeight: 500,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          Admin Login
        </Typography>
        <TextField
          variant='standard'
          label='Name'
          type='text'
          onChange={handleNameChange}
          value={name}
          sx={{
            marginBottom: '2rem',
          }}
        />

        <TextField
          variant='standard'
          label='Password'
          type='password'
          onChange={handlePasswordChange}
          value={password}
          sx={{
            marginBottom: '2rem',
          }}
        />
        <Button
          variant='contained'
          sx={{ bgcolor: '#1d3557' }}
          type='submit'
          // disabled={true}
        >
          Admin Login
        </Button>
      </Box>
    </form>
  );
};

export default AdminForm;
