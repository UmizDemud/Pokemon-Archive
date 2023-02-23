import { memo, useEffect, useState } from "react";
import { typesvgs } from "../../assets/poke-types/imports";
import resetSvg from '../../assets/icons/reset.svg';
import { moveFilter } from "../Filter/options";
import { sorter } from "../Sorter/sorterFunctions";
import { moveOptions } from "../Sorter/options";
import { Sorter } from "../Sorter/Sorter";
import { Filter } from "../Filter/Filter";
import { MoveItem } from "./MoveItem";
import "./Move.css";
import { Search } from "../Search/Search";
import { Move } from "../../assets/data/Skeleton";
import { Pagination } from "../Pagination/Pagination";
import { Button } from "../Button/Button";

export const MovesList = memo(({ moves }) => {
	const [query, setQuery] = useState("");
	const [filterType, setFilterType] = useState(moveFilter);
	const [sortBy, setSortBy] = useState([]);
	const [visibleMoves, setVisibleMoves] = useState([]);
	const [reverseList, setReverseList] = useState({});
	const [pageNumber, setPageNumber] = useState(1)
	const [itemsInPage, setItemsInPage] = useState([])

	const itemsPerPage = 20;

	const handleReset = () => {
		setQuery('');
		setFilterType(moveFilter);
		setSortBy([]);
		setReverseList([]);
	}

	useEffect(() => {
		const lcQuery = query.toLowerCase();
		setVisibleMoves(() => {
			let filteredMoves = moves.filter((item) =>
				item[Move.Name].toLowerCase().includes(lcQuery)
			);
			if (Object.values(filterType.Type).some((val) => val)) {
				filteredMoves = filteredMoves.filter(
					(item) => filterType["Type"][item[Move.Type]]
				);
			}
			if (Object.values(filterType["Damage Class"]).some((val) => val)) {
				filteredMoves = filteredMoves.filter(
					(item) => filterType["Damage Class"][item[Move["Damage Class"]]]
				);
			}
			if (Object.values(filterType.Target).some((val) => val)) {
				filteredMoves = filteredMoves.filter(
					(item) => filterType["Target"][item[Move.Target]]
				);
			}

			return sorter(filteredMoves, sortBy, reverseList);
		});
	}, [filterType, sortBy, query, reverseList]);

	useEffect(() => {
		setItemsInPage(
			visibleMoves.slice(
				(pageNumber - 1) * itemsPerPage,
				pageNumber * itemsPerPage
			)
		);
	}, [pageNumber, visibleMoves]);

	return (
		<div className="moves">
			<Pagination pageCount={Math.ceil(moves.length / 20)} pageNumber={pageNumber} setPageNumber={setPageNumber} />
			<div className="moves__panel">
				<Search query={query} setQuery={setQuery} />
				<Sorter
					sortBy={sortBy}
					setSortBy={setSortBy}
					sortOptions={moveOptions}
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
			</div>
			<ul className="moves__list">
				{itemsInPage.map((move) => (
					<MoveItem key={move[Move.id]} move={move} />
				))}
			</ul>
		</div>
	);
});
