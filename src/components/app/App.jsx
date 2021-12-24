import { Component } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
			// <Router>
			<div className="app">
				<div className="container">
					{/* <nav>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/login">login</Link>
								</li>
								<li>
									<Link to="/recovery-passwor">recovery-passwor</Link>
								</li>
							</ul>
						</nav> */}
					{/* <Routes>
							<Route exact path="/" element={<h1>Home</h1>} />
							<Route
								exact
								path="/login"
								element={
									<ErrorBoundary>
										<CharInfo charId={this.state.selectedChar} />
									</ErrorBoundary>
								}
							/>
							<Route
								exact
								path="/recovery-password"
								element={<h1>recovery-password</h1>}
							/>
						</Routes> */}
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
			// </Router>
		);
	}
}

export default App;
