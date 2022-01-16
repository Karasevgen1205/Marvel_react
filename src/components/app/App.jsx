// import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../appHome/Home";
import AppMarvel from "../appMarvel/appMarvel/AppMarvel";
// const AppMarvel = lazy(() => import("../appMarvel/appMarvel/AppMarvel"));
import AppHeader from "../appMarvel/appHeader/AppHeader";
// const AppHeader = lazy(() => import("../appMarvel/appHeader/AppHeader"));
import AppBanner from "../appMarvel/appBanner/AppBanner";
// const AppBanner = lazy(() => import("../appMarvel/appBanner/AppBanner"));
import ComicsList from "../appMarvel/comicsList/ComicsList";
// const ComicsList = lazy(() => import("../appMarvel/comicsList/ComicsList"));
import SinglePage from "../appMarvel/singlePage/SinglePage";
import SingleCharacterLayout from "../appMarvel/singleCharacterLayout/SingleCharacterLayout.js";
import SingleComicLayout from "../appMarvel/singleComicLayout/SingleComicLayout";
// const SingleComic = lazy(() => import("../appMarvel/singleComic/SingleComic"));
import AppEmployeesList from "../appEmployeesList/appEmployeesList/AppEmployeesList";
// const AppEmployeesList = lazy(() =>
//   import("../appEmployeesList/appEmployeesList/AppEmployeesList")
// );
import Game from "../appGame/game/Game";
import Page404 from "../page404/Page404";
import "./app.scss";

const App = () => {
  return (
    <Router>
      <div className="all-works">
        <Header />
        <main className="app">
          {/* <Suspense fallback={<Spinner />}> */}
          <Routes>
            <Route path="/" element={<Home run={true} />} />
            <Route path="/tic-tac-toe" element={<Game />} />
            <Route path="/marvel" element={<AppMarvel />} />
            <Route path="/employees-list" element={<AppEmployeesList />} />
            <Route
              path="/comics"
              element={
                <>
                  <AppHeader />
                  <AppBanner />
                  <ComicsList />
                </>
              }
            />
            <Route
              path="/comics/:id"
              element={
                <SinglePage Component={SingleComicLayout} dataType="comic" />
              }
            />
            <Route
              path="/characters/:id"
              element={
                <SinglePage
                  Component={SingleCharacterLayout}
                  dataType="character"
                />
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
          {/* </Suspense> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
