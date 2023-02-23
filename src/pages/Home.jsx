import { useEffect, useLayoutEffect, useRef, useState } from "react";
import backgroundMap from "../assets/images/backgroundMap.png";
import './Home.css'

export const Home = () => {
	const [pageSize, setPageSize] = useState(0);
	const imageRef = useRef(null);

	useLayoutEffect(() => {
		document.title = "Poke Archive | Home";

		setTimeout(() => {
			const { height } = imageRef.current.getBoundingClientRect();
			setPageSize(height - 4 * 15);
		}, 300);

	}, [imageRef.current]);

	useEffect(() => {
		const resizeForImage = () => {
			const { height } = imageRef.current.getBoundingClientRect();
			setPageSize(height - 4 * 15);
		};

		window.addEventListener('resize', resizeForImage);
	
		return () => {
			window.removeEventListener('resize', resizeForImage);
		}
	}, [])

	return (
		<div style={{ minHeight: `${pageSize}px` }} className="page home">
			<img
				className="home__background"
				ref={imageRef}
				src={backgroundMap}
				alt="background, map of Konto area"
			/>
			<div
				style={{ height: `${pageSize}px` }}
				className="home__main"
			>
				<h1 className="home__title">Home</h1>
				<p>Sandbox for development environment..</p>
			</div>
		</div>
	);
};
