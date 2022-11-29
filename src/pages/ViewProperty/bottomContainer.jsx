import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MessageIcon from "@mui/icons-material/Message";
import LikeIcon from "@mui/icons-material/Favorite";
const BottomContainer = (props) => {
  return (
    <Grid
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "200px" }}
    >
      <Box
        sx={{
          display: "flex",
          direction: "row",
          justifyContent: "space-evenly",
          width: "600px",
        }}
      >
        <Box>
          <img
            src="/assets/icons/SVG/car.svg"
            style={{ height: "50px", width: "50px" }}
          />
          <text>{props.Garages}</text>
          <text>-Vehicles</text>
        </Box>
        <Box>
          <img
            src="/assets/icons/SVG/bed.svg"
            style={{ height: "50px", width: "50px" }}
          />
          <text>{props.Bedrooms}</text>
          <text>-Bedrooms</text>
        </Box>
        <Box>
          <img
            style={{ height: "50px", width: "50px" }}
            src="/assets/icons/SVG/washroom.svg"
          />
          <text>{props.Washrooms}</text>
          <text>-Washrooms</text>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          direction: "row",
          justifyContent: "space-evenly",
          width: "800px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-evenly",
          }}
        >
          <img
            style={{
              height: "55px",
              width: "55px",
              marginRight: "10PX",
            }}
            src="/assets/icons/SVG/money.svg"
          />
          <Typography
            variant="h1"
            sx={{ fontSize: 30, fontWeight: "bold", marginTop: "8px" }}
          >
            PKR
          </Typography>
          <Typography variant="h3" sx={{ fontSize: 30, marginTop: "8px" }}>
            {props.Price} lac
          </Typography>
        </Box>
        <Button
          variant="outlined"
          endIcon={<MessageIcon sx={{ height: "35px", width: "35px" }} />}
          sx={{
            height: "50px",
            width: "170px",
            backgroundColor: "#A6A4A5",
            color: "black",
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            Message
          </Typography>
        </Button>
        <Button
          variant="outlined"
          endIcon={<LikeIcon sx={{ height: "35px", width: "35px" }} />}
          sx={{
            height: "50px",
            width: "120px",
            backgroundColor: "#A6A4A5",
            color: "black",
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            Like
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
};
export default BottomContainer;
