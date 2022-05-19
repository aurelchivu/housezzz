/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import Image from "next/Image";

interface NProps {
  authenticated: boolean;
  logout: () => void;
}

const Navbar: FunctionComponent<NProps> = ({ authenticated, logout }) => {
  return (
    <nav className="bg-emerald-700 py-1">
      <div className="px-5 flex items-center justify-between h-16">
        <Link href="/">
          <a>
            <img src="/home-color.svg" width={24} height={24} alt="" />
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
