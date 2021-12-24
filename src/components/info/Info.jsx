import "./info.scss";

const Info = ({ status, moves }) => {
	return (
		<div className="info">
			<span className="info__title">{status}</span>
			<ul className="info__list">{moves}</ul>
		</div>
	);
};

export default Info;
