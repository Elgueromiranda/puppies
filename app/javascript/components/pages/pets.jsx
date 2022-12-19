import React from 'react'
import Bucky from '../../images/puppies/bucky.jpg'
import Mj from '../../images/puppies/mj.jpg'

import Pepper from '../../images/puppies/pepper.jpg'
import Stark from '../../images/puppies/stark.jpg'
import Thor from '../../images/puppies/thor.jpg'

export default function Pets() {
	return (
	<div className="grid place-items-center h-screen" style={{paddingTop: "40px",
									paddingLeft: "30px",
									paddingBottom: "190px",
									backgroundColor: "#FFFFE0"}}>

			<div  className="h-96 carousel carousel-vertical rounded-lg">
  <div className="carousel-item " style={{width: "650px",
                                          height: "400px"}}>
    <img src={Bucky} className="object-fill w-full h-full " />
  </div> 
  <div className="carousel-item " style={{width: "650px",
                                          height: "400px"}}>
    <img src={Mj} className="object-fill w-full h-full " />
  </div> 
  <div className="carousel-item " style={{width: "650px",
                                          height: "400px"}}>
    <img src={Pepper} className="object-fill w-full h-full"/>
  </div> 
</div>
			<div className="h-96 carousel carousel-vertical rounded-lg mt-4">
  <div className="carousel-item " style={{width: "650px",
                                          height: "400px"}}>
    <img src={Stark} className="object-fill w-full h-full " />
  </div> 
  <div className="carousel-item " style={{width: "650px",
                                          height: "400px"}}>
    <img src={Thor} className="object-fill  w-full h-full" />
  </div> 

  
</div>
		</div>


	)
}