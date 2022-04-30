/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, ReactChild, ReactChildren } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: ReactChild | ReactChildren;
}

const Layout: FunctionComponent<IProps> = ({ children }) => {
  const authenticated = false;
  const logout = () => null;
  return (
    <div className="bg-gray-800 max-w-screen-3xl mx-auto text-white">
      <Navbar authenticated={authenticated} logout={logout} />
      <main className="p-2">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
