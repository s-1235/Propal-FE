import { Button, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/slices/modal";
import { updatepProfile } from "../../api";
import { getMe } from "../../api";
import { useEffect } from "react";
import { authActions } from "../../store/slices/authSlice";
const UpdateProfile = () => {
  const [previousData, setPreviousData] = useState("");
  useEffect(() => {
    const dumy = async () => {
      const myData = await getMe();
      console.log(myData);
      setPreviousData(myData?.data?.data?.data);
      console.log(previousData);
    };
    dumy();
  }, []);
  const [username, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [bioText, setBioText] = useState(null);
  console.log(
    "registation submitted",
    `name:${username}`,
    `email:${email}`,
    `phoneNumber:${phone}`,
    `BioText:${bioText}`
  );
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
  const handleUpdation = async (e) => {
    e.preventDefault();
    let body = { username, bioText, email, phone };
    console.log(
      "registation submitted",
      `name:${username}`,
      `email:${email}`,
      `phoneNumber:${phone}`,
      `BioText:${bioText}`
    );
    Object.keys(body).forEach(
      (k) =>
        (body[k] === null && delete body[k]) ||
        (body[k] === "" && delete body[k])
    );
    if (Object.keys(body).length === 0) {
      console.log("Closing model");
      dispatch(modalActions.closeModal());
    } else {
      try {
        const data = await updatepProfile(body);
        console.log(data);
        if (data.data.status === "success") {
          dispatch(modalActions.closeModal());
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(data.data));
          dispatch(authActions.localAuthenticate(data.data.user));
        }
      } catch (err) {
        console.log(err);
      }
    }
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
          Update Profile
        </Typography>

        <TextField
          variant="standard"
          label={username || username === "" ? "Enter UserName" : ""}
          type="text"
          onChange={handleNameChange}
          value={username || username === "" ? username : previousData.username}
          sx={{
            marginBottom: "1rem",
          }}
        />
        <TextField
          variant="standard"
          label={phone || phone === "" ? "Enter Phone Number" : ""}
          type="phone"
          onChange={handlePhoneChange}
          value={phone || phone === "" ? phone : previousData.phone}
          sx={{
            marginBottom: "1rem",
          }}
        />
        <TextField
          variant="standard"
          label={email || email === "" ? "Email" : ""}
          type="email"
          onChange={handleEmailChange}
          value={email || email === "" ? email : previousData.email}
          sx={{
            marginBottom: "1rem",
          }}
        />
        <TextField
          variant="standard"
          label={bioText || bioText === "" ? "Bio Text" : ""}
          type="text"
          onChange={handleBioTextChange}
          value={bioText || bioText === "" ? bioText : previousData.bioText}
          sx={{
            marginBottom: "2rem",
          }}
        />
        <Button
          variant="contained"
          sx={{ bgcolor: "#1d3557" }}
          onClick={handleUpdation}
          type="submit"
        >
          Update Now
        </Button>
      </Box>
    </form>
  );
};

export default UpdateProfile;
