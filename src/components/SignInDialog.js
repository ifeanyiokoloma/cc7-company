import { forwardRef, useContext, useState } from "react";
import { AuthContext, DialogContext } from "../providers/context";
import {
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Dialog,
  Slide,
  DialogContentText,
  Button,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import api from "../api";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignInDialog() {
  const [userInfo, setUserInfo] = useState({
    userID: "",
    password: "",
  });

  const contextValue = useContext(DialogContext);
  const contextValue2 = useContext(AuthContext);

  const { handleCloseSignIn, openSignIn } = contextValue;
  const { setUser } = contextValue2;

  const handleLogin = e => {
    const value = e.target.value;
    const name = e.target.name;

    setUserInfo(oldInfo => ({ ...oldInfo, [name]: value }));
  };

  const postData = async () =>
    await api({
      method: "post",
      url: "/auth/login",
      data: userInfo,
    });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await postData();
      enqueueSnackbar(`${res.data.user.username} logged in`, {
        variant: "success",
      });

      const { user, accessToken } = res.data;

      setUser(oldUser => (oldUser = user));
      
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.response.data.error, { variant: "error" });
    }
  };

  return (
    <Dialog
      fullScreen
      open={openSignIn === undefined ? false : openSignIn}
      onClose={handleCloseSignIn}
      TransitionComponent={Transition}
      component="form"
      onSubmit={handleSubmit}
    >
      <Stack spacing={4}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>

            <Stack spacing={2}>
              <TextField
                required
                onChange={handleLogin}
                name="userID"
                label="username or email or phone number"
                variant="filled"
              />

              <TextField
                required
                onChange={handleLogin}
                name="password"
                label="Password"
                variant="filled"
                type="password"
              />
            </Stack>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </DialogContent>
      </Stack>
    </Dialog>
  );
}
