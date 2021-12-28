import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import logo from "../../resources/img/Avengers_logo.png";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img src={logo} alt="Header logo" />
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <Link to="/" className="header__link">
                  Home
                </Link>
              </li>
              <li className="header__item">
                <Link to="/marvel" className="header__link">
                  Marvel
                </Link>
              </li>
              <li className="header__item">
                <Link to="/tic-tac-toe" className="header__link">
                  Tic tac toe
                </Link>
              </li>
              <li className="header__item">
                <Link to="/employees-list" className="header__link">
                  Employees list
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
