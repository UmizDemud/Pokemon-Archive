import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Pokemon } from '../assets/data/Skeleton';
import arrowright from '../assets/icons/arrow-right.svg';
import arrowleft from '../assets/icons/arrow-left.svg';
import { BaseUrl, Sprites } from '../assets/data/Sprites';
import { AppContext } from '../components/AppContext';
import { capitalize } from '../utils/capitalize';
import './Gallery.css'

export const Gallery = () => {
	const { pokemons } = useContext(AppContext);
	const pokemon = pokemons.find(item => item[Pokemon.Index] === parseInt(useParams().id) - 1);
	const idx = pokemon[Pokemon.id];
	const name = pokemon[Pokemon.Name];
	const [readyImages, setReadyImages] = useState(null);



	const createSpritesTree = (baseUrl = BaseUrl, object, lv = 1) => {
		if (object == null) {
			return null;
		}
		const images = (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
				{Object.keys(object).filter(key => typeof object[key] === 'string').map(key => {
					if (object[key] == null) {
						return null;
					}

					return (
						<img
							key={baseUrl + '/' + key + '/' + idx}
							style={{objectFit: 'contain', maxWidth: '340px'}}
							src={baseUrl + '/' + key + '/' + idx + object[key]}
							onLoad={e => {
								e.target.className = 'gallery-image--load';
							}}
							onError={e => {
								e.target.onError = null;
								e.target.style.display = 'none';
								e.target.style.position = 'absolute';
								e.target.className = 'gallery-image--error';
							}}
							alt="pokemon"
						/>
						)
				})}
			</div>
		)

			const rest = Object.keys(object).filter(key => typeof object[key] !== 'string').map(key => {
				return (
					<div key={baseUrl + '/' + key + '/'}>
						{lv === 1
							? <h2 style={{margin: `${lv < 2 ? '4rem' : '1rem'} 0 1rem`}}>{key.split('-').map(item => capitalize(item)).join(' ')}</h2>
							: lv === 2 
								? <h3 style={{margin: `${lv < 2 ? '4rem' : '1rem'} 0 1rem`}}>{key.split('-').map(item => capitalize(item)).join(' ')}</h3>
								: lv === 3
									? <h4 style={{margin: `${lv < 2 ? '4rem' : '1rem'} 0 1rem`}}>{key.split('-').map(item => capitalize(item)).join(' ')}</h4>
									: <h5 style={{margin: `${lv < 2 ? '4rem' : '1rem'} 0 1rem`}}>{key.split('-').map(item => capitalize(item)).join(' ')}</h5>
						}
						<div style={{display: lv > 3 ? 'flex' : 'block', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem'}}>
							{createSpritesTree(baseUrl + '/' + key, object[key], lv + 1)}
						</div>
					</div>
				)
			})

			return (
				<>
					{images}
					{rest}
				</>
			)
		}

		useEffect(() => {
			setReadyImages(createSpritesTree(BaseUrl, Sprites))
		}, [idx])
		
		return (
			<div style={{textAlign: 'center'}} className="gallery page">
				<div className="PokemonPage__nav">
					<Link
						className="PokemonPage__btn"
						style={{
							pointerEvents: idx !== 1 ? 'auto' : 'none',
						}}
						to={`/gallery/${idx - 1}`}
					>
						<img width="48" height="48" src={arrowleft} alt="previous page" />
					</Link>

					<div>
						<h1>Gallery</h1>
						<h2>{name}</h2>
					</div>

					<Link
						className="PokemonPage__btn btn--right"
						style={{
							pointerEvents: idx !== 1264 ? 'auto' : 'none'
						}}
						to={`/gallery/${idx + 1}`}
					>
						<img width="48" height="48" src={arrowright} alt="next page" />
					</Link>
				</div>
				<div className="gallery__images">
					{readyImages}
				</div>
		</div>
	)
}
