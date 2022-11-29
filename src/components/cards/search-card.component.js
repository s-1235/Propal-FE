import { Box, Button, Paper, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const SearchCard = ({ linkHandler, title, price, description, id }) => {
  const navigate = useNavigate();
  return (
    <Paper
      elevation={12}
      sx={{
        display: "flex",
        // width: '55rem',
        marginBottom: 1.8, // test
        overflow: "hidden",
        outline: "3px solid #1d3557",
        // transform: 'skew(-8deg)',
        minHeight: "15rem",
        transition: ".2s all ease-in-out",
        width: "97%",
        backgroundColor: "#1d3557",

        // '&:hover': {
        //   transform: 'scale(1.025) skew(-8deg)',
        // },
      }}
      onClick={linkHandler}
    >
      <Box
        sx={{
          maxWidth: "17rem",
          padding: 0,
          minHeight: "100%",
          borderRadius: "2rem",
        }}
      >
        <img
          src="./assets/img/hero-1.jpg"
          alt="test"
          style={{
            width: "100%",
            height: "100%",
            // borderRadius: ' 2rem 0 0 2rem',
            outline: "3px solid #ddd",
            borderRight: "2px solid #ddd",
          }}
        />
      </Box>

      <Box
        sx={{
          // color: '#1d3557',
          color: "#ddd",
          //   backgroundColor: '#e63936',
          padding: "2rem",
          //   '&>*': {
          //     transform: 'skew(8deg)',
          //   },
        }}
      >
        <Box>
          <Typography
            variant="body1"
            component="h2"
            sx={{
              // color: '#1d3557',
              color: "#ddd",
              fontWeight: "700",
              fontSize: "1.4rem",
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            sx={{
              color: "#ddd",
              fontWeight: "400",
              fontSize: "1rem",
              letterSpacing: 1.5,
              marginTop: "-.4rem",
            }}
          >
            Rs.{price}
          </Typography>
          <Typography variant="body1" component="h2" sx={{ marginY: "1.6rem" }}>
            {/* {description} */}
            {/* //?Improve Later */}
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "#ddd",
              color: "#1d3557",
              fontWeight: "bold",
              "&:hover": { color: "#ddd" },
            }}
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

export default SearchCard;
