import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import List from "../../components/dashboard/list.component";
import DashNav from "../../components/dashboard/navi.component";
import { styled } from "@mui/material/styles";
import PropertyTab from "../../components/dashboard/propertytab.component";
import { useEffect, useState } from "react";
import axios from "axios";

import { getUserData } from "./../../api";

const ListItem = styled("li")(() => ({
  border: "2px solid #1d3557",
  color: "#1d3557",
  width: "16rem",
  display: "block",
  padding: ".6rem 1.8rem",
  marginBottom: ".5rem",
  letterSpacing: ".1rem",
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: "#1d3557",
    color: "white",
    cursor: "pointer",
  },
}));

const Dashboard = () => {
  // const userData = useSelector(({ auth }) => auth.user);
  // console.log('datakjkajksa', userData);

  // axios.get("")
  const x = JSON.parse(localStorage.getItem("user"));
  console.log(x.user._id);
  const uId = x.user._id;

  const [userData, setUdata] = useState(null);
  useEffect(() => {
    const dummy = async () => {
      const data = await getUserData(uId);

      console.log("effeccctttt dasshhh");
      setUdata(data.data.data.user);
    };
    dummy();
  }, []);

  console.log("uid data bitch", userData);
  const notApprovedProperties = userData?.properties?.filter(
    (prop) => prop.isApproved === false
  );
  const approvedProperties = userData?.properties?.filter(
    (prop) => prop.isApproved === true
  );

  console.log("not approved", notApprovedProperties);
  const [property, setProperty] = useState(true);
  const [active, setActive] = useState(false);
  const [discard, setDiscarded] = useState(false);
  const [setting, setSetting] = useState(false);

  const handleProperty = () => {
    setProperty(true);
    setActive(false);
    setDiscarded(false);
    setSetting(false);
  };
  const handleActive = () => {
    setActive(true);
    setProperty(false);
    setDiscarded(false);
    setSetting(false);
  };
  const handleDiscarded = () => {
    setDiscarded(true);
    setProperty(false);
    setActive(false);
    setSetting(false);
  };
  const handleSetting = () => {
    setSetting(true);
    setDiscarded(false);
    setProperty(false);
    setActive(false);
  };

  return (
    <Box>
      <Box sx={{ background: "#A8DADC", width: "100%" }}>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#ddd",
            fontWeight: "500",
            textTransform: "capitalize",
            textAlign: "center",
            // ml: '6rem',
            padding: "2rem 0",
            bgcolor: "#1d3557",
          }}
        >
          Welcome to the Dashboard!
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#1d3557",
            fontWeight: "500",
            // textTransform: 'capitalize',
            // fontSize: '2.7rem',
            ml: "6rem",
            padding: "1rem 0",
          }}
        >
          Hello,
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontStyle: "italic",
              color: "#1d3557",
              fontWeight: "bold",
              textTransform: "capitalize",
              // fontSize: '2.7rem',
              display: "inline-block",
              mr: ".5rem",
            }}
          >
            {userData?.username}.
          </Typography>
          We have organized everything for you ;-)
        </Typography>
      </Box>
      {/* <DashNav />  //!Remove its file too later */}
      <Box marginY={7} sx={{ display: "flex", gap: "5rem" }}>
        <ul className="container">
          <ListItem
            onClick={handleProperty}
            sx={{
              background: `${property ? "#1d3557" : "#fff"}`,
              color: `${property ? "#fff" : "#1d3557"}`,
            }}
          >
            Properties
          </ListItem>
          <ListItem
            onClick={handleActive}
            sx={{
              background: `${active ? "#1d3557" : "#fff"}`,
              color: `${active ? "#fff" : "#1d3557"}`,
            }}
          >
            Approved Properties
          </ListItem>
          <ListItem
            onClick={handleDiscarded}
            sx={{
              background: `${discard ? "#1d3557" : "#fff"}`,
              color: `${discard ? "#fff" : "#1d3557"}`,
            }}
          >
            Not Approved
          </ListItem>
          <ListItem onClick={handleSetting}>Account Settings</ListItem>
        </ul>
        {/* //Property */}
        {property ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {userData?.properties?.map((prop, i) => (
              <PropertyTab property={prop} key={i} />
            ))}
          </Box>
        ) : (
          ""
        )}
        {active ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {approvedProperties.length > 0
              ? approvedProperties?.map((prop, i) => (
                  <PropertyTab property={prop} key={i} />
                ))
              : "There are no approved properties"}
          </Box>
        ) : (
          ""
        )}
        {discard ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {notApprovedProperties?.map((prop, i) => (
              <PropertyTab property={prop} key={i} />
            ))}
          </Box>
        ) : (
          ""
        )}
        {setting ? <h2>Account Settings</h2> : ""}
      </Box>
    </Box>
  );
};

export default Dashboard;
