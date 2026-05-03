const elementApp = document.getElementById("app");
const root = ReactDOM.createRoot(elementApp);

function Header(props) {
	console.log("props => ", props);

	return (
		<div className="header" style={{ backgroundColor: props.kucing }}>
			{props.text}

			<button>Login</button>
		</div>
	);
}

root.render(
	<>
		<Header kucing={"red"} text="Header 1" />
		<Header kucing="green" text="Header 2 Example" />
		<Header kucing="purple" text="Header 3" />
		<Header kucing="orange" text="Header 4" />
	</>
);
