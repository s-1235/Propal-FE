import { Button, TextField, Box, Typography, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../store/slices/authSlice";
import { modalActions } from "../../store/slices/modal";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUserType = (e) => {
    setUserType(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log('login ', `email:${email}`, `password:${password}`);
    const body = {
      email: email,
      password: password,
    };
    if (userType === "user") {
      const data = await dispatch(loginAction({ email, password }));
      console.log(data.payload.status);
      if (data.payload.status === "success") {
        console.log("Hello");
        dispatch(modalActions.closeModal());
      }
    } else {
      console.log("okkkdas");
      try {
        const res = await axios.post(
          "http://localhost:6969/contractor/login/",
          body
        );
        console.log(res);
        if (res.status == 200) {
          console.log("ok");
          localStorage.setItem("currentlyLogged", "contractor");
          localStorage.setItem("contractor", JSON.stringify(res.data));
          localStorage.removeItem("user");
          dispatch(modalActions.closeModal());
          navigate("/contractor");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("./dashboard");
  }, [isAuthenticated]);

  console.log(email); // current email
  console.log(password); // current password
  const [userType, setUserType] = useState("user");
  const users = [
    {
      value: "user",
      label: "User",
    },
    {
      value: "contractor",
      label: "Contractor",
    },
  ];
  return (
    <form onSubmit={handleLogin}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: "#1d3557",
            fontWeight: 500,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Sign In
        </Typography>

        <TextField
          id="city-selection"
          select
          label="User type"
          value={userType}
          onChange={handleUserType}
          helperText=""
        >
          {users.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="standard"
          label="Email"
          type="email"
          onChange={handleEmailChange}
          value={email}
          sx={{
            marginBottom: "2rem",
          }}
        />
        <TextField
          variant="standard"
          label="Password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
          sx={{
            marginBottom: "2rem",
          }}
        />
        <Button
          variant="contained"
          sx={{ bgcolor: "#1d3557" }}
          type="submit"
          // disabled={true}
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export default SignIn;
