import { Outlet } from "react-router";

function Navbar() {
	function handlingLogin() {
		alert("Selamat anda telah login");
	}

	return (
		<>
			<div className="header">
				<span>Header</span>
				<button onClick={handlingLogin}>Login</button>
			</div>
			<Outlet />
		</>
	);
}

export default Navbar;
