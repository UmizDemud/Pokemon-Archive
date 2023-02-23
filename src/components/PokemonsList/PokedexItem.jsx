import { useState } from "react";
import { Link } from "react-router-dom";
import { Pokemon, Type } from "../../assets/data/Skeleton";
import { typesvgs } from "../../assets/poke-types/imports";
import lookSvg from "../../assets/icons/look.svg"
import { StatsTable } from "../StatsTable";

export const PokedexItem = ({ pokemon }) => {
	const id = pokemon[Pokemon.Index] + 1;
	const [isStatsOpen, setIsStatsOpen] = useState(false);

	return (
		<>
			<div className="pokedex__item">
				<p>{id}</p>
				<Link
					className="fit-text"
					style={{padding: '0 0.2rem'}}
					to={`/pokemon/${id}`}
				>
					{pokemon[Pokemon.Name]}
				</Link>
				{pokemon[Pokemon["Base Experience"]] != null ? (
					<p>{pokemon[Pokemon["Base Experience"]]}</p>
				) : (
					<p>?</p>
				)}
				{pokemon[Pokemon.Height] != null ? (
					<p>{pokemon[Pokemon.Height]}</p>
				) : (
					<p>?</p>
				)}
				{pokemon[Pokemon.Weight] != null ? (
					<p>{pokemon[Pokemon.Weight]}</p>
				) : (
					<p>?</p>
				)}
				<p style={{ gap: "5px" }}>
					{pokemon[Pokemon.Types].map((type) => (
						<img
							key={type}
							className="pokedex__item--type-img"
							style={{ marginTop: '2px' }}
							src={typesvgs[type[Type.Name]]}
							alt={type[Type.Name]}
						/>
					))}
				</p>
				<button
					className="item__button"
					type="button"
					onClick={() => setIsStatsOpen(!isStatsOpen)}
				>
					<p style={{lineHeight: '1.2'}}>
						<img
							style={{ width: "20px", height: "20px", marginTop: '4px' }}
							src={lookSvg}
							alt="extend stats"
						/>
					</p>
				</button>
			</div>
			{isStatsOpen && <StatsTable pokemon={pokemon} transpose={true} />}
		</>
	);
};
