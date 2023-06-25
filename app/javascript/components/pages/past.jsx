import React from 'react'
import Bucky from '../../images/puppies/bucky.jpg'
import Mj from '../../images/puppies/mj.jpg'

import Pepper from '../../images/puppies/pepper.jpg'
import Stark from '../../images/puppies/stark.jpg'
import Thor from '../../images/puppies/thor.jpg'
import Loki from '../../images/puppies/loki.jpg'

export default function Pets() {
  return (
    <div>
  <div className="place-content-center" style={{paddingTop: "50px",
                  paddingRight: "20px",
                  paddingLeft: "30px",
                  paddingBottom: "250px",
                  backgroundColor: "#FFFFE0"}}>
     <h1 className="border-4 border-white container text-white bg-rose-200 p-4" style={{fontSize: "5vw", marginBottom: "50px"}}>Past Litter</h1>

     <h1 className="border-2 border-white text-white bg-fuchsia-300 rounded-md visible sm:invisible text-center">&#8592; Swipe &#8594;</h1>

<div style={{width: "full",
            marginTop: "50px"}}className=" p-5 container carousel carousel-center space-x-4 bg-black/80 rounded-lg">
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure>    <img src={Bucky} />
</figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Bucky</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure>    <img src={Pepper}/>
</figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Pepper</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 

  
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure> <img src={Stark} /></figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Stark</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
 
</div>



<div style={{width: "full",
            marginTop: "100px"
            }}className="p-5 container carousel carousel-center space-x-4 bg-black/80 rounded-lg">
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure>    <img src={Loki} />
</figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Loki</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure>    <img src={Mj}/>
</figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Maryjane</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 

  
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure> <img src={Thor} /></figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Thor</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
 
</div>


    </div>

      <div style={{paddingBottom: "200px"}} className="bg-black">

    </div>
    </div>

  )
}