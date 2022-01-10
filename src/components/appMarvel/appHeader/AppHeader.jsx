import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <section className="marvel-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="marvel-header__wrapper">
              <h1 className="marvel-header__title">
                <Link to="/marvel">
                  <span>Marvel</span> information portal
                </Link>
              </h1>
              <nav className="marvel-header__menu">
                <ul>
                  <li>
                    <NavLink
                      end
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "#9F0013" : "inherit",
                        };
                      }}
                      to="/marvel"
                    >
                      Characters
                    </NavLink>
                  </li>
                  /
                  <li>
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "#9F0013" : "inherit",
                        };
                      }}
                      to="/marvel-comics"
                    >
                      Comics
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHeader;
