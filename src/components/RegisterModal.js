import { forwardRef, useContext, useState } from "react";
import { ModalContext } from "../providers/context";
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
import SelectGender from "./SelectGender";
import { enqueueSnackbar } from "notistack";
import api from "../api";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [userInfo, setUserInfo] = useState({
    fname: "",
    username: "",
    email: "",
    psd: "",
    tel: "",
    gender: "",
  });
  const contextValue = useContext(ModalContext);

  const { handleClose, open } = contextValue;

  const handleRegister = e => {
    const value = e.target.value;
    const name = e.target.name;

    setUserInfo(oldInfo => ({ ...oldInfo, [name]: value }));
  };

  const postData = async () =>
    await api({
      method: "post",
      url: "/auth/register",
      data: userInfo,
    });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await postData();
      console.log(res.data);
      enqueueSnackbar(res.data.message, { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.response.data.error, { variant: "error" });
    }
  };

  // console.log(open);

  return (
    <Dialog
      fullScreen
      open={open === undefined ? false : open}
      onClose={handleClose}
      TransitionComponent={Transition}
      component="form"
      onSubmit={handleSubmit}
    >
      <Stack spacing={4}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>

            <Stack spacing={2}>
              <TextField
                required
                onChange={handleRegister}
                name="fullname"
                label="Full name"
                variant="filled"
              />

              <TextField
                required
                onChange={handleRegister}
                name="username"
                label="Username"
                variant="filled"
              />

              <TextField
                required
                onChange={handleRegister}
                name="email"
                label="Email"
                variant="filled"
                type="email"
              />

              <TextField
                required
                onChange={handleRegister}
                name="password"
                label="Password"
                variant="filled"
                type="password"
              />

              <TextField
                required
                onChange={handleRegister}
                name="phone"
                label="telephone"
                variant="filled"
              />

              <SelectGender onChange={handleRegister} value={userInfo.gender} />
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
