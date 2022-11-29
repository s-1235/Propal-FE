import {
  Button,
  ButtonGroup,
  Container,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { PrimaryOverlay } from "../../../components/overlays/primary-overlay.component";
import { PrimaryButton } from "./../../../components/buttons/primary-button.component";
// import HeroBg from "./assets/img/hero-1.jpg";
import HeroBar from "./../../../components/search-bars/hero-bar.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../components/searchBar/searchBar";
const Hero = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [propertyFor, setPropertyFor] = useState("buy");

  const handleBuy = () => {
    setPropertyFor("buy");
  };
  const handleRent = () => {
    setPropertyFor("rent");
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) search = "all";
    navigate(`/property/search/${search}?propertyFor=${propertyFor}`);
  };

  const buttons = [
    <PrimaryButton key="buy" onClick={handleBuy}>
      Buy
    </PrimaryButton>,
    <PrimaryButton key="rent" onClick={handleRent}>
      Rent
    </PrimaryButton>,
  ];
  return (
    <Paper
      sx={{
        // backgroundImage: `url(${HeroBg})`,
        backgroundImage:
          "url('https://static.photocdn.pt/images/articles/2021/08/03/how_to_take_real_estate_exterior_photos.webp')",
        minHeight: "100vh",
        backgroundSize: "cover",
        display: "block",
        backgroundPosition: "center bottom",
      }}
    >
      <PrimaryOverlay>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <SearchBar />

          {/* <Typography
            variant='h2'
            component='h1'
            textAlign='center'
            color='white'
            marginTop='8rem'
            // marginBottom='6rem'
          >
            Pakistan's No.1 Real Estate Portal
          </Typography>

          <Box
            sx={{
              backgroundColor: 'rgba(0,0,0, 0.7);',
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem 2.4rem',
              // filter: 'blur(5px)',
              alignItems: 'center',
              borderRadius: '1rem',
              mt: '2rem',
            }}
          >
            <Typography
              variant='h3'
              component='h3'
              sx={{
                fontSize: '1.8rem',
                color: 'white',
                textDecoration: 'underline',
              }}
            >
              Serach for Properties
            </Typography>
            <ButtonGroup
              sx={{
                margin: '2.5rem 0 1.2rem 0',
              }}
            >
              {buttons}
            </ButtonGroup> */}

          {/* <HeroBar /> */}
          {/* <TextField
              id='prop-search'
              label='Search Properties'
              value={search}
              onChange={handleSearch}
              variant='filled'
              sx={{
                background: 'white',
                fontWeight: 'bold',
                borderRadius: '1rem',
                padding: '0 .5rem',
              }}
            />
            <Button
              variant='contained'
              onClick={handleSubmit}
              sx={{ marginTop: '1rem', padding: '.4rem 5.2rem' }}
            >
              Search
            </Button>
          </Box> */}
        </Container>
      </PrimaryOverlay>
    </Paper>
  );
};

export default Hero;
