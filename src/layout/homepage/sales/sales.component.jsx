import { Container, Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../../../components/cards/property-card.component';
const Sales = () => {
  const navigate = useNavigate();

  const [salesObj, setSalesObj] = useState(null);
  useEffect(() => {
    const dummy = async () => {
      try {
        const buyData = await axios.get(
          'http://localhost:6969/property/latest-property-buy'
        );

        setSalesObj(buyData);
      } catch (error) {
        console.log('latest properties route error 😒');
      }
    };
    dummy();
  }, []);

  const data = salesObj?.data?.data;

  const linkHandler = (e) => {
    e.preventDefault();

    navigate('/property');
  };
  return (
    <Box sx={{ bgcolor: '#a8dadc' }}>
      <Container maxWidth='lg' sx={{ padding: '3rem 5rem' }}>
        <Typography variant='h2' component='h2'>
          Recent Houses for Sales
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

export default Sales;
