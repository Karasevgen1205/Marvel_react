import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from "../../../resources/img/vision.png";
import "./appMarvel.scss";

const AppMarvel = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };

  return (
    <>
      <ErrorBoundary>
        <AppHeader />
      </ErrorBoundary>
      <RandomChar />
      <section className="char-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* make a mobile adaptation */}
              <div className="char__content">
                <ErrorBoundary>
                  <CharList onCharSelected={onCharSelected} />
                </ErrorBoundary>
                <div className="char__content_right">
                  <ErrorBoundary>
                    <CharInfo charId={selectedChar} />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <CharSearchForm />
                  </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppMarvel;
