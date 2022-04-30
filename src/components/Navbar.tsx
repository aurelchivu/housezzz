/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";

interface IProps {
  authenticated: boolean;
  logout: () => void;
}

const Navbar: FunctionComponent<IProps> = ({ authenticated, logout }) => {
  return (
    <nav className="bg-gray-700 py-1">
      <div className="px-6 flex items-center justify-between h-16">
        <Link href="/">
          <a>
            <img
              src="/home-color.svg"
              alt="home house"
              className="inline w-6"
            />
          </a>
        </Link>
        {authenticated ? (
          <>
            <Link href="/houses/add">
              <a>Add House</a>
            </Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link href="/auth">
            <a>Login / Signup</a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
