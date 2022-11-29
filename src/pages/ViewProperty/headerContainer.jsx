import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "name",
          },
          style: {
            position: "absolute",
            fontSize: 35,
            fontFamily: "Josefin Sans",
          },
        },
        {
          props: {
            variant: "location",
          },
          style: {
            fontSize: 25,
            display: "flex",
            fontFamily: "Josefin Sans",
          },
        },
      ],
    },
  },
});
const HeaderContainer = (props) => {
  return (
    <Grid
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <ThemeProvider theme={theme}>
        <Typography variant="name" sx={{ marginLeft: 15 }}>
          {props.Name}
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            marginTop: 5,
            marginRight: 15,
          }}
        >
          <img
            style={{
              height: "40px",
              width: "40px",
              color: "black",
              marginRight: "15px",
            }}
            src="/assets/icons/PNG/Location_Icon.png"
          />
          <Typography variant="location">
            {props.Area} / {props.City}
          </Typography>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
};
export default HeaderContainer;
