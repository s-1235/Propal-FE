import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "./../../singleAsset/profilebackground.jpg";
const useStyles = makeStyles({
  boxClass: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundImage: `linear-gradient(195deg, rgba(73, 163, 241, 0.6), rgba(26, 115, 232, 0.6)),url(${Image})`,
    position: "relative",
    minHeight: "20rem",
    opacity: 1,
    backgroundColor: "white",
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
    backgroundOrigin: "padding-box",
    backgroundClip: "border-box",
    color: `rgb(52, 71, 103)`,
    borderRadius: "10px",
    boxShadow: "none",
    backgroundSize: "cover",
    backgroundPosition: `50% center`,
    overflow: `hidden`,
    margin: 10,
  },
});
const BgContainer = () => {
  const classes = useStyles();
  return <Box className={classes.boxClass}></Box>;
};
export default BgContainer;
