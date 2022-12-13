import React from 'react'
import { useState } from 'react'

import Baby from '../../images/pets/baby.jpg'
import Flurry from '../../images/pets/flurry.jpg'
import Lake from '../../images/pets/lake.jpg'

import Puppies from '../../images/pets/puppies.jpg'



export default function Home() {
	const data = [{image: Baby},
				  {image: Flurry},
				  {image: Puppies},
				  {image: Lake}]

	const [currentSlide, setSlide] = useState(0)

	function nextSlide(){
		if(currentSlide === 3)
		setSlide(0)
		else 
		setSlide(currentSlide +  1)

	}
	function prevSlide(){
		if(currentSlide == 0)
			setSlide(3)
		else
		setSlide(currentSlide - 1)

	}

	return (
		<div>
			
		<div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      {data.map((slide, index) => {
      	return(
      <img
        src={slide.image}
        key={index}
        className={currentSlide == index ? "block w-full" : "hidden"}
      />
      )
      })}
    </div>
   
  </div>
   <button onClick={prevSlide} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
 <button onClick={nextSlide}  type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

		</div>
	)
}