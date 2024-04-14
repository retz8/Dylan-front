"use client";

import { createContext, useState } from "react";

export const authContext = createContext({
  loggedInUserId: null,
  setLoggedInUserId: () => {},
});

export default function AuthContext({ children }) {
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  return (
    <authContext.Provider
      value={{
        loggedInUserId,
        setLoggedInUserId,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useAuthContext = () => useContext(authContext);
