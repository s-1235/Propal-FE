import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { propertyDelete, userDelete } from '../../../api';
import { alertActions } from '../../../store/slices/alertSlice';

const UserBox = ({ userObj }) => {
  // Props= username and properties arrays
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((state) => !state);
  };
  const handlePropertyDeletion = async (e) => {
    let id = e.target.dataset.id;
    let res = await propertyDelete(id);
    console.log(res);
  };
  const handleUserDeletion = async () => {
    let res = await userDelete(userObj._id);
    console.log(res.data.status, 'from server');

    res.data.status === 'success'
      ? dispatch(alertActions.openAlertBox('Successfully Deleted the user'))
      : dispatch(alertActions.openAlertBox('There is some issue'));
  };

  return (
    <Box
      sx={{
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '45rem',
        // justifyContent: 'center',
        margin: '0 auto',
        marginBottom: '1rem',
        borderRadius: '3px',
        padding: '1.2rem 1.8rem',
        // alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography component='h2' sx={{ alignSelf: 'center' }}>
          {userObj.username}
        </Typography>
        <Box>
          <Button onClick={handleClick}> All Properties</Button>
          <Button onClick={handleUserDeletion}> Delete User</Button>
        </Box>
      </Box>
      {clicked
        ? userObj.properties.length > 0
          ? userObj.properties.map((prop, i) => (
              <li key={i}>
                {prop.title}
                {prop._id}
                <Button onClick={handlePropertyDeletion} data-id={prop._id}>
                  Delete Property
                </Button>
              </li>
            ))
          : 'This user do not have properties'
        : ''}
    </Box>
  );
};

export default UserBox;
