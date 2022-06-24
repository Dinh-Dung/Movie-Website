import { useCallback } from "react";
import { useContext } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function useLogin() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
  const [user, setUser] = useState();

  const login = useCallback(async (userName, Pass) => {
    const res = await fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        Username: userName,
        Pass,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setUser(result);
  }, []);
  
  const data = useMemo(
    () => ({
      user,
      login,
    }),
    [user, login]
  );

  return <AuthContext.Provider value={data}>
    {
        children
    }
  </AuthContext.Provider>;
}
