import {
	memo,
	useMemo,
	useState,
	useEffect,
	useContext,
	useCallback,
} from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { MovesList } from "../../components/MovesList/MovesList";
import { AbilitiesList } from "../../components/AbilitiesList";
import { checkIfImageExists } from "../../utils/isImageOnUrl";
import arrowrightup from '../../assets/icons/arrow-right-up.svg';
import arrowleftdown from '../../assets/icons/arrow-left-down.svg';
import arrowright from '../../assets/icons/arrow-right.svg';
import { typesvgs } from '../../assets/poke-types/imports';
import arrowleft from '../../assets/icons/arrow-left.svg';
import { AppContext } from "../../components/AppContext";
import { typeToColor } from "../../assets/typeToColor";
import './Pokemon.css'
import { StatsTable } from "../../components/StatsTable";
import { Pokemon, Type } from "../../assets/data/Skeleton";

export const PokemonPage = memo(() => {
	const { pokemons, abilities, moves } = useContext(AppContext);
	const idx = parseInt(useParams().id);
	const pokemon = useMemo(() => pokemons[idx - 1], [idx]);
	const [loading, setLoading] = useState(true);

	if (!pokemon) {
		return <Navigate to="/" />
	}

	const color = useMemo(() => typeToColor[pokemon[Pokemon.Types].find(item => item[Type.Slot] === 1)[0]], [pokemon]);
	const [image, setImage] = useState('');
	const [drop, setDrop] = useState(0);

	const assignImage = useCallback(
		async () => {
			let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon[Pokemon.id]}.svg`
			if (await checkIfImageExists(url)) {
				return url;
			}
	
			url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon[Pokemon.id]}.png`
			if (await checkIfImageExists(url)) {
				return url;
			}
	
			url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon[Pokemon.id]}.png`
			if (await checkIfImageExists(url)) {
				return url;
			}

			url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon[Pokemon.id]}.png`
			if (await checkIfImageExists(url)) {
				return url;
			}
		},
		[pokemon],
	);

	useEffect(() => {
		assignImage()
			.then(result => setImage(result))
			.finally(() => setTimeout(() => setLoading(false), 600))

		document.title = `Poke Archive | ${pokemon[Pokemon.Name]}`;
	}, [idx]);

	const pushDrop = useCallback(
		(delay = 300) => {
			setDrop(prev => prev + 1);
			setTimeout(() => {
				setDrop(prev => prev - 1);
			}, delay)
		},
		[setDrop],
	)

	return (
		<div className="PokemonPage page">
			<div className={`PokemonPage__header${drop ? ' PokemonPage__header--loading' : ''}`}>
				<div
					className="PokemonPage__title"
					style={{ borderBottom: `4px solid ${color + 'aa'}` }}
				>
					<h1 style={{padding: drop ? '' : '0 1rem'}} className="pokename">
						{!drop && pokemon[Pokemon.Name]}
					</h1>
				</div>
			</div>
			<div className="PokemonPage__nav">
				<Link
					className="PokemonPage__btn"
					style={{
						pointerEvents: idx !== 1 ? 'auto' : 'none',
					}}
					to={`/pokemon/${idx - 1}`}
					onClick={() => pushDrop()}
				>
					<img width="48" height="48" src={arrowleft} alt="previous page" />
				</Link>

				<h1 className="pokeid">
					<span style={{fontSize: '1.6rem'}}>
						#
					</span>
					{idx}
					</h1>

				<Link
					className="PokemonPage__btn btn--right"
					style={{
						pointerEvents: idx !== 1264 ? 'auto' : 'none'
					}}
					to={`/pokemon/${idx + 1}`}
					onClick={() => pushDrop()}
				>
					<img width="48" height="48" src={arrowright} alt="next page" />
				</Link>
			</div>
			<div className="showcase-area">
				<div className="showcase-area__description">
					<div className="poke-data-table">
						<h3>Physical</h3>
						<div className="row">
							<div className="head col" style={{backgroundColor: color}}>Types</div>
							<div className="col">
								{pokemon[Pokemon.Types].map(item => (
									<img key={item[1]} className="type-img" src={typesvgs[item[Type.Name]]} />
								))}
							</div>
						</div>
						<div className="row">
							<div className="head col" style={{backgroundColor: color}}>Height</div>
							<div className="col">
								{pokemon[Pokemon.Height]}
							</div>
						</div>
						<div className="row">
							<div className="head col" style={{backgroundColor: color}}>Weight</div>
							<div className="col">
								{pokemon[Pokemon.Weight]}
							</div>
						</div>
						<div className="row">
							<div className="head col" style={{backgroundColor: color}}>Base Exp</div>
							<div className="col">
								{pokemon[Pokemon["Base Experience"]]}
							</div>
						</div>
						<div className="row">
							<div className="head col" style={{backgroundColor: color}}>Baby</div>
							<div className="col">
								{pokemon[Pokemon["Is Baby"]] === 1 ? 'Yes' : pokemon[Pokemon["Is Baby"]] === -1 ? '?' : 'No'}
							</div>
						</div>
						<div className="row">
							<div className="head col" style={{backgroundColor: color}}>Legendary</div>
							<div className="col">
								{pokemon[Pokemon["Is Legendary"]] === 1 ? 'Yes' : pokemon[Pokemon["Is Legendary"]] ? '?' : 'No'}
							</div>
						</div>
						<div className="row">
							<div className="head col" style={{backgroundColor: color}}>Mythical</div>
							<div className="col">
								{pokemon[Pokemon["Is Mythical"]] === 1 ? 'Yes' : pokemon[Pokemon["Is Mythical"]] ? '?' : 'No'}
							</div>
						</div>
					</div>
					<StatsTable pokemon={pokemon}/>
				</div>
				<div className="showcase-area__visuals">
					<div className="poke-image-container">
						<img
							className="poke-image"
							style={{width: `${120 + (pokemon[Pokemon.Height] / 15 * 200)}px`}}
							src={image}
							alt="pokemon"
						/>
					</div>
					<Link
						className="gallery-link"
						to={`/gallery/${idx}`}
					>
						<p style={{textAlign: 'center'}}>
							View Gallery
						</p>
					</Link>
				</div>
			</div>

			{!loading && (
				<>
					<h2 className="abilities__title">Abilities</h2>
					<AbilitiesList key={`abilitiesO${idx}`} abilities={pokemon[Pokemon.Abilities].map(index => abilities[index])} />
					<h2 style={{padding: '1rem 2rem'}} className="moves__title">Moves</h2>
					<MovesList key={`movesO${idx}`} moves={pokemon[Pokemon.Moves].map(index => moves[index])} />
				</>
			)}

			{drop !== 0 && Array(drop).fill(true).map((_, i) => {
				return <div key={`drop${i}`} className="drop"></div>
			})}
		</div>
	)
});


/** Todo: Evolution tree
	<div className="PokemonPage__evolution-tree">
		Previous
		<div className="tooltip">
			<div className="tooltiptext">Devolution</div>
			<img style={{width: '20px', height: '20px'}} src={arrowleftdown} alt="previous evolution" />
		</div>
		Current
			<div className="tooltip">
			<div className="tooltiptext">Evolution</div>
			<img style={{width: '20px', height: '20px'}} src={arrowrightup} alt="previous evolution" />
		</div>
		Next
	</div>
 */