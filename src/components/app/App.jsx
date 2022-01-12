import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../appHome/Home";
import Game from "../appGame/game/Game";
import Page404 from "../page404/Page404";
import Spinner from "../appMarvel/spinner/Spinner";
import "./app.scss";

const AppMarvel = lazy(() => import("../appMarvel/appMarvel/AppMarvel"));
const AppHeader = lazy(() => import("../appMarvel/appHeader/AppHeader"));
const AppBanner = lazy(() => import("../appMarvel/appBanner/AppBanner"));
const ComicsList = lazy(() => import("../appMarvel/comicsList/ComicsList"));
const SingleComic = lazy(() => import("../appMarvel/singleComic/SingleComic"));
const AppEmployeesList = lazy(() =>
	import("../appEmployeesList/appEmployeesList/AppEmployeesList")
);

const App = () => {
	return (
		<Router>
			<div className="all-works">
				<Header />
				<main className="app">
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/tic-tac-toe" element={<Game />} />
							<Route path="/marvel" element={<AppMarvel />} />
							<Route path="/employees-list" element={<AppEmployeesList />} />
							<Route
								path="/marvel-comics"
								element={
									<>
										<AppHeader />
										<AppBanner />
										<ComicsList />
									</>
								}
							/>
							<Route path="/marvel-comics/:comicID" element={<SingleComic />} />
							<Route path="*" element={<Page404 />} />
						</Routes>
					</Suspense>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
