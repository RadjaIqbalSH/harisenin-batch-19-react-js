import React, { useReducer, useEffect, type SubmitEventHandler, type Reducer, useState, type ChangeEvent, type ChangeEventHandler, type InputHTMLAttributes } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import axios from "axios";


interface IInitialData  {
	name: string,
	price: string,
	category: string,
	description: string,
}

type TTypeAction = "change_name" | "change_price" | "change_category" | "change_description" | "change_all"

interface IAction {
	type: TTypeAction;
	value: string;
	allValue?: IInitialData;
}


const reducer = (state:IInitialData, action: IAction) => {
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
		case "change_all":
			return {
				...action.allValue as IInitialData,
			};
			break;

		default:
			return {
				...state,
			};
			break;
	}
};


const initData: IInitialData = {
	name: "",
	price: "",
	category: "",
	description: "",
};

const MenuUpdate = () => {
	const [data, setData] = useReducer(reducer, initData);

	const navigate = useNavigate();
	const params = useParams();


	function getDetailMenu(id: string) {
		axios
			.get(
				`https://6968be9069178471522b6774.mockapi.io/api/v1/menu/${id}`
			)
			.then((response) => {
				setData({
					type: "change_all",
					value: "",					
					allValue: response.data,
				});
			});
	}

	useEffect(() => {
		if (params.id) {
			getDetailMenu(params.id);
		}
	}, []);

	function updateData(payload: IInitialData) {
		axios
			.put(
				`https://6968be9069178471522b6774.mockapi.io/api/v1/menu/${params.id}`,
				payload
			)
			.then(() => {
				navigate("/menu");
			});
	}

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		updateData(data);
	};

	function handleChangeInput(event: ChangeEvent<HTMLInputElement, HTMLInputElement>
, type: TTypeAction) {
		setData({
			type: type,
			value: event.target.value,
		});
	}

	return (
		<div>
			<h1>Menu Update</h1>

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
					onChange={(event) =>handleChangeInput(event, "change_name")}
				/>
				<label htmlFor="" style={{ marginRight: "10px" }}>
					Price
				</label>
				<input
					name=""
					type="text"
					value={data.price}
					onChange={(event) =>handleChangeInput(event, 'change_price')}
				/>
				<label htmlFor="" style={{ marginRight: "10px" }}>
					Category
				</label>
				<input
					name=""
					type="text"
					value={data.category}
					onChange={(event) =>handleChangeInput(event, "change_category")}
				/>
				<label htmlFor="" style={{ marginRight: "10px" }}>
					Description
				</label>
				<input
					name=""
					type="text"
					value={data.description}
					onChange={(event) =>handleChangeInput(event, "change_description")}
				/>
				<button style={{ marginTop: "20px" }} type="submit">
					Update
				</button>
			</form>
		</div>
	);
};

export default MenuUpdate;
