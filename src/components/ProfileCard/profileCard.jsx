import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const ProfileCard = (props) => {
  const navigate = useNavigate();
  const value = 4.5;
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "inline-block",
        marginLeft: 5,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={props.Image}
        alt={props.name}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#A6A4A5",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textTransform: "uppercase" }}
        >
          {props.FirstName} {props.LastName}
        </Typography>
        <Typography sx={{ textTransform: "capitalize" }}>
          {props.profiletype}
        </Typography>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon
                style={{
                  opacity: 0.55,
                }}
                fontSize="inherit"
              />
            }
            classes={{ iconFilled: "white" }}
          />
          <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        </Box>
        <Typography
          color="#F1F1F1"
          textAlign="center"
          marginTop="10px"
          whiteSpace="break-spaces"
          sx={{
            width: "200px",
            height: "50px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "inline-block",
            WebkitLineClamp: 3,
          }}
        >
          {props.about}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#A6A4A5",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            ":hover": {
              bgcolor: "white", // theme.palette.primary.main
              color: "black",
            },
            backgroundColor: "#595959",
            height: "50px",
            width: "100px",
            borderRadius: "35%",
            marginLeft: 1,
            color: "white",
          }}
          onClick={() => {
            navigate(`/users/${props.Id}`);
          }}
        >
          Contact
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProfileCard;
