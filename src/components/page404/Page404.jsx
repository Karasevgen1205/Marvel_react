import { Link } from "react-router-dom";
import gif from "../../resources/img/404.gif";
import "./page404.scss";

const Page404 = () => {
	return (
		<section className="page404">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="page404__wrapper">
							<h1 className="page404__title">404</h1>
							<div className="page404__img">
								<img src={gif} alt="page doesn't exist" />
							</div>
							<div className="page404__content">
								<h2>Look like you're lost</h2>
								<p>the page you are looking for not avaible!</p>
								<Link to="/">Back to homepage</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page404;
