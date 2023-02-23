import './Home.css'

export const Home = () => {

	const size = `calc(100svh - 80px - 10rem)`;

	return (
		<div style={{ minHeight: size }} className="page home">
			<div
				style={{ height: size }}
				className="home__main"
			>
				<h1 className="home__title">Home</h1>
				<p>Sandbox for development environment..</p>
			</div>
		</div>
	);
};
