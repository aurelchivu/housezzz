import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="text-center py-5">
      Copyright &copy; Homezzz {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
};

export default Footer;
