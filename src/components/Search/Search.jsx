import React, { useCallback, useEffect, useRef, useState } from 'react';
import SearchIcon from '../../assets/icons/search_icon.svg';
import crossSvg from '../../assets/icons/cross.svg';
import {debounce} from '../../utils/debounce'
import './Search.css';

export const Search = ({query, setQuery}) => {
	const [isOpen, setIsOpen] = useState(false);
	const searchRef = useRef(null);
	const queryRef = useRef(null);

	const handleChangeQuery = debounce((newInput) => {
		setQuery(newInput);
	}, 400);

	const handleClickOutside = useCallback((event) => {
    if (searchRef.current
      && !searchRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }, [searchRef.current]);

	useEffect(() => {
		if (!document || !searchRef.current) {
			return;
		}
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);
		return () => {
      document.removeEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
		}
	}, [searchRef.current]);

	return (
		<div ref={searchRef} className={`search${isOpen || query ? ' search--open' : ''}`}>
			{isOpen && (
				<input
					autoFocus
					className="search__input"
					ref={queryRef}
					defaultValue={query}
					onChange={(e) => handleChangeQuery(e.target.value)}
				/>
			)}
			<button
				type="button"
				onClick={() => setIsOpen(query.length || !isOpen)}
			>
				<img
					className="search__btn"
					src={isOpen ? crossSvg : SearchIcon}
					alt="search"
					onClick={(e) => {
						if (isOpen) {
							e.stopPropagation()
							setIsOpen(false)
						}
					}}
				/>
			</button>
		</div>
	)
}
