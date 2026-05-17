import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import type { IMenuData } from "../typings/menu";

/**
 *
 * endpoint https://6968be9069178471522b6774.mockapi.io/api/v1/menu/:id
 *
 */

const MenuDetail = () => {
	const [data, setData] = useState<IMenuData | null>(null);

	const params = useParams();

	function getDetailMenu(id: string) {
		axios
			.get(
				`https://6968be9069178471522b6774.mockapi.io/api/v1/menu/${id}`
			)
			.then((response) => {
				setData(response.data);
			});
	}

	useEffect(() => {
		getDetailMenu(params.id ?? "");
	}, []);

	return (
		<div>
			<h1>Menu Detail</h1>

			<NavLink
				to={"/menu"}
				style={{ marginBottom: "20px" }}
			>{`<- Back`}</NavLink>

			<p style={{ marginTop: "20px" }}>Name: {data?.name || "-"}</p>
			<p>price: {data?.price || "-"}</p>
			<p>Category: {data?.category || "-"}</p>
			<p>Description: {data?.description || "-"}</p>
		</div>
	);
};

export default MenuDetail;
