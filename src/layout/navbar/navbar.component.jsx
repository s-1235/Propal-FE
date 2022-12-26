import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Container,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/buttons/primary-button.component";
import { authActions } from "../../store/slices/authSlice";
import { modalActions } from "../../store/slices/modal";

//!start
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Typography from '@mui/material/Typography';
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useEffect } from "react";
//!end
const Navbar = () => {
  //get the first letter of Username
  const letter = useSelector(({ auth }) =>
    auth?.user?.username[0].toUpperCase()
  );

  const dispatch = useDispatch();
  const handlebuttonClick = () => {
    dispatch(modalActions.showModal());
  };

  const [toggle, setToggle] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    dispatch(authActions.logOut());
    setToggle((state) => !state);
    navigate("/");
    // setAuth(isAuthenticated);
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  //!start
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //!end
  useEffect(() => {
    setCurrentUser(localStorage.getItem("user"));
  }, [currentUser, toggle, localStorage.getItem("user")]);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1d3557",
          padding: ".7rem 0",
          borderBottom: "2px solid #fff",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 1.8rem",
              }}
            >
              <Typography variant="h4" component="h1">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Propal.com
                </Link>
              </Typography>
              <Box>
                <PrimaryButton
                  onClick={() => navigate("/add")}
                  sx={{ marginRight: "2rem" }}
                >
                  Add a Property
                </PrimaryButton>
                {currentUser !== null && (
                  <PrimaryButton
                    onClick={() => navigate("/addJob")}
                    sx={{ marginRight: "2rem" }}
                  >
                    Post a Job
                  </PrimaryButton>
                )}
                {currentUser !== null && (
                  <PrimaryButton
                    onClick={() => navigate("/myJobs")}
                    sx={{ marginRight: "2rem" }}
                  >
                    My Jobs
                  </PrimaryButton>
                )}
                {currentUser !== null && (
                  <PrimaryButton
                    onClick={() => navigate("/lookForContractors")}
                    sx={{ marginRight: "2rem" }}
                  >
                    Look for Contractors
                  </PrimaryButton>
                )}
                {!(currentUser !== null) && (
                  <PrimaryButton onClick={handlebuttonClick}>
                    Sign In
                  </PrimaryButton>
                )}
                {/* //!starttt */}
                {currentUser !== null && (
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar>{letter ? letter : "A"}</Avatar>
                    </IconButton>
                  </Tooltip>
                )}

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleDashboard}>
                    <Avatar />
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/myAccount")}>
                    <Avatar /> My account
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/messenger")}>
                    <Avatar /> Inbox
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handlebuttonClick();
                    }}
                  >
                    <Avatar /> Update Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogoutClick}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
                {/* //!End */}
                {/* {localStorage.getItem('user') !== null && (
                  <>
                    <PrimaryButton onClick={handleLogoutClick}>
                      Log Out
                    </PrimaryButton>
                    <Box onClick={navigate('/dashboard')}>
                      <Avatar sx={{ bgcolor: 'orange' }}> N</Avatar>
                    </Box>
                  </>
                )} */}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
