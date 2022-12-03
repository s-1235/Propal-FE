import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfileHeader from "./profileHeader";
import Divider from "@mui/material/Divider";
import ProfileInformation from "./profileInformation";
import RecentPosts from "./recentPosts";
import { useEffect, useState } from "react";
import { getAUser } from "../../Store/api";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  gridClass: {
    height: "800px",
    minWidth: "0px",
    backgroundColor: "rgb(255, 255, 255)",
    overflowWrap: "break-word",
    backgroundClip: `border-box`,
    border: `0px solid rgba(0, 0, 0, 0.125)`,
    borderRadius: "10px",
    boxShadow: `rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem`,
    overflow: "visible",
    position: "relative",
    padding: "16px",
    color: `rgba(0,0,0,0.87)`,
    transition: `box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    zIndex: 100,
    marginTop: -150,
    margin: 30,
  },
});
const ProfileData = (props) => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    let dumy = async () => {
      const data = await getAUser(id);
      setUserData(data?.data?.data?.data);
      console.log(data);
    };
    dumy();
    console.log("UseEffect Runing");
  }, [id]);
  const classes = useStyles();
  return (
    <Grid
      className={classes.gridClass}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ProfileHeader
        Name={userData?.name}
        ProfilePic={userData?.profilePic}
        ProfileType={userData?.userType}
        MyProfile={props.MyProfile}
      />
      <Divider variant="middle" sx={{ margin: 3 }} />
      <ProfileInformation
        FirstName={userData?.firstname}
        LastName={userData?.lastname}
        Email={userData?.email}
        Phone={userData?.phone}
        About={userData?.about}
        Address={userData?.address}
      />
      <Divider variant="middle" sx={{ margin: 3 }} />
      <RecentPosts />
    </Grid>
  );
};
export default ProfileData;
