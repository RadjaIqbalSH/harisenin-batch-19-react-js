import React from "react";
import { NavLink } from "react-router";

const CardMenu = (props) => {
	return (
		<div className="card-menu">
			<p>{props.name}</p>
			<p>{props.price}</p>
			<p>{props.category}</p>
			<NavLink className="btn-menu" to={props.detailUrl}>
				Detail
			</NavLink>
			<NavLink className="btn-menu" to={props.updateUrl}>
				Update
			</NavLink>
			<button onClick={props.onClickDelete}>Delete</button>
		</div>
	);
};

export default CardMenu;
