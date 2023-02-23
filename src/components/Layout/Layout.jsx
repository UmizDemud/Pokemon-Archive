import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import './Layout.css'


export const Layout = () => (
	<div className='layout'>
		<Header />
		<main className='main'>
			<Outlet />
		</main>
		<Footer />
	</div>
);
