import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from "../../resources/img/vision.png";
import "./app.scss";

class App extends Component {
  state = {
    selectedChar: null,
  };

  onCharSelected = (id) => {
    this.setState({ selectedChar: id });
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <ErrorBoundary>
            <AppHeader />
          </ErrorBoundary>
          <main>
            <RandomChar />
            <div className="char__content">
              <ErrorBoundary>
                <CharList onCharSelected={this.onCharSelected} />
              </ErrorBoundary>
              <ErrorBoundary>
                <CharInfo charId={this.state.selectedChar} />
              </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
