import { styled, Button } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { approveProperty, unApprovedProperties } from '../../api';
import UserBox from './components/user-box.component';
const ListItem = styled('li')(() => ({
  border: '1px solid #000',
  color: '#1d3557',
  width: '14rem',
  display: 'block',
  padding: '.6rem 1.8rem',
  marginBottom: '.5rem',
  '&:hover': {
    backgroundColor: '#1d3557',
    color: 'white',
    cursor: 'pointer',
  },
}));
const AdminDashboard = () => {
  const [userClicked, setUserClicked] = useState(false);
  const [unApprovedClicked, setUnApprovedClicked] = useState(false);
  const handleUserClicked = () => {
    setUserClicked((state) => !state);
    setUnApprovedClicked(false);
  };
  const handleUnApprovedClicked = () => {
    setUnApprovedClicked((state) => !state);
    setUserClicked(false);
  };

  const [unApproved, setUnapproved] = useState(null);

  const handleApproval = useCallback(async (e) => {
    console.log(e.target.dataset.id);
    let id = e.target.dataset.id;
    let res = await approveProperty(id);

    const data = await unApprovedProperties();
    console.log('calbackkkkkk');
    setUnapproved(data);

    console.log(res);
  });

  useEffect(() => {
    const dummy = async () => {
      const data = await unApprovedProperties();
      console.log('effeccctttt');
      setUnapproved(data);
    };
    dummy(); //!ISSUEE HERE
  }, []);
  console.log('un-approvedd', unApproved);

  const adminData = useSelector(({ admin }) => admin?.adminData?.data);
  const users = adminData?.users;
  return (
    <>
      <div>This is admin dashboard</div>
      <ListItem onClick={handleUserClicked}>Users: </ListItem>
      <ListItem onClick={handleUnApprovedClicked}>UnApproved Requests</ListItem>
      {userClicked &&
        users?.map((user, i) => <UserBox userObj={user} key={i} />)}
      {unApprovedClicked &&
        unApproved &&
        unApproved.data.data.properties?.map((prop, i) => (
          <li key={i}>
            {prop.title}
            {prop._id}

            <Button onClick={handleApproval} data-id={prop._id}>
              Approve this
            </Button>
          </li>
        ))}
    </>
  );
};

export default AdminDashboard;
