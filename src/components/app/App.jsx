import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <AppHeader />
        <main>
          <RandomChar />
          <div className="char__content">
            <CharList />
            <CharInfo />
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    </div>
  );
};

export default App;
