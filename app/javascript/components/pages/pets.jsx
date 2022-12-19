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
  <div className="carousel-item h-full">
    <img src={Bucky} />
  </div> 
  <div className="carousel-item h-full">
    <img src={Mj} />
  </div> 
  <div className="carousel-item h-full">
    <img src={Pepper} />
  </div> 
  <br/><br>
</div>
			<div className="h-96 carousel carousel-vertical rounded-lg mt-4">
  <div className="carousel-item h-full">
    <img src={Stark} />
  </div> 
  <div className="carousel-item h-full">
    <img src={Thor} />
  </div> 

  
</div>
		</div>
     <br/> 


	)
}