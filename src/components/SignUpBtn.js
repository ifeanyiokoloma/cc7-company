import { Button } from "@mui/material";
import React, { useContext } from "react";
import { ModalContext } from "../providers/context";

const SignUpBtn = () => {
  const { handleOpen } = useContext(ModalContext);
  return (
    <Button variant="outlined" sx={{color: "white", borderColor: "white" }} onClick={handleOpen}>
      SignUp
    </Button>
  );
};

export default SignUpBtn;
