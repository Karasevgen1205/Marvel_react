import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

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
					<AppHeader />
					<main>
						<RandomChar />
						<div className="char__content">
							<CharList onCharSelected={this.onCharSelected} />
							<CharInfo charId={this.state.selectedChar} />
						</div>
						<img className="bg-decoration" src={decoration} alt="vision" />
					</main>
				</div>
			</div>
		);
	}
}

export default App;
