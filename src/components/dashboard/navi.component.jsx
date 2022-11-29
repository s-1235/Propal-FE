import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const DashMenu = styled('li')(() => ({
  borderBottom: '2px solid #1d3557',
  color: '#1d3557',
  fontWeight: 500,
  listStyle: 'none',
}));

const DashNav = () => {
  const user = useSelector(({ auth }) => auth.username);
  const email = useSelector(({ auth }) => auth.email);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      {/* <DashMenu>Dashboard</DashMenu> */}

      {`Hello,${user},your email is${email}`}
      <DashMenu>Listings</DashMenu>
      <DashMenu>Account Settings</DashMenu>
    </Box>
  );
};

export default DashNav;
