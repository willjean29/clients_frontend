import React from "react";
import "./Footer.css";
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; Clientes 2021 </p>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        Acerca de este proyecto
      </a>
    </footer>
  );
};

export default Footer;
