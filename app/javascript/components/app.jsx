import React from 'react'
import Header from './header'
import Footer from './footer'

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import Application from './pages/application'
import Pets from './pages/pets'

import Contact from './pages/contact'

export default function App() {
	return (
		<div className="bg-black">
			<Header />
			<Routes>
			 <Route  path='*' element={<Home />} />
              <Route path='/application' element={<Application />} />
              <Route path='/about' element={<About />} />
              <Route path='/pets' element={<Pets />} />
              <Route path='/contact' element={<Contact />} />

			</Routes>
			<Footer />

		</div>
	)
}