export interface IInitialData {
	name: string;
	price: string;
	category: string;
	description: string;
}

export type TTypeAction =
	| "change_name"
	| "change_price"
	| "change_category"
	| "change_description"
	| "change_all";

export interface IAction {
	type: TTypeAction;
	value: string;
	allValue?: IInitialData;
}

export interface IMenuData {
	id: string;
	name: string;
	price: string;
	category: string;
	description: string;
}
