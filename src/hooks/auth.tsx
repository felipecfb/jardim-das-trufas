import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProps, AuthProviderProps, User } from "./types";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const router = useRouter();

  function loginWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;

        setUser(user);

        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
        setLoading(false);
    });

    return () => unsubscribe();
}, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
