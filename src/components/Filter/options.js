export const types = {
	normal: false,
	fighting: false,
	fire: false,
	ice: false,
	electric: false,
	flying: false,
	grass: false,
	ground: false,
	poison: false,
	bug: false,
	dark: false,
	water: false,
	psychic: false,
	dragon: false,
	rock: false,
	ghost: false,
	fairy: false,
	steel: false,
	shadow: false,
};

export const damageClasses = { Physical: false, Special: false, Status: false };

export const targetTypes = {
	"Selected-pokemon": false,
	"All-opponents": false,
	User: false,
	"Random-opponent": false,
	"Users-field": false,
	"All-other-pokemon": false,
	"Specific-move": false,
	"Entire-field": false,
	"Opponents-field": false,
	"All-pokemon": false,
	"User-and-allies": false,
	Ally: false,
	"User-or-ally": false,
	"Selected-pokemon-me-first": false,
	"All-allies": false,
	"Fainting-pokemon": false,
};

export const moveFilter = {
	Type: types,
	"Damage Class": damageClasses,
	Target: targetTypes,
};

export const pokemonFilter = {
	Type: types,
};
