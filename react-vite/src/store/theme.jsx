import { create } from "zustand";

export const useTheme = create((set) => ({
	theme: "dark",
	changeTheme: () =>
		set((state) => {
			if (state.theme === "dark") {
				return {
					theme: "light",
				};
			} else {
				return {
					theme: "dark",
				};
			}
		}),
	fetchData: async () => {
		const result = await fetch("https://google.com");
	},
}));
