import { Button } from "@mui/material";
import React, { useContext } from "react";
import { DialogContext } from "../providers/context";

const SignInBtn = () => {
  const { handleOpenSignIn } = useContext(DialogContext);
  return (
    <Button variant="text" sx={{color: "white", borderColor: "white" }} onClick={handleOpenSignIn}>
      SignIn
    </Button>
  );
};

export default SignInBtn;
