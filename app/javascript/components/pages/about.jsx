import React from 'react'
import certificate from '../../images/certificate.jpeg'

export default function About() {
	return (
		<div  className="grid place-items-center h-screen"  style={{paddingTop:"40px",
					paddingBottom: "300px",
					backgroundColor: "#FFFFE0"}}>
					<div className="p-4 bg-amber-900 rounded-md">
			<img src={certificate} />
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