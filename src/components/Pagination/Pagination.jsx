import { useMemo } from 'react'
import './Pagination.css'
import ArrowLeft from '../../assets/icons/arrow-square-left.svg';
import ArrowRight from '../../assets/icons/arrow-square-right.svg';

export const Pagination = ({ pageCount, pageNumber, setPageNumber }) => {
	const pages = useMemo(() => {
		const result = [];
		const start = pageNumber - 2 >= 1 ? pageNumber - 2 : 1;
		const end = start + 3 <= pageCount ? start + 3 : pageCount;

		for (let i = start; i <= end; i++) {
			result.push(i);
		}
		return result;
	}, [pageCount, pageNumber]);

	const lastPage = pages[pages.length - 1];

	return (
		<div className="pagination">
			<button
				onClick={() => setPageNumber(pageNumber - 1)}
				disabled={pageNumber === 1}
			>
				<img
					className="pagination__arrow"
					src={ArrowLeft}
					alt="previous page"
				/>
			</button>
			{1 !== pages[0] && (
				<>
					<p
						className="pagination__item"
						onClick={() => setPageNumber(1)}
					>
						{1}
					</p>
					{2 !== pages[0] && pages[1] && (
						<p className="pagination__dots">...</p>
					)}
				</>
			)}
			
			{pages.map((numb) => {
				return (
					<p
						key={`pagin${numb}`}
						className={`pagination__item${numb === pageNumber ? ' pagination__item--selected' : ''}`}
						onClick={() => setPageNumber(numb)}
					>
						{numb}
					</p>
				)
			})}
			{pageCount !== lastPage && pages[1] && (
				<>
					{pageCount - 1 !== lastPage && (
						<p className="pagination__dots">...</p>
					)}
					<p
						className="pagination__item"
						onClick={() => setPageNumber(pageCount)}
					>
						{pageCount}
					</p>
				</>
			)}
			<button
				onClick={() => setPageNumber(pageNumber + 1)}
				disabled={pageNumber === pageCount}
			>
				<img
					className="pagination__arrow"
					src={ArrowRight}
					alt="previous page"
				/>
			</button>
		</div>
	)
}
