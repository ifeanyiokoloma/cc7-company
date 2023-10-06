import { useState } from "react";
import { DialogContext } from "./context";

const DialogProvider = ({ children }) => {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  const handleOpenSignUp = () => {
    console.log("sign up opens");
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
     console.log("sign up closes");
    setOpenSignUp(false);
  };

  const handleOpenSignIn = () => {
    setOpenSignIn(true);
  };

  const handleCloseSignIn = () => {
    setOpenSignIn(false);
  };

  return (
    <DialogContext.Provider
      value={{
        openSignUp,
        openSignIn,
        handleOpenSignUp,
        handleCloseSignUp,
        handleOpenSignIn,
        handleCloseSignIn,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
