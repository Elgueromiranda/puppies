import React from 'react'
import certificate from '../../images/certificate.jpeg'

export default function About() {
	return (
		<div  className="grid place-items-center h-screen"  style={{paddingTop:"40px",
					paddingBottom: "300px",
					backgroundColor: "#FFFFE0"}}>
					<div className="grid grid-cols-1">
					<div className="p-4 bg-amber-900 mr-2 ml-2 margin-auto flex">
			<img src={certificate} />
				<div className="bg-white text-red-600 p-4 ">
				<p className="font-serif text-md">

				All puppies will be accompanied by a flight nanny. We will not crate ship.
				Pick ups are also availble. We will meet you half way for delivery if your
				are within driving distance Otherwise, you will have to pay for delivery
				</p>
				</div>
								
				</div>

		</div>
 
			<div className="container bg-indigo-400 text-white rounded-md mt-3 p-3">
			Lake in the Hills has a responsible breeding program. Our lines are guarenteed to be healthy and all dogs come with a health guarantee. We are AKC registered and have succesfully delivered our puppies to many happy customers. Our dogs are family and We want to ensure their puppies end up in a good home.
			<br/>
			<br/>
			 If you would like to purchase a puppy you need to fill out an application.
			</div>
		</div>
	)
}