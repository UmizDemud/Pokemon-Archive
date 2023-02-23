import { Meta, Move, Pokemon, Stats } from "../../assets/data/Skeleton";

export const moveOptions = {
	Name: [Move.Name],
	Power: [Move.Power],
	Accuracy: [Move.Accuracy],
	Type: [Move.Type],
	Target: [Move.Target],
	Ailment: [Move.Meta, Meta.Ailment],
	Category: [Move.Meta, Meta.Category],
	'Crit Rate': [Move.Meta, Meta['Crit Rate']],
	Drain: [Move.Meta, Meta.Drain],
	'Flinch Chance': [Move.Meta, Meta['Flinch Chance']],
	Healing: [Move.Meta, Meta.Healing],
	'Max Hits': [Move.Meta, Meta['Max Hits']],
	'Min Hits': [Move.Meta, Meta['Min Hits']],
	'Max Turns': [Move.Meta, Meta['Max Turns']],
	'Min Turns': [Move.Meta, Meta['Min Turns']],
	'Stat Chance': [Move.Meta, Meta['Stat Chance']],
	"Damage Class": [Move["Damage Class"]],
};

export const pokemonOptions = {
	Name: [Pokemon.Name],
	Height: [Pokemon.Height],
	Weight: [Pokemon.Weight],
	HP: [Pokemon.Stats, Stats.HP],
	ATK: [Pokemon.Stats, Stats.ATK],
	DEF: [Pokemon.Stats, Stats.DEF],
	"SP-ATK": [Pokemon.Stats, Stats["SP-ATK"]],
	"SP-DEF": [Pokemon.Stats, Stats["SP-DEF"]],
	SPD: [Pokemon.Stats, Stats.SPD],
	Type: [Pokemon.Types],
	"Base Experience": [Pokemon["Base Experience"]],
};
