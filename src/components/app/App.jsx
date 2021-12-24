import { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Game from "../appGame/game/Game";
import AppMarvel from "../appMarvel/AppMarvel";
import AppEmployeesList from "../appEmployeesList/appEmployeesList/AppEmployeesList";
import "./app.scss";

class App extends Component {
  state = {
    route: "marvel",
  };

  onChangeRoute = (route) => {
    this.setState({ route });
  };

  render() {
    return (
      <div className="all-works">
        <Header onChangeRoute={this.onChangeRoute} />
        <div className="app">
          {this.state.route === "ticTacToe" ? <Game /> : null}
          {this.state.route === "marvel" ? <AppMarvel /> : null}
          {this.state.route === "employeesList" ? <AppEmployeesList /> : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
