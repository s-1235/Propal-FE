import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({
  linkHandler,
  title,
  price,
  description,
  id,
  coverImage,
}) => {
  const navigate = useNavigate();
  //!RLL console.log(id);
  return (
    <Paper
      elevation={24}
      sx={{
        display: 'flex',
        width: '55rem',
        marginBottom: 5, // test
        overflow: 'hidden',
        outline: '3px solid #1d3557',
        transform: 'skew(-8deg)',
        minHeight: '15rem',
        transition: '.2s all ease-in-out',
        backgroundColor: '#e63936',

        '&:hover': {
          transform: 'scale(1.025) skew(-8deg)',
        },
      }}
      onClick={linkHandler}
    >
      <Box
        sx={{
          maxWidth: '17rem',
          padding: 0,
          maHeight: '12rem',
          borderRadius: '2rem',
        }}
      >
        <img
          src={`http://localhost:6969/img/properties/${coverImage}`}
          // src={require('./../../assets/img/hero-1.jpg')}
          alt='test'
          style={{
            width: '100%',
            height: '100%',
            // borderRadius: ' 2rem 0 0 2rem',
            outline: '3px solid #1d3557',
            borderRight: '5px solid #1d3557',
          }}
        />
      </Box>

      <Box
        sx={{
          color: 'white',
          backgroundColor: '#e63936',
          padding: '2rem',
          '&>*': {
            transform: 'skew(8deg)',
          },
        }}
      >
        <Box>
          <Typography
            variant='body1'
            component='h2'
            sx={{
              color: '#fff',
              fontWeight: '700',
              fontSize: '1.4rem',
              letterSpacing: 1.5,
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant='body1'
            component='h2'
            sx={{
              color: '#fff',
              fontWeight: '400',
              fontSize: '1rem',
              letterSpacing: 1.5,
              marginTop: '-.4rem',
            }}
          >
            Rs.{price}
          </Typography>
          <Typography
            variant='body1'
            component='h2'
            sx={{ marginY: '1.6rem' }}
            // width='80%'
          >
            {/* {description} */}
            {/* //?Improve Later */}
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            sx={{ backgroundColor: '#1d3557' }}
            onClick={() => {
              navigate(`/property/${id}`);
            }}
          >
            See More
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default PropertyCard;
