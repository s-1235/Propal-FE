import {
  styled,
  Button,
  Grid,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { approveProperty, unApprovedProperties } from "../../api";
import UserBox from "./components/user-box.component";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import AssignmentTurnedInSharpIcon from "@mui/icons-material/AssignmentTurnedInSharp";
import { adminData } from "../../store/slices/adminSlice";
const ListItem = styled("li")(() => ({
  // border: "1px solid #000",
  color: "#1d3557",
  width: "14rem",
  padding: ".6rem 1.8rem",
  marginBottom: ".5rem",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#1d3557",
    color: "white",
    cursor: "pointer",
  },
}));

const AdminDashboard = () => {
  const [userClicked, setUserClicked] = useState(false);
  const [unApprovedClicked, setUnApprovedClicked] = useState(false);
  const [users, setUsers] = useState(null);
  const dispatch = useDispatch();
  const handleUserClicked = () => {
    setUserClicked((state) => !state);
    setUnApprovedClicked(false);
  };
  const handleUnApprovedClicked = () => {
    setUnApprovedClicked((state) => !state);
    setUserClicked(false);
  };

  const [unApproved, setUnapproved] = useState(null);

  const handleApproval = useCallback(async (e) => {
    console.log(e.target.dataset.id);
    let id = e.target.dataset.id;
    let res = await approveProperty(id);

    const data = await unApprovedProperties();
    console.log("calbackkkkkk");
    setUnapproved(data);

    console.log(res);
  });

  useEffect(() => {
    const dummy = async () => {
      const data = await unApprovedProperties();
      console.log("effeccctttt");
      setUnapproved(data);
    };
    dummy(); //!ISSUEE HERE
  }, []);
  console.log("un-approvedd", unApproved);
  useEffect(() => {
    const dummy = async () => {
      const admin = await dispatch(adminData());
      setUsers(admin.payload.users);
      console.log(admin);
    };
    dummy();
  }, [users]);
  return (
    <Grid margin={4}>
      <Typography
        sx={{
          fontFamily: "fantasy",
          fontWeight: "600",
          marginLeft: 5,
          marginBottom: 2,
        }}
      >
        Admin Dashboard
      </Typography>
      <ListItem onClick={handleUserClicked}>
        <Avatar
          sx={{
            backgroundColor: "#1d3557",
          }}
        >
          <PeopleAltSharpIcon />
        </Avatar>
        <ListItemText
          sx={{ marginLeft: 2.5 }}
          primary={
            <Typography
              variant="h6"
              sx={{ color: "black", "&:hover": { color: "white" } }}
            >
              Users
            </Typography>
          }
          secondary="Records"
        />
      </ListItem>
      <ListItem onClick={handleUnApprovedClicked}>
        <Avatar
          sx={{
            backgroundColor: "#1d3557",
          }}
        >
          <AssignmentTurnedInSharpIcon />
        </Avatar>
        <ListItemText
          sx={{ marginLeft: 2.5 }}
          primary={
            <Typography
              variant="h6"
              sx={{ color: "black", "&:hover": { color: "white" } }}
            >
              Unapproved
            </Typography>
          }
          secondary="Records"
        />
      </ListItem>

      {userClicked &&
        users?.map((user, i) => <UserBox userObj={user} key={i} />)}
      {unApprovedClicked &&
        unApproved &&
        unApproved.data.data.properties?.map((prop, i) => (
          <li
            key={i}
            style={{
              marginTop: "2px",
              listStyleType: "none",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "5px",
              boxShadow: "3px 3px 3px 3px rgba(0,0,0,.15)",
              height: "80px",
              marginBottom: "20px",
              width: "700px",
              alignSelf: "center",
              marginLeft: "278px",
            }}
          >
            <Typography
              component="h2"
              sx={{
                alignSelf: "center",
                textTransform: "capitalize",
                fontWeight: "600",
                letterSpacing: "1.5px",
                marginLeft: 2,
              }}
            >
              {" "}
              {prop.title}
            </Typography>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#1d3557", marginRight: 2 }}
              onClick={handleApproval}
              data-id={prop._id}
            >
              Approve this
            </Button>
          </li>
        ))}
    </Grid>
  );
};

export default AdminDashboard;
