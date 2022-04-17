import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";

interface IProps {
  main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  return (
    <div className="bg-gray-900 max-w-screen-2xl mx-auto text-white">
      <nav className="bg-gray-800 style={{height: '64px'}}">nav</nav>
      {main}
    </div>
  );
};

export default Layout;
