import { ReactNode } from "react";

import { UserInfo } from "firebase/auth"

interface AuthProviderProps {
  children: ReactNode;
}

type User = UserInfo;

interface AuthContextProps {
  user: User | null;
}


export type {
  AuthProviderProps,
  AuthContextProps,
  User
}
