import React from 'react'

export const Footer = () => {
	return (
		<footer
			className="footer"
		>
			<small>&copy; Copyright - <a href="https://dare.land">Dare Land</a> | Pokedex</small>
			<small>{new Date().toDateString()}</small>
		</footer>
	)
}
