import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Game from "../appGame/game/Game";
import AppMarvel from "../appMarvel/AppMarvel";
import AppEmployeesList from "../appEmployeesList/appEmployeesList/AppEmployeesList";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="all-works">
          <Header />
          <div className="app">
            <Routes>
              <Route exact path="/tic-tac-toe" element={<Game />} />
              <Route exact path="/marvel" element={<AppMarvel />} />
              <Route
                exact
                path="/employees-list"
                element={<AppEmployeesList />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      // <div className="all-works">
      //   <Header onChangeRoute={this.onChangeRoute} />
      //   <div className="app">
      //     {this.state.route === "ticTacToe" ? <Game /> : null}
      //     {this.state.route === "marvel" ? <AppMarvel /> : null}
      //     {this.state.route === "employeesList" ? <AppEmployeesList /> : null}
      //   </div>
      //   <Footer />
      // </div>
    );
  }
}

export default App;
