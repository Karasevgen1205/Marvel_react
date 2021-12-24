import { Component } from "react";
import Header from "../header/Header";
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
      <div className="app">
        <Header onChangeRoute={this.onChangeRoute} />
        {this.state.route === "ticTacToe" ? <Game /> : null}
        {this.state.route === "marvel" ? <AppMarvel /> : null}
        {this.state.route === "employeesList" ? <AppEmployeesList /> : null}
      </div>
    );
  }
}

export default App;
