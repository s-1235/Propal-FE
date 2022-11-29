import classes from "./imagesContainer.module.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
const ImagesContainer = () => {
  return (
    <>
      <Divider
        variant="inset"
        sx={{
          width: "1150px",
          marginTop: 3,
          marginLeft: 12.5,
        }}
      />

      <Grid
        container
        variant="container"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 8 }}
      >
        <img className={classes.image} src="/assets/img/garlic.jpg" />
        <Grid direction="column">
          <Grid direction="row">
            <img className={classes.image1} src="/assets/img/garlic.jpg" />
            <img className={classes.image2} src="/assets/img/garlic.jpg" />
          </Grid>
          <div className={classes.container}>
            <img className={classes.image3} src="/assets/img/garlic.jpg" />
            <button className={classes.button}>
              <Typography
                sx={{
                  fontSize: 36,
                  fontFamily: "Exo2",
                  marginTop: 2,
                }}
              >
                View All
              </Typography>
              <img
                style={{ height: "50px", width: "50px" }}
                src="/assets/icons/SVG/images_icon.svg"
              />
            </button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default ImagesContainer;
