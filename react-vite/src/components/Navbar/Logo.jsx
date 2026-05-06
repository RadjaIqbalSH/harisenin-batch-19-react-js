const Logo = (props) => {
	const size = {
		small: "text-2xl",
		regular: "text-3xl",
		bold: "text-4xl",
	};

	return <p className={size[props.size]}>Logo Edit</p>;
};

export default Logo;
