import React from 'react'
import Bucky from '../../images/puppies/bucky.jpg'
import Mj from '../../images/puppies/mj.jpg'

import Pepper from '../../images/puppies/pepper.jpg'
import Stark from '../../images/puppies/stark.jpg'
import Thor from '../../images/puppies/thor.jpg'

export default function Pets() {
	return (
		<div className="flex" style={{paddingTop: "50px",
									paddingLeft: "30px",
									paddingBottom: "170px",
									backgroundColor: "#FFFFE0"}}>

			<div  className="h-96 carousel carousel-vertical rounded-box" style={{paddingRight:"20px"}}>
  <div className="carousel-item h-full">
    <img src={Bucky} />
  </div> 
  <div className="carousel-item h-full">
    <img src={Mj} />
  </div> 
  <div className="carousel-item h-full">
    <img src={Pepper} />
  </div> 
  
</div>
			<div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img src={Stark} />
  </div> 
  <div className="carousel-item h-full">
    <img src={Thor} />
  </div> 

  
</div>
		</div>
	)
}