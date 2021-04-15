import React from "react";
import propTypes from "prop-types";

const Card = ({ title, subtitle, children }) => {
	return (
		<div className="shadow-lg rounded-lg bg-white my-4 p-4">
			<div>
				<h2 className="text-lg font-bold">{title}</h2>
				{subtitle && <p className="text-sm font-light text-gray-500">{subtitle}</p>}
			</div>
			<hr className="my-2" />
			<div>
				{children}
			</div>
		</div>
	);
};

Card.propTypes = {
	title: propTypes.string.isRequired,
	subtitle: propTypes.string,
	children: propTypes.element.isRequired
};

export default Card;