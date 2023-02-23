import { useContext, useEffect } from 'react'
import { MovesList } from '../../components/MovesList'
import { _moves } from '../../assets/data/moves'
import { AppContext } from '../../components/AppContext'

export const MovesPage = () => {
	const {moves} = useContext(AppContext);

	useEffect(() => {
    document.title = 'Poke Archive | Moves';
  }, []);

	return (
		<div
			style={{padding: '2rem'}}
			className="moves page"
		>
			<h1 style={{borderBottom: '1px solid #000', padding: '0 2rem',margin: '2rem 0', textAlign: 'center'}}>Moves</h1>
			<MovesList moves={moves}/>
		</div>
	)
}
