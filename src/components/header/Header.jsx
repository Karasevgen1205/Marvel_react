import logo from "../../resources/img/Avengers_logo.png";
import "./header.scss";

const Header = ({ onChangeRoute }) => {
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
                <a
                  href="#"
                  className="header__link"
                  onClick={() => {
                    onChangeRoute("marvel");
                  }}
                >
                  Marvel
                </a>
              </li>
              <li className="header__item">
                <a
                  href="#"
                  className="header__link"
                  onClick={() => {
                    onChangeRoute("ticTacToe");
                  }}
                >
                  Tic tac toe
                </a>
              </li>
              <li className="header__item">
                <a
                  href="#"
                  className="header__link"
                  onClick={() => {
                    onChangeRoute("employeesList");
                  }}
                >
                  Employees list
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
