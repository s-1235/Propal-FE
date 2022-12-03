import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
const PostCard = (props) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 250, marginLeft: 4.5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          // image={`./assets/img/${props.Images[0]}`}
          alt="Property"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Name}
          </Typography>
          <Typography
            sx={{
              width: "200px",
              height: "50px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "inline-block",
              WebkitLineClamp: 3,
            }}
          >
            {props.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{
            color: "rgb(52, 71, 103) !important",
            "&:hover": { borderColor: "white" },
            "&:active": {
              color: "white",
            },
          }}
          onClick={() => {
            navigate(-2);
            navigate(`/properties/${props.Id}`);
          }}
        >
          View Post
        </Button>
      </CardActions>
    </Card>
  );
};
export default PostCard;
