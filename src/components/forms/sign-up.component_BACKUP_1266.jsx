import { Button, TextField, Box, Typography, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupAction } from "../../store/slices/authSlice";
import axios from "axios";

const SignUp = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bioText, setBioText] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleBioTextChange = (e) => {
    setBioText(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleBioText = (e) => {
    setBioText(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    console.log(
      "registation submitted",
      `name:${username}`,
      `email:${email}`,
      `phoneNumber:${phone}`,
      `BioText:${bioText}`,
      `password:${password}`,
      `confirmPassword:${confirmPassword}`,
      `userType:${userType}`
    );
    if (userType == "user") {
      dispatch(
        signupAction({
          username,
          email,
          password,
          confirmPassword,
          phone,
        })
      );
    } else {
      const body = {
        username: username,
        bioText: bioText,
        phone,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        userType,
      };
      try {
        const res = await axios.post(
          "http://localhost:6969/contractor/signup/",
          body
        );
        console.log(res);
        if (res.status == 201) {
          console.log("ok");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
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
  const handleUserType = (e) => {
    setUserType(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit by form");
      }}
    >
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
            marginBottom: "1rem",
          }}
        >
          Create Account
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
          label="Name"
          type="text"
          onChange={handleNameChange}
          value={username}
          sx={{
            marginBottom: "1rem",
          }}
        />
        <TextField
          variant="standard"
          label="Enter Phone Number"
          type="phone"
          onChange={handlePhoneChange}
          value={phone}
          sx={{
            marginBottom: "1rem",
          }}
        />
        <TextField
          variant="standard"
          label="Bio Text"
          type="email"
          onChange={handleBioTextChange}
          value={bioText}
          sx={{
            marginBottom: "1rem",
          }}
        />
        <TextField
          variant="standard"
          label="Email"
          type="email"
          onChange={handleEmailChange}
          value={email}
          sx={{
            marginBottom: "1rem",
          }}
        />
        <TextField
          variant="standard"
          label="Bio Text"
          type="text"
          onChange={handleBioText}
          value={bioText}
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
            marginBottom: "1rem",
          }}
        />
        <TextField
          variant="standard"
          label="Confirm Password"
          type="password"
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
          sx={{
            marginBottom: "1rem",
          }}
        />
        <Button
          variant="contained"
          sx={{ bgcolor: "#1d3557" }}
          onClick={handleRegistration}
          type="submit"
        >
          Create Account
        </Button>
      </Box>
    </form>
  );
};

export default SignUp;
