import {
  createContext,
  FunctionComponent,
  useState,
  useEffect,
  useContext,
} from "react";
import { getAuth, User, signOut } from "firebase/auth";
import initFirebase from "./initFirebase";
import { removeTokenCookie, setTokenCookie } from "./tokenCookies";
import { useRouter } from "next/router";

initFirebase();

interface IAuthContext {
  user: User | null;
  logout: () => void;
  authenticated: boolean;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  logout: () => null,
  authenticated: false,
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const auth = getAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
        console.log("Signed out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const cancelAuthListener = auth.onIdTokenChanged(async (user) => {
      try {
        if (user) {
          console.log(user);
          const token = await user.getIdToken();
          setTokenCookie(token);
          setUser(user);
        } else {
          removeTokenCookie();
          setUser(null);
        }
      } catch (error) {
        console.log(error.message);
      }
    });

    return () => {
      cancelAuthListener();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, authenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
