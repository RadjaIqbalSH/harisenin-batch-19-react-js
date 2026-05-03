function Navbar() {
	function handlingLogin() {
		alert("Selamat anda telah login");
	}

	return (
		<div className="header">
			<span>Header</span>
			<button onClick={handlingLogin}>Login</button>
		</div>
	);
}

export default Navbar;
