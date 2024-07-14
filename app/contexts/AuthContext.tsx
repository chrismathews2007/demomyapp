"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type SignInData = {
  email: string;
  password: string;
};

type User = {
  userId: number;
  username: string;
};

interface AuthContextType {
  logOut: () => void;
  isAuthenticated: boolean;
  user: User | undefined;
  signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>();
  const isAuthenticated = false;  // TODO
  const router = useRouter();

  async function signIn({ email, password }: SignInData) {
    // TODO

    router.push("/");
  }

  const logOut = async () => {
    // TODO
  };

  return (
    <AuthContext.Provider
      value={{ signIn, logOut, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}