import React from 'react'
import { useState, useEffect } from 'react'

import Baby from '../../images/pets/baby.jpg'
import Flurry from '../../images/pets/flurry.jpg'
import Lake from '../../images/pets/lake.jpg'

import Puppies from '../../images/pets/puppies.jpg'
import Computer from '../../images/pets/computer.jpg'

import { Link } from 'react-router-dom';





export default function Home() {
	const data = [{image: Baby},
				  {image: Flurry},
				  {image: Puppies},
				  {image: Lake}]

	const [currentSlide, setSlide] = useState(0)

	const [pictureLabel, setpictureLabel] = useState("")


	useEffect(
		
	

	function setLabel(){
		if(currentSlide == 0){
			setpictureLabel("Cacahuate Our Stud")

		}else if(currentSlide == 1){
			setpictureLabel("Flurry Our Dam")

		}else if(currentSlide == 2){
			setpictureLabel("Our First Litter")

		}else{
			setpictureLabel("Lake in the Hills, IL")

		}
	}

	), [currentSlide]


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
		<div className="bg-[#a5b4fc]"style={{paddingTop:"60px",
					paddingBottom: "500px"}}>
	
					    <h1 className="text-white bg-rose-200 p-3 rounded-full mr-4 ml-4 border-4" style={{fontSize:"5vw", textAlign: "center",marginBottom: "60px"}}>{pictureLabel}</h1>

		<div id="carouselExampleControls" className="carousel slide relative mr-2 ml-2" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full place-content-center">
     <div style={{fontSize:"3vw", position: "flex"}} className="absolute left-2 text-white/75 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60">Back</div>

      {data.map((slide, index) => {
      	return(

      <img
        src={slide.image}
        key={index}
        className={currentSlide == index ? "border-black/60 block object-scale-down h-150 w-150 rounded-full border-4 border-black" : "hidden"}
        style={{borderStyle: "solid",  borderWidth: "20px"}}
      />
      )
      })}
    </div>   
  </div>
      <div style={{fontSize:"3vw"}} className="right-0 mr-2 absolute text-white/75 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60">Next</div>

   <button onClick={prevSlide} type="button" className="absolute top-20 object-scale-down h-160 w-200 left-8 z-1 flex px-2 cursor-pointer group focus:outline-none mt-20" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full sm:w-20 sm:h-20 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
<svg className="w-6 h-6 text-black sm:w-15 sm:h-15 dark:text-gray-800" aria-hidden="true" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>

		</span>
    </button>
 <button onClick={nextSlide}  type="button" className="absolute top-20 object-scale-down h-160 w-200 right-8 z-1 flex px-2 cursor-pointer group focus:outline-none mt-20" data-carousel-next>
        <span className="text-white inline-flex items-center justify-center w-10 h-10 rounded-full sm:w-20 sm:h-20 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">

<svg className="w-6 h-6 text-black sm:w-15 sm:h-15 dark:text-gray-800" aria-hidden="true" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>

		</span>
    </button>
</div>
							<h1 className="text-white bg-black/90 p-4 text-center" style={{fontSize: "3vw", marginBottom: "50px",marginTop: "50px"}}> Anyone interested in purchasing a puppy will need to full out an <Link className="underline" target="_blank" to="/application">application.</Link></h1>

				<div className="text-center bg-black/70 pr-5 pl-5" style={{marginBottom: "60px", marginTop: "60px",  display: "flex",
  justifyContent: "center", paddingTop: "30px", paddingBottom: "30px"}}>
					<img className="rounded-full border-8 border-black" src={Computer}/>
					</div>
	
		<h1 className="text-white bg-rose-200 p-4 text-center" style={{fontSize: "3vw", marginBottom: "50px",marginTop: "50px"}}>Welcome to Lake in the Hills Pomkies. Have questions? <Link className="underline" target="_blank" to="/contact">Contact me.</Link></h1><br />


		</div>
	)
}