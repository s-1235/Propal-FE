import { Grid, Typography, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
const ProfileInformation = (props) => {
  return (
    <Grid
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignContent="center"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          marginLeft: -20,
          marginRight: 10,
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "Roboto",
            textTransform: "capitalize",
            color: "rgb(52, 71, 103)",
            lineHeight: 1.5,
            letterSpacing: "1px",
          }}
        >
          Profile Information
        </Typography>
        <Typography
          sx={{
            width: "500px",
            height: "100px",
            letterSpacing: "1px",
            fontWeight: 300,
            color: "rgb(123, 128, 154)",
            fontFamily: "Roboto",
            textDecoration: "none",
            textTransform: "capitalize",
            marginTop: 2,
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "inline-block",
            WebkitLineClamp: 4,
          }}
        >
          {props.About}
        </Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          marginLeft: 12,
          marginTop: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "Roboto",
              textTransform: "capitalize",
              color: "rgb(52, 71, 103)",
              lineHeight: 1.5,
              letterSpacing: "1px",
            }}
          >
            Full Name:
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              letterSpacing: "1px",
              fontWeight: 400,
              color: "rgb(123, 128, 154)",
              fontFamily: "Roboto",
              textDecoration: "none",
              textTransform: "capitalize",
              marginLeft: 1,
              marginTop: "4px",
            }}
          >
            {props.Name}
          </Typography>
          {/* <Typography
            sx={{
              fontSize: "18px",
              letterSpacing: "1px",
              fontWeight: 400,
              color: "rgb(123, 128, 154)",
              fontFamily: "Roboto",
              textDecoration: "none",
              textTransform: "capitalize",
              marginLeft: 1,
              marginTop: "4px",
            }}
          >
            {props.LastName}
          </Typography> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: 0.7,
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "Roboto",
              textTransform: "capitalize",
              color: "rgb(52, 71, 103)",
              lineHeight: 1.5,
              letterSpacing: "1px",
            }}
          >
            Mobile:
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              letterSpacing: "1px",
              fontWeight: 400,
              color: "rgb(123, 128, 154)",
              fontFamily: "Roboto",
              textDecoration: "none",
              textTransform: "capitalize",
              marginLeft: 1,
              marginTop: "4px",
            }}
          >
            {props.Phone}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: 0.7,
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "Roboto",
              textTransform: "capitalize",
              color: "rgb(52, 71, 103)",
              lineHeight: 1.5,
              letterSpacing: "1px",
            }}
          >
            Email:
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              letterSpacing: "1px",
              fontWeight: 400,
              color: "rgb(123, 128, 154)",
              fontFamily: "Roboto",
              textDecoration: "none",
              marginLeft: 1,
              marginTop: "4px",
            }}
          >
            {props.Email}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: 0.7,
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "Roboto",
              textTransform: "capitalize",
              color: "rgb(52, 71, 103)",
              lineHeight: 1.5,
              letterSpacing: "1px",
            }}
          >
            Address:
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              letterSpacing: "1px",
              fontWeight: 400,
              color: "rgb(123, 128, 154)",
              fontFamily: "Roboto",
              textDecoration: "none",
              textTransform: "capitalize",
              lineHeight: 1.5,
              marginLeft: 1,
              marginTop: "4px",
            }}
          >
            {props.Address}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default ProfileInformation;
