import React, { useReducer } from "react";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";

const reducer = (state, action) => {
	switch (action.type) {
		case "change_name":
			return {
				...state,
				name: action.value,
			};
			break;

		case "change_price":
			return {
				...state,
				price: action.value,
			};
			break;

		case "change_category":
			return {
				...state,
				category: action.value,
			};
			break;

		case "change_description":
			return {
				...state,
				description: action.value,
			};
			break;

		default:
			return {
				...state,
			};
			break;
	}
};

const initData = {
	name: "",
	price: "",
	category: "",
	description: "",
};

const MenuCreate = () => {
	const [data, setData] = useReducer(reducer, initData);

	const navigate = useNavigate();

	function sendData(payload) {
		axios
			.post(
				"https://6968be9069178471522b6774.mockapi.io/api/v1/menu",
				payload
			)
			.then((response) => {
				navigate("/menu");
			});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		sendData(data);
	};

	return (
		<div>
			<h1>Menu Create</h1>

			<NavLink to={"/menu"}>{"<- Back"}</NavLink>

			<form
				onSubmit={handleSubmit}
				style={{
					width: "250px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					margin: "20px auto 0px auto",
				}}
			>
				<label htmlFor="" style={{ marginRight: "10px" }}>
					Name
				</label>
				<input
					name=""
					type="text"
					value={data.name}
					onChange={(event) => {
						setData({
							type: "change_name",
							value: event.target.value,
						});
					}}
				/>
				<label htmlFor="" style={{ marginRight: "10px" }}>
					Price
				</label>
				<input
					name=""
					type="text"
					value={data.price}
					onChange={(event) => {
						setData({
							type: "change_price",
							value: event.target.value,
						});
					}}
				/>
				<label htmlFor="" style={{ marginRight: "10px" }}>
					Category
				</label>
				<input
					name=""
					type="text"
					value={data.category}
					onChange={(event) => {
						setData({
							type: "change_category",
							value: event.target.value,
						});
					}}
				/>
				<label htmlFor="" style={{ marginRight: "10px" }}>
					Description
				</label>
				<input
					name=""
					type="text"
					value={data.description}
					onChange={(event) => {
						setData({
							type: "change_description",
							value: event.target.value,
						});
					}}
				/>
				<button style={{ marginTop: "20px" }} type="submit">
					Create
				</button>
			</form>
		</div>
	);
};

export default MenuCreate;
