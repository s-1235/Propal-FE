import { Container, Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import PropertyCard from '../../../components/cards/property-card.component';

const Rent = () => {
  const [rentObj, setRentObj] = useState(null);
  useEffect(() => {
    const dummy = async () => {
      try {
        const rentData = await axios.get(
          'http://localhost:6969/property/latest-property-rent'
        );

        setRentObj(rentData);
      } catch (error) {
        console.log('latest properties route error 😒');
      }
    };
    dummy();
  }, []);

  const data = rentObj?.data?.data;

  console.log('RENT PROPERTIES+>', data);
  return (
    <Box
      sx={{
        bgcolor: '#1d3557',
      }}
    >
      <Container maxWidth='lg' sx={{ padding: '3rem 5rem', color: '#fff' }}>
        <Typography variant='h2' component='h2'>
          Recent Houses for Rent
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '3rem',
          }}
        >
          {/* <PropertyCard />
          <PropertyCard /> */}
          {data
            ? data?.property?.map((prop) => (
                <PropertyCard
                  title={prop.title}
                  id={prop._id}
                  description={prop.description}
                  price={prop.price}
                  key={prop._id}
                  coverImage={prop.coverImage}
                />
              ))
            : ''}
          <Button
            variant='contained'
            color='secondary'
            sx={{ backgroundColor: '#1d3557' }}
          >
            See More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Rent;
