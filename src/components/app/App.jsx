import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Game from "../appGame/game/Game";
import AppMarvel from "../appMarvel/appMarvel/AppMarvel";
import AppEmployeesList from "../appEmployeesList/appEmployeesList/AppEmployeesList";
import Home from "../appHome/Home";
import "./app.scss";

const App = () => {
  return (
    <Router>
      <div className="all-works">
        <Header />
        <main className="app">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/tic-tac-toe" element={<Game />} />
            <Route exact path="/marvel" element={<AppMarvel />} />
            <Route
              exact
              path="/employees-list"
              element={<AppEmployeesList />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
