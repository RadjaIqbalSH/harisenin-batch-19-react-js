import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMenu from "../components/CardMenu";
import { NavLink } from "react-router";

/**
 *
 * /Menu
 *
 * list menu
 * Delete menu
 *
 * endpoint menu list : https://6968be9069178471522b6774.mockapi.io/api/v1/menu
 * endpoint delete: https://6968be9069178471522b6774.mockapi.io/api/v1/menu/:id
 */

const Menu = () => {
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(false);

	function getListMenu() {
		setLoading(true);
		axios
			.get("https://6968be9069178471522b6774.mockapi.io/api/v1/menu")
			.then((response) => {
				setMenu(response.data);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	useEffect(() => {
		getListMenu();
	}, []);

	function deleteData(id) {
		setLoading(true);
		axios
			.delete(
				`https://6968be9069178471522b6774.mockapi.io/api/v1/menu/${id}`
			)
			.then((response) => {
				getListMenu();
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<>
			<h1>Mini Menu</h1>
			<NavLink to="/menu/create">Create</NavLink>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="container-card">
					{menu.map((item) => (
						<CardMenu
							key={item.id}
							name={item.name}
							price={item.price}
							category={item.category}
							detailUrl={`/menu/${item.id}`}
							updateUrl={`/menu/update/${item.id}`}
							onClickDelete={() => {
								deleteData(item.id);
							}}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default Menu;
