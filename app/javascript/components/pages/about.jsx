import React from 'react'
import certificate from '../../images/certificate.jpeg'
import gooddog from '../../images/logos/gooddog.jpg'


export default function About() {
	return (
		<div className="place-content-center" style={{paddingTop:"40px",
					paddingBottom: "500px",
					backgroundColor: "#FFFFE0"}}>


<div className="grid grid-cols-2 container place-items-center place-content-center">
  <div className="ml-5 mb-5 mr-1 ">
  <img src={certificate} className=" border-amber-900 mr-1" style={{borderStyle: "full",  borderWidth: "10px"}} />
  </div>
    <div className="mr-2 mb-5 ml-1">

  <img src={gooddog} className="object-scale-down h-70 w-80" style={{borderStyle: "double",  borderWidth: "15px"}}/>	
    </div>
			
</div>
<div className="grid grid-col-3 ml-5 mr-5">
			<div>		<p className="border-2 border-black font-serif Times New Roman bg-red-600 container text-white rounded p-3">

				ALL PUPPIES WILL BE ACCOMPANIED BY A FLIGHT NANNY. WE WILL NOT CRATE SHIP!
				PICK UPS ARE ALSO AVAILABLE. WE WILL MEET YOU HALF WAY FOR DELIVERY IF YOUR
				ARE WITHIN DRIVING DISTANCE OTHERWISE, YOU WILL HAVE TO PAY FOR DELIVERY.
				</p>



</div>
		
	<div className="border-2 border-black container bg-indigo-400 text-white rounded-md mt-5 p-3">
			Lake in the Hills has a responsible breeding program. Our lines are guaranteed to be healthy and all dogs come with a health guarantee. We are AKC registered and have succesfully delivered our puppies to many happy customers. Our dogs are family and We want to ensure their puppies end up in a good home.
			We are a small program that doesn't breed as often but we keep the dogs health in mind and ensure quality. 
			<br/>
			<br/>
			 If you would like to purchase a puppy you need to fill out an application.
			</div>
	
		
		<div className="border-2 border-black container w-full text-black rounded mt-10 bg-slate-100 p-3" style={{ fontSize: "3vw", marginLeft: "3px"}}>
						<p className="place-content-center">All of puppies purchased come with:</p><br/>
					<ol className="list-none place-content-center text-center">
						<li>Microchip</li>
						<li>Embark DNA test</li>
						<li>Deworming</li>
						<li>Vetenary report/Birth certificate</li>
						<li>IPA and APKC registration</li>
						<li>"Puppy pack"</li>

					</ol>

	</div>
			</div>
	

</div>

	
	)
}