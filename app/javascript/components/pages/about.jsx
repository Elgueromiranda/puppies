import React from 'react'
import certificate from '../../images/certificate.jpeg'

export default function About() {
	return (
		<div  style={{paddingTop:"50px",
					paddingBottom: "300px",
					backgroundColor: "#FFFFE0"}}>
			<div className="container mr-2.5 ml-5 flex">
			<img src={certificate} className="mr-5"/> 
			<p className="container">
			Lake in the Hills has a responsible breeding program. Our lines are guarenteed to be healthy and all dogs come with a health guarantee. We are AKC registered and have succesfully delivered our puppies to many happy customers. Our dogs are family and We want to ensure their puppies end up in a good home.
			<br/>
			<br/>
			 If you would like to purchase a puppy you need to fill out an application.
			</p>
			</div>
		</div>
	)
}