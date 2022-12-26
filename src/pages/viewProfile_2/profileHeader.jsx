import { Grid, Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
const ProfileHeader = (props) => {
  return (
    <Grid
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignContent="center"
      sx={{ width: "100%", height: "100px" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        sx={{ width: "250px", marginLeft: 7 }}
      >
        <Avatar
          alt={props.Name}
          src={`./assets/img/${props.ProfilePic}`}
          sx={{ height: "100px", width: "100px" }}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
          marginLeft="20px"
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 800,
              textDecoration: "none",
              lineHeight: "30px",
              textTransform: "capitalize",
            }}
          >
            {props.Name}
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              textTransform: "capitalize",
              opacity: 0.6,
            }}
          >
            {props.ProfileType == "user" ? "SimpleUser" : props.ProfileType}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Button
          variant="outlined"
          startIcon={
            <EmailIcon
              sx={{
                color: "black",
                "&:active": {
                  color: "white",
                },
              }}
            />
          }
          sx={{
            height: "50px",
            width: "110px",
            marginTop: 3.5,
            borderColor: "black",
            "&:hover": { borderColor: "white" },
            "&:active": {
              color: "white",
            },
            marginRight: 7,
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              textTransform: "capitalize",
              fontFamily: "Roboto",
              color: "rgb(52, 71, 103) !important",
              fontWeight: 600,
            }}
          >
            Message
          </Typography>
        </Button>
        {props.MyProfile && (
          <Button
            variant="outlined"
            startIcon={
              <SettingsIcon
                sx={{
                  color: "black",
                  "&:active": {
                    color: "white",
                  },
                }}
              />
            }
            sx={{
              height: "50px",
              width: "190px",
              marginTop: 3.5,
              borderColor: "black",
              "&:hover": { borderColor: "white" },
              "&:active": {
                color: "white",
              },
              marginRight: 7,
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                textTransform: "capitalize",
                fontFamily: "Roboto",
                color: "rgb(52, 71, 103) !important",
                fontWeight: 600,
              }}
            >
              Update Profile
            </Typography>
          </Button>
        )}
      </Box>
    </Grid>
  );
};
export default ProfileHeader;
