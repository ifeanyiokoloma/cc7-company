import { useState } from "react";
import { AuthContext } from "./context";

const DialogProvider = ({ children }) => {
  const [user, setUser] = useState({});

  console.log(user);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default DialogProvider;
