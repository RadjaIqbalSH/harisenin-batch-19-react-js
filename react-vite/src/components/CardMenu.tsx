import type { FC } from "react";
import { NavLink } from "react-router";

interface ICardMenuProps {
	name: string;
	price: string;
	category: string;
	detailUrl: string;
	updateUrl: string;
	onClickDelete: () => void;
}

const CardMenu: FC<ICardMenuProps> = (props) => {
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
