import "./appBanner.scss";
import avengers from "../../../resources/img/Avengers.png";
import avengersLogo from "../../../resources/img/Avengers_logo.png";

const AppBanner = () => {
	return (
		<section className="char-banner">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="app__banner">
							<div className="app__banner-img">
								<img src={avengers} alt="Avengers" />
							</div>
							<p className="app__banner-text">
								New comics every week!
								<br />
								Stay tuned!
							</p>
							<div className="app__banner-logo">
								<img src={avengersLogo} alt="Avengers logo" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppBanner;
