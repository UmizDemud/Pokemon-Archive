import './Button.css'

export const Button = ({imageUrl, tooltipText, handleClick}) => {
	return (
		<button
			className="btn"
			type="button"
			onClick={handleClick}
		>
			<img className="btn__img" src={imageUrl} alt={tooltipText} />
			<p className="btn__tltp-txt">{tooltipText}</p>
		</button>
	)
}
