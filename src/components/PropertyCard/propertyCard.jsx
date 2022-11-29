import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CarIcon from "@mui/icons-material/DirectionsCar";
import WashroomIcon from "@mui/icons-material/Bathtub";
import BedIcon from "@mui/icons-material/Bed";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
const PropertyCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: "flex",
        marginLeft: "20px",
        marginTop: "20px",
        borderRadius: "20px 20px 20px 20px",
        width: "900px",
        height: "280px",
        backgroundColor: "#EEEEEE",
        "&:hover": {
          transform: "scale(1.025) ",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "300px", borderRadius: "20px 20px 20px 20px" }}
        image="./../../assets/img/thumb.jpg"
        alt="Live from space album cover"
      />
      <CardContent
        sx={{
          width: "600px",
          backgroundColor: "#EEEEEE",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Badge
            badgeContent={props.Garages ? props.Garages : "0"}
            color="success"
          >
            <CarIcon sx={{ height: "40px", width: "40px" }} />
          </Badge>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ border: "1px solid black", height: "35px", marginLeft: 2 }}
          />
          <Badge
            badgeContent={props.Bedrooms ? props.Bedrooms : "0"}
            color="success"
          >
            <BedIcon sx={{ height: "40px", width: "40px", marginLeft: 2 }} />
          </Badge>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ border: "1px solid black", height: "35px", marginLeft: 2 }}
          />
          <Badge
            badgeContent={props.Washrooms ? props.Washrooms : "0"}
            color="success"
          >
            <WashroomIcon
              sx={{
                height: "40px",
                width: "40px",
                marginLeft: 2,
                marginRight: 1,
              }}
            />
          </Badge>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "600", fontSize: "22px" }}>
          {props.Name}
        </Typography>
        <Typography variant="subtitle2" marginTop="5px">
          {props.Area}, {props.City}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            height: "80px",
            fontWeidht: "600",
            marginTop: 1,
            whiteSpace: "break-spaces",
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "inline-block",
            WebkitLineClamp: 3,
          }}
          // sx={{
          //   width: "200px",
          //   height: "50px",
          // }}
        >
          <div dangerouslySetInnerHTML={{ __html: props.Description }}></div>
        </Typography>
        <IconButton
          varinat="contained"
          sx={{
            ":hover": {
              bgcolor: "white", // theme.palette.primary.main
              color: "black",
            },
            backgroundColor: "#595959",
            height: "50px",
            width: "100px",
            borderRadius: "35%",
            marginLeft: 55,
            color: "white",
            marginTop: 2,
          }}
          // onClick={() => {
          //   navigate(`/users/${props.PostedBy.id}`);
          // }}
          onClick={() => {
            navigate(`/property/${props.Id}`);
          }}
        >
          Contact
        </IconButton>
      </CardContent>
    </Card>
  );
};
export default PropertyCard;
