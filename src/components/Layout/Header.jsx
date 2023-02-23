import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/pokeball.svg'

export const Header = () => {
	return (
		<header className="header">
			<div className="inner_header">
				<div className="logo_container">
					<Link to='/'><img src={logo} alt="home" /></Link>
				</div>
				<nav style={{height: '100%'}}>
					<ul className="nav">
						<Link to='/move'><li>Moves</li></Link>
						<Link to='/pokedex'><li>Pokedex</li></Link>
					</ul>
				</nav>
			</div>
		</header>
	)
}
