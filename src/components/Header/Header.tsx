import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Clientes</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/clients">Clientes</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
