
import {
  useState,
  createContext,
} from 'react';
import { _pokemons } from '../assets/data/pokemons';
import { _abilities } from '../assets/data/abilities';
import { _moves } from '../assets/data/moves';

export const AppContext = createContext({
	pokemons: [],
	abilities: [],
	moves: [],
	setPokemons: () => {},
	setAbilities: () => {},
	setMoves: () => {},
});

export const ContextProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState(_pokemons.map((pokemon, i) => [...pokemon, i + 1]))
	const [abilities, setAbilities] = useState(_abilities)
	const [moves, setMoves] = useState(_moves)

  return (
    <AppContext.Provider value={{
      pokemons,
      setPokemons,
      abilities,
      setAbilities,
      moves,
      setMoves,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};