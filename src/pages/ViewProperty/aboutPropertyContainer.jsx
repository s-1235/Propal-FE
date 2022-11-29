import { Grid, Box } from "@mui/material";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import moment from "moment";
import Button from "@mui/material/Button";
import MessageIcon from "@mui/icons-material/Call";
import { useState } from "react";
const themebody = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 35,
            fontFamily: "Oswald",
            marginLeft: 15,
            marginTop: 10,
            fontWeight: "600",
          },
        },
        {
          props: {
            variant: "h1",
          },
          style: {
            fontSize: 30,
            fontFamily: "Oswald",
            fontWeight: "200",
            marginLeft: 10,
            marginTop: 40,
          },
        },
        {
          props: {
            variant: "h2",
          },
          style: {
            fontSize: 22,
            fontFamily: "Oswald",
            fontWeight: "100",
            marginLeft: 10,
            marginTop: 40,
            textAlign: "left",
          },
        },
      ],
    },
  },
});
const AboutPropertyContainer = (props) => {
  const formattedDate = moment(props.Date).utc().format("dddd, MMMM Do YYYY");
  const [contactToggle, setContactToggle] = useState(false);

  const handleContactClick = () => {
    setContactToggle(!contactToggle);
  };
  return (
    <Grid container direction="column" sx={{ marginTop: 5 }}>
      <ThemeProvider theme={themebody}>
        <Typography varaint="body1" sx={{ marginLeft: 4 }}>
          Property Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginLeft: 2,
            }}
          >
            Location :{" "}
            <Typography
              variant="h6"
              sx={{
                fontSize: 25,
                fontFamily: "Oswald",
                marginLeft: 1,
                marginTop: 0.5,
              }}
            >
              {props.City} - {props.Area}
            </Typography>
          </Typography>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            Posted on -
            <Typography
              variant="h6"
              sx={{
                fontSize: 25,
                fontFamily: "Oswald",
                marginLeft: 1,
                marginTop: 0.5,
              }}
            >
              {formattedDate}
              {/* February 21,2022  */}
              {/* {props.Date.toDateString()} */}
            </Typography>
          </Typography>
        </Box>

        <Typography variant="h1" sx={{ marginLeft: 8 }}>
          {props.Name}
        </Typography>
        <Typography
          variant="h2"
          paragraph={true}
          sx={{ width: "1200px", marginLeft: 10 }}
        >
          <div dangerouslySetInnerHTML={{ __html: props.Description }}></div>
        </Typography>
        <Typography variant="h1" sx={{ marginBottom: 2, marginLeft: 4 }}>
          Key Characteristics
        </Typography>
        <li style={{ fontSize: "20px", marginTop: "4px", marginLeft: "65px" }}>
          {props.Bedrooms} Bedrooms
        </li>
        <li style={{ fontSize: "20px", marginTop: "4px", marginLeft: "65px" }}>
          {" "}
          {props.Garages} Garages
        </li>
        <li style={{ fontSize: "20px", marginTop: "4px", marginLeft: "65px" }}>
          {" "}
          {props.Washrooms} Washrooms
        </li>
        <Divider
          variant="inset"
          sx={{
            width: "1150px",
            marginTop: 2,
          }}
        />
        <Typography variant="body1" sx={{ marginBottom: -1, marginLeft: 4 }}>
          Cost
        </Typography>
        <Typography variant="h1" sx={{ marginLeft: 4 }}>
          Prepayment
        </Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-start",
            marginLeft: "65px",
            marginBottom: -2,
          }}
        >
          <img
            src="/assets/icons/SVG/money.svg"
            style={{
              height: "55px",
              width: "55px",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: 30, fontWeight: "", marginTop: "8px" }}
          >
            PKR
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: 25, marginTop: "11px", marginLeft: "5px" }}
          >
            {props.Price} lac
          </Typography>
        </Box>
        <Typography variant="h1" sx={{ marginLeft: 4 }}>
          Maintenance Charges
        </Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-start",
            marginLeft: "65px",
            marginBottom: -2,
          }}
        >
          <img
            src="/assets/icons/SVG/money.svg"
            style={{
              height: "55px",
              width: "55px",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: 30, fontWeight: "", marginTop: "8px" }}
          >
            PKR
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: 25, marginTop: "11px", marginLeft: "5px" }}
          >
            55 Hundred
          </Typography>
        </Box>
        <Typography variant="h1" sx={{ marginLeft: 4 }}>
          Security
        </Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            marginLeft: "65px",
            marginBottom: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              direction: "row",
              justifyContent: "space-between",
              width: "310px",
            }}
          >
            <img
              src="/assets/icons/SVG/money.svg"
              style={{
                height: "55px",
                width: "55px",
                marginRight: "10px",
              }}
            />
            <Typography
              variant="h1"
              sx={{ fontSize: 30, fontWeight: "", marginTop: "8px" }}
            >
              PKR
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: 25, marginTop: "11px", marginRight: 10 }}
            >
              {props.Price} lac
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              endIcon={
                <MessageIcon
                  sx={{ height: "35px", width: "35px", marginRight: 2.5 }}
                />
              }
              sx={{
                height: "50px",
                width: "190px",
                backgroundColor: "#A6A4A5",
                color: "black",
                marginRight: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleContactClick}
            >
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginRight: 1,
                  marginBottom: 1,
                }}
              >
                Contact
              </Typography>
            </Button>
            {contactToggle ? <Box pt={2}> {props.PhoneNumber}</Box> : ""}
            {/* {contactToggle ? (
          <Button>
            <p onClick={() => handleMessage(property.postedBy)}>
              <b> Message</b>
            </p>
          </Button>
        ) : (
          ""
        )} */}
          </Box>
        </Box>
      </ThemeProvider>
    </Grid>
  );
};
export default AboutPropertyContainer;
