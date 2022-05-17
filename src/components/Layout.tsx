import { FunctionComponent, ReactChild, ReactChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../auth/useAuth";

interface LProps {
  children: ReactChild | ReactChildren;
}

const Layout: FunctionComponent<LProps> = ({ children }) => {
  const { logout, authenticated } = useAuth();

  return (
    <div className="bg-emerald-900 max-w-screen-3xl mx-auto text-white">
      <Navbar authenticated={authenticated} logout={logout} />
      <main className="p-2">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
