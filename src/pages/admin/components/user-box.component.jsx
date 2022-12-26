import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { propertyDelete, userDelete } from "../../../api";
import { alertActions } from "../../../store/slices/alertSlice";
import { useNavigate } from "react-router-dom";
const UserBox = ({ userObj }) => {
  // Props= username and properties arrays
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((state) => !state);
  };
  const handlePropertyDeletion = async (e) => {
    let id = e.target.dataset.id;
    let res = await propertyDelete(id);
    console.log(res);
  };
  const handleUserDeletion = async () => {
    let res = await userDelete(userObj._id);
    console.log(res.data.status, "from server");

    res.data.status === "success"
      ? dispatch(alertActions.openAlertBox("Successfully Deleted the user"))
      : dispatch(alertActions.openAlertBox("There is some issue"));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "45rem",
        // justifyContent: 'center',
        margin: "0 auto",
        marginBottom: "1rem",
        borderRadius: "3px",
        padding: "1.2rem 1.8rem",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        // alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: clicked ? 2 : 0,
        }}
      >
        <Typography
          component="h2"
          sx={{
            alignSelf: "center",
            textTransform: "capitalize",
            fontWeight: "600",
            letterSpacing: "1.5px",
          }}
        >
          {userObj.username}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "300px",
          }}
        >
          <Button
            variant="contained"
            sx={{ bgcolor: "#1d3557" }}
            onClick={handleClick}
          >
            {" "}
            All Properties
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#1d3557" }}
            onClick={handleUserDeletion}
          >
            {" "}
            Delete User
          </Button>
        </Box>
      </Box>
      {clicked ? (
        userObj?.properties?.length > 0 ? (
          userObj?.properties?.map((prop, i) => (
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
              }}
            >
              <Typography
                sx={{
                  width: "330px",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  marginLeft: 1,
                }}
              >
                {prop.title}
              </Typography>
              <Button
                onClick={() => {
                  navigate(`/property/${prop._id}`);
                }}
                data-id={prop._id}
                variant="outlined"
              >
                View Property
              </Button>
              <Button
                variant="outlined"
                onClick={handlePropertyDeletion}
                data-id={prop._id}
                sx={{ marginRight: 1, marginLeft: 1 }}
              >
                Delete Property
              </Button>
            </li>
          ))
        ) : (
          <Typography
            sx={{
              fontWeight: "400",
              letterSpacing: ".5px",
              marginTop: 1,
            }}
          >
            This user do not have any property!
          </Typography>
        )
      ) : (
        ""
      )}
    </Box>
  );
};

export default UserBox;
