import { useEffect } from 'react';
import { PokemonsList } from '../../components/PokemonsList/PokemonsList'

export const Pokedex = () => {
	useEffect(() => {
    document.title = 'Poke Archive | Pokedex';
  }, []);

	return (
		<div className="page">
			<PokemonsList />
		</div>
	)
}
