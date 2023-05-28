import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  console.log(user);

  useEffect(() => {
    if (!user) {
      axios
        .post("/auth/verify")
        .then((data) => {
          setUser(data.data);
          setReady(true);
        })
        .catch(() => {
          setReady(true);
        });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
