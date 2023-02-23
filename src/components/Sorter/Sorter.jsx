import { useCallback, useEffect, useRef, useState } from 'react'
import arrowSvg from '../../assets/icons/basic_arrow_right.svg';
import sorticon from '../../assets/icons/sort_icon.svg'
import './Sorter.css'

export const Sorter = ({
  sortOptions,
  sortBy,
  setSortBy,
	reverseList,
	setReverseList,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const sorterRef = useRef(null)
  const handleClickOutside = useCallback((event) => {
    if (sorterRef.current &&
      !sorterRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }, [sorterRef.current])

  useEffect(() => {
    if (!document || !sorterRef.current) {
      return
    }
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
  }, [sorterRef.current])

  return (
		<div
			ref={sorterRef}
			type="button"
			className={`srtr${isOpen || sortBy.length ? ' srtr--open' : ''}`}
			onClick={() => {
			  setIsOpen(true)
			}}
			{...props}
		>
			<div className="srtr__tltp-txt">
				Sort
			</div>
			<img
				className="srtr__btn"
				src={sorticon}
				alt="toggle sorting"
			/>
			<div className={`srtr__list${isOpen ? ' srtr__list--open' : ''}`}>
				{Object.entries(sortOptions).map(([key, opt]) => {
				  const i = sortBy.findIndex(item => item.length === opt.length && item.every((_, i) => item[i] === opt[i]));
					const reversed = !!reverseList[opt];
				  const selected = i !== -1;

					return (
						<button
							key={key}
							type="button"
							onClick={() => {
							  if (!selected) {
									setSortBy(prev => [...prev, opt])
									setReverseList((prev) => ({
										...prev,
										[opt]: false,
									}))
									return;
								}
								if (reversed) {
									setSortBy(prev => prev.filter(item => item !== opt))
									setReverseList((prev) => {
										delete prev[opt]

										return prev;
									})
								} else {
									
									setReverseList((prev) => ({
										...prev,
										[opt]: true,
									}))
								}
							}}
							className={`srtr__item${selected ? ' srtr__item--slctd' : ''}`}
						>
							{selected && (
								reversed ? (
									<span className="srtr__item-idx srtr__item-idx--reversed">
										{i !== -1 ? i + 1 : ''}
										<img className="srtr__direction" src={arrowSvg} alt="sort direction upwards" />
									</span>
								) : (
									<span className="srtr__item-idx">
										{i !== -1 ? i + 1 : ''}
										<img className="srtr__direction" src={arrowSvg} alt="sort direction downwards" />
									</span>
								)
								
							)}
							{key}
						</button>
				  )
				})}
			</div>
		</div>
  )
}
