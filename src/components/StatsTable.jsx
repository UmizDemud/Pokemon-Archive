import { Pokemon, Stats } from "../assets/data/Skeleton";
import { statistics } from "../assets/data/statistics";
import { Scale } from "./Scale";

export const StatsTable = ({ pokemon, transpose = false }) => {
	const sum =
		pokemon[Pokemon.Stats][Stats.HP] +
		pokemon[Pokemon.Stats][Stats.ATK] +
		pokemon[Pokemon.Stats][Stats.DEF] +
		pokemon[Pokemon.Stats][Stats["SP-ATK"]] +
		pokemon[Pokemon.Stats][Stats["SP-DEF"]] +
		pokemon[Pokemon.Stats][Stats.SPD];

	return (
		<div
			className={`stats-table poke-data-table${
				transpose ? " poke-data-table--transposed" : ""
			}`}
		>
			{!transpose && <h3>Stats</h3>}
			<Scale
				color={"#f009"}
				max={statistics.HP.max}
				name={"HP"}
				value={pokemon[Pokemon.Stats][Stats.HP]}
				transpose={transpose}
			/>
			<Scale
				color={"#fa09"}
				max={statistics.ATK.max}
				name={"ATK"}
				value={pokemon[Pokemon.Stats][Stats.ATK]}
				transpose={transpose}
			/>
			<Scale
				color={"#ff09"}
				max={statistics.DEF.max}
				name={"DEF"}
				value={pokemon[Pokemon.Stats][Stats.DEF]}
				transpose={transpose}
			/>
			<Scale
				color={"#0f09"}
				max={statistics["SP-ATK"].max}
				name={"SP-ATK"}
				value={pokemon[Pokemon.Stats][Stats["SP-ATK"]]}
				transpose={transpose}
			/>
			<Scale
				color={"#00f9"}
				max={statistics["SP-DEF"].max}
				name={"SP-DEF"}
				value={pokemon[Pokemon.Stats][Stats["SP-DEF"]]}
				transpose={transpose}
			/>
			<Scale
				color={"#c0f9"}
				max={statistics.SPD.max}
				name={"SPD"}
				value={pokemon[Pokemon.Stats][Stats.SPD]}
				transpose={transpose}
			/>
			<Scale
				color={"#f359"}
				fontColor={"#fff"}
				max={statistics.total.max}
				name={"Sum"}
				value={sum}
				transpose={transpose}
			/>
		</div>
	);
};
