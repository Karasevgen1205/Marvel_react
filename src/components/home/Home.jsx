import { useEffect, useState } from "react";
import MarvelService from "../../services/MarvelService";
import cv from "../../resources/img/CV-2021.svg";
import "./home.scss";

const Home = () => {
	const [data, setData] = useState(null);
	const marvelService = new MarvelService();

	useEffect(() => {
		marvelService
			.getResource("https://www.nbrb.by/api/exrates/rates?periodicity=0")
			.then((res) => {
				setData(res);
			});
	}, []);

	let curs = null;

	if (data) {
		console.log(data);
		curs = data.map((item, i) => {
			return (
				<div className="block" key={i}>
					<span>{item.Cur_Abbreviation}</span>
					<span>{item.Cur_ID}</span>
					<span>{item.Cur_Name}</span>
					<span>{item.Cur_OfficialRate}</span>
					<span>{item.Cur_Scale}</span>
				</div>
			);
		});
	}

	return (
		<div className="home">
			<div className="container">
				<div className="home__curs">{curs}</div>
				<div className="home__img">
					<img src={cv} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Home;
