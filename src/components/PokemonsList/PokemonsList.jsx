import { useContext, useEffect, useRef, useState } from "react";
import { _pokemons } from "../../assets/data/pokemons";
import { Pokemon, Type } from "../../assets/data/Skeleton";
import resetSvg from '../../assets/icons/reset.svg';
import arrowSvg from '../../assets/icons/basic_arrow_right.svg';
import { typesvgs } from "../../assets/poke-types/imports";
import { debounce } from "../../utils/debounce";
import { AppContext } from "../AppContext";
import { Button } from "../Button/Button";
import { Filter } from "../Filter/Filter";
import { pokemonFilter } from "../Filter/options";
import { Pagination } from "../Pagination/Pagination";
import { Search } from "../Search/Search";
import { pokemonOptions } from "../Sorter/options";
import { Sorter } from "../Sorter/Sorter";
import { sorter } from "../Sorter/sorterFunctions";
import { PokedexItem } from "./PokedexItem";
import "./PokemonList.css";

export const PokemonsList = () => {
	const { pokemons } = useContext(AppContext);

	const [visibleItems, setVisibleItems] = useState([]);
	const [pageCount, setPageCount] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(20);
	const [pageNumber, setPageNumber] = useState(1);
	const [itemsInPage, setItemsInPage] = useState([]);
	const iIPinputRef = useRef(null);

	const [query, setQuery] = useState("");
	const [filterType, setFilterType] = useState(pokemonFilter);
	const [sortBy, setSortBy] = useState([]);
	const [reverseList, setReverseList] = useState({});

	const setItemCount = debounce((e) => {
		setItemsPerPage(parseInt(e.target.value));
	}, 400);

	const handleReset = () => {
		setQuery('');
		setFilterType(pokemonFilter);
		setSortBy([]);
		setReverseList([]);
	}

	useEffect(() => {
		const lcQuery = query.toLowerCase();
		let filteredItems = sorter([...pokemons], sortBy, reverseList).filter((item) =>
			item[Pokemon.Name].toLowerCase().includes(lcQuery)
		);
		if (Object.values(filterType["Type"]).some((val) => val)) {
			filteredItems = filteredItems.filter(
				(item) => filterType["Type"][item[Pokemon.Types][0][Type.Name]]
			);
		}

		setVisibleItems(filteredItems);
		setPageNumber(1);
	}, [filterType, sortBy, query, reverseList]);

	const setSort = (field) => {
		if (!sortBy.length || !sortBy[0].length || sortBy[0][0] !== field) {
			setSortBy(prev => [[field], ...prev.filter(item => item[0] !== field)]);
			return;
		}

		if (!reverseList[field]) {
			setReverseList(prev => ({
				...prev,
				[field]: true,
			}));

			return;
		}

		setSortBy(prev => prev.filter(item => item[0] !== field));
		setReverseList(prev => ({
			...prev,
			[field]: false,
		}));
	}

	useEffect(() => {
		if (iIPinputRef.current) {
			iIPinputRef.current.value = itemsPerPage;
		}
		setPageCount(Math.ceil(visibleItems.length / itemsPerPage));
		setItemsInPage(
			visibleItems.slice(
				(pageNumber - 1) * itemsPerPage,
				pageNumber * itemsPerPage
			)
		);
	}, [pageNumber, itemsPerPage, visibleItems]);

	return (
		<div className="pokedex">
			<h1 className="pokedex__title">Pokedex</h1>
			<div className="pokemon__panel">
				<Search query={query} setQuery={setQuery} />
				<Sorter
					sortBy={sortBy}
					setSortBy={setSortBy}
					sortOptions={pokemonOptions}
					reverseList={reverseList}
					setReverseList={setReverseList}
				/>
				<Filter
					filterType={filterType}
					setFilterType={setFilterType}
					optionImages={{ Type: typesvgs }}
				/>
				<Button
					imageUrl={resetSvg}
					handleClick={handleReset}
					tooltipText={'Reset'}
				/>
				<div className="tooltip">
					<input
						aria-label="items per page"
						ref={iIPinputRef}
						className="pokedex__item-count-input"
						onChange={setItemCount}
						type="number"
					/>
					<p className="tooltiptext">
						Items per page
					</p>
				</div>
			</div>
			<div style={{ margin: "1rem 0" }}>
				<Pagination
					pageCount={pageCount}
					pageNumber={pageNumber}
					setPageNumber={setPageNumber}
				/>
			</div>
			<div className="pokedex__list">
				<div className="pokedex__header">
					<p>
						#
					</p>
					<p
						className={`table-head${reverseList[Pokemon['Name']] ? ' table-head--reversed' : ''}`}
						style={{padding: '0 0.2rem'}}
						onClick={() => setSort(Pokemon['Name'])}
					>
						Name
						{!!sortBy.length && !!sortBy[0].length && sortBy[0][0] === Pokemon['Name'] && (
							<img className="sort__direction" src={arrowSvg} alt="sort direction upwards" />
						)}
					</p>
					<p onClick={() => setSort(Pokemon['Base Experience'])} className={`table-head${reverseList[Pokemon['Base Experience']] ? ' table-head--reversed' : ''}`}>
						Exp.
						{!!sortBy.length && !!sortBy[0].length && sortBy[0][0] === Pokemon['Base Experience'] && (
							<img className="sort__direction" src={arrowSvg} alt="sort direction upwards" />
						)}
					</p>
					<p onClick={() => setSort(Pokemon['Height'])} className={`table-head${reverseList[Pokemon['Height']] ? ' table-head--reversed' : ''}`}>
						Height
						{!!sortBy.length && !!sortBy[0].length && sortBy[0][0] === Pokemon['Height'] && (
							<img className="sort__direction" src={arrowSvg} alt="sort direction upwards" />
						)}
					</p>
					<p onClick={() => setSort(Pokemon['Weight'])} className={`table-head${reverseList[Pokemon['Weight']] ? ' table-head--reversed' : ''}`}>
						Weight
						{!!sortBy.length && !!sortBy[0].length && sortBy[0][0] === Pokemon['Weight'] && (
							<img className="sort__direction" src={arrowSvg} alt="sort direction upwards" />
						)}
					</p>
					<p onClick={() => setSort(Pokemon['Types'])} className={`table-head${reverseList[Pokemon['Types']] ? ' table-head--reversed' : ''}`}>
						Types
						{!!sortBy.length && !!sortBy[0].length && sortBy[0][0] === Pokemon['Types'] && (
							<img className="sort__direction" src={arrowSvg} alt="sort direction upwards" />
						)}
					</p>
					<p>
						Stats
					</p>
				</div>
				{itemsInPage.map((pokemon) => (
					<PokedexItem key={pokemon[Pokemon.id]} pokemon={pokemon} />
				))}
			</div>
		</div>
	);
};
