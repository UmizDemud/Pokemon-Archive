import { useCallback, useEffect, useRef, useState } from "react";
import filtericon from "../../assets/icons/filter_icon.svg";
import crossIcon from "../../assets/icons/cross.svg";
import "./Filter.css";

export const Filter = ({
	filterType,
	setFilterType,
	optionImages,
	...props // all usual props like `className`, `style` and `id`
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const filterRef = useRef(null);
	const handleClickOutside = useCallback(
		(event) => {
			if (filterRef.current && !filterRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		},
		[filterRef.current]
	);

	const categories = Object.keys(filterType);

	useEffect(() => {
		if (!document || !filterRef.current) {
			return;
		}
		document.addEventListener("click", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
			document.addEventListener("touchstart", handleClickOutside);
		};
	}, [filterRef.current]);

	return (
		<div
			type="button"
			onClick={() => {
				setIsOpen(true);
			}}
			className={`fltr${
				categories.some((cat) =>
					Object.keys(filterType[cat]).some((opt) => filterType[cat][opt])
				)
					? " fltr--open"
					: ""
			}`}
			ref={filterRef}
		>
			<div className="fltr__tltp-txt">Filter</div>
			<img className="fltr__toggle" src={filtericon} alt="toggle filters" />

			{isOpen && (
				<div
					{...props}
					className={`fltr__modal${isOpen ? " fltr__modal--open" : ""}`}
				>
					<img
						className="fltr__close"
						src={crossIcon}
						alt="close"
						onClick={(e) => {
							e.stopPropagation();
							setIsOpen(false);
						}}
					/>
					{categories.map((ft) => (
						<div
							key={`fltr_${ft}`}
							aria-label="list of filters"
							className={`fltr__list${
								optionImages && optionImages[ft] ? " fltr__list--img" : ""
							}`}
						>
							<div className="fltr__header">
								<h4 className="fltr__title">{ft}</h4>
							</div>
							{Object.keys(filterType[ft]).map((optn) => {
								const selected = filterType[ft][optn];
								return (
									<button
										key={optn}
										type="button"
										className="fltr__btn"
										onClick={() => {
											setFilterType((prev) => ({
												...prev,
												[ft]: {
													...prev[ft],
													[optn]: !selected,
												},
											}));
										}}
									>
										{optionImages &&
										optionImages[ft] &&
										optionImages[ft][optn] ? (
											<img
												alt={optn}
												className={`fltr__item${
													selected ? " fltr__item--slctd" : ""
												}`}
												width="30"
												height="30"
												src={optionImages[ft][optn]}
											/>
										) : (
											<p
												className={`fltr__item fltr__item--txt${
													selected ? " fltr__item--slctd" : ""
												}`}
											>
												{optn}
											</p>
										)}
									</button>
								);
							})}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
