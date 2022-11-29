import React from 'react';
import { styled } from '@mui/material/styles';

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
const List = () => {
  return (
    <ul className='container'>
      <ListItem>Properties</ListItem>
      <ListItem>Active Listings</ListItem>
      <ListItem>Active Listings</ListItem>
    </ul>
  );
};

export default List;
