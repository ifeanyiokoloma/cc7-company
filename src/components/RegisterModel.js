import { forwardRef, useContext } from "react";
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const { handleClose, open } = useContext(ModalContext);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      component="form"
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
              <TextField label="Full name" variant="filled" />
              <TextField label="Username" variant="filled" />
              <TextField label="Email" variant="filled" type="email" />
              <TextField label="Password" variant="filled" type="password" />
              <TextField label="telephone" variant="filled" />
              <SelectGender />
            </Stack>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </DialogContent>
      </Stack>
      {/* <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar> */}
      {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List> */}
    </Dialog>
  );
}
