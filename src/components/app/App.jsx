import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Game from "../appGame/game/Game";
import AppMarvel from "../appMarvel/appMarvel/AppMarvel";
import AppHeader from "../appMarvel/appHeader/AppHeader";
import AppBanner from "../appMarvel/appBanner/AppBanner";
import ComicsList from "../appMarvel/comicsList/ComicsList";
import Page404 from "../page404/Page404";
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
						<Route path="*" element={<Page404 />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
