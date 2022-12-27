import React from 'react'
import certificate from '../../images/certificate.jpeg'
import gooddog from '../../images/logos/gooddog.jpg'


export default function About() {
	return (
		<div className="place-content-center" style={{paddingTop:"40px",
					paddingBottom: "500px",
					backgroundColor: "#FFFFE0"}}>


<div className="grid grid-cols-2 container place-items-center">
  <div className="ml-5 mb-5 mr-1">
  <img src={certificate} className="border-8 rounded border-amber-900" />
  </div>
    <div className="mr-2 mb-5 ml-1">

  <img src={gooddog} className="object-scale-down h-70 w-80"/>	
    </div>
			
</div>
<div class="grid grid-col-2 ml-5 mr-3">
			<div>		<p className="font-serif bg-red-600 container text-white rounded p-3">

				All puppies will be accompanied by a flight nanny. We will not crate ship!
				Pick ups are also availble. We will meet you half way for delivery if your
				are within driving distance Otherwise, you will have to pay for delivery.
				</p>



</div>
		
	<div className="container bg-indigo-400 text-white rounded-md mt-3 p-3">
			Lake in the Hills has a responsible breeding program. Our lines are guaranteed to be healthy and all dogs come with a health guarantee. We are AKC registered and have succesfully delivered our puppies to many happy customers. Our dogs are family and We want to ensure their puppies end up in a good home.
			<br/>
			<br/>
			 If you would like to purchase a puppy you need to fill out an application.
			</div>
	
		
	</div>

</div>

	
	)
}