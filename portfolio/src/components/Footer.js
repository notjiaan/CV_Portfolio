import React from "react";
import { Facebook, LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <footer className="page-footer font-small  mt-auto pt-3">
      <div className="footer-icons container text-center ">
        <Link href="https://www.facebook.com/jiaanabad19/">
          <Facebook className="mx-1 soc-med-icons" />
        </Link>
        <Link href="https://www.linkedin.com/in/jiaan-patrick-abad-6a431b215">
          <LinkedIn className="mx-1 soc-med-icons" />
        </Link>
        <Link href="https://github.com/notjiaan">
          <GitHub className="mx-1 soc-med-icons" />
        </Link>
        <Link href="https://www.instagram.com/notjiaan/">
          <Instagram className="mx-1 soc-med-icons" />
        </Link>
      </div>
      <div className="footer-copyright text-center text-light py-3">
        © 2022 Copyright: Jiaan Abad
      </div>
    </footer>
  );
};

export default Footer;
