export const Scale = ({
	name,
	value,
	max,
	color,
	fontColor = "#000",
	transpose,
}) => {
	return (
		<div
			className="row"
			style={{
				position: "relative",
				border: "1px solid #000",
			}}
		>
			<span className="scale--left">{`${name}: `}</span>
			<span className="scale--right">{value}</span>
			<div
				className="scale__bar"
				style={{
					position: "absolute",
					height: `${!transpose ? 100 : (value / max) * 100}%`,
					width: `${!transpose ? (value / max) * 100 : 100}%`,
					backgroundColor: color,
				}}
			></div>
		</div>
	);
};
