import { Box, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyTab = ({ property }) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
    setClicked((state) => !state);
  };
  const handleView = (e) => {
    // console.log('view', property);
    navigate(`/property/${property._id}`);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        border: '3px solid #1d3557',
        borderRadius: 2,
        width: '60rem',
        // gap: '3rem',
        justifyContent: 'space-around',
        padding: '.5rem 0.8rem',
        // minHeight: '6rem',
        // alignItems: 'center',
        flexDirection: 'column',
        // background: '#1d3557',
      }}
    >
      <Box
        sx={{
          flexBasis: '100%',
          display: 'flex',
          // border: '3px solid #1d3557',
          borderRadius: 2,
          // width: '100%',
          // gap: '3rem',
          justifyContent: 'space-around',
          padding: '.5rem 0.8rem',
          // minHeight: '6rem',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            flexBasis: '30%',
            borderRight: '2px solid #1d3557',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            component='h3'
            textAlign='center'
            sx={{
              fontWeight: 'bold',
              letterSpacing: '.3rem',
              textTransform: 'uppercase',
            }}
          >
            Title
          </Typography>
          <Typography component='h3'>{property.title}</Typography>
        </Box>
        <Box
          sx={{
            flexBasis: '20%',
            borderRight: '2px solid #1d3557',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            component='h3'
            textAlign='center'
            sx={{
              fontWeight: 'bold',
              letterSpacing: '.3rem',
              textTransform: 'uppercase',
            }}
          >
            Price
          </Typography>
          <Typography component='h3'>{property.price}</Typography>
        </Box>
        <Box
          sx={{
            flexBasis: '20%',
            borderRight: '2px solid #1d3557',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            component='h3'
            textAlign='center'
            sx={{
              fontWeight: 'bold',
              letterSpacing: '.3rem',
              textTransform: 'uppercase',
            }}
          >
            City
          </Typography>
          <Typography component='h3'>{property.city}</Typography>
        </Box>
        <Box
          sx={{
            flexBasis: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            component='h3'
            textAlign='center'
            sx={{
              display: 'inline-flex',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
            onClick={handleClick}
          >
            See More <ArrowDownwardIcon />
          </Typography>
        </Box>
      </Box>

      {clicked ? (
        <Box
          sx={{
            flexBasis: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '1rem',
          }}
        >
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
            onClick={handleView}
          >
            View Property
          </Typography>
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
            Edit Property
          </Typography>
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
};

export default PropertyTab;
