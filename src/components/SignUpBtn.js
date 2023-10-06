import { Button } from "@mui/material";
import React, { useContext } from "react";
import { DialogContext } from "../providers/context";

const SignUpBtn = () => {
  const { handleOpenSignUp } = useContext(DialogContext);
  return (
    <Button variant="outlined" sx={{color: "white", borderColor: "white" }} onClick={handleOpenSignUp}>
      SignUp
    </Button>
  );
};

export default SignUpBtn;
