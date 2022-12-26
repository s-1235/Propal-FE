import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/slices/modal";
import SignIn from "../forms/sign-in.component";
import SignUp from "../forms/sign-up.component";
import UpdateProfile from "../forms/update-profile.component";
const AuthModal = () => {
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => setSignUp((state) => !state);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalActions.closeModal());
  };
  console.log(isLoggedIn);
  const open = useSelector((state) => state.modal.opened);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {!isLoggedIn && (
          <>
            {!signUp && <SignIn />}

            {!signUp && (
              <Button onClick={handleSignUp}>Create an account</Button>
            )}

            {signUp && <SignUp />}

            {signUp && <Button onClick={handleSignUp}>Back to Login </Button>}
          </>
        )}
        {isLoggedIn && <UpdateProfile />}
      </Box>
    </Modal>
  );
};

export default AuthModal;
