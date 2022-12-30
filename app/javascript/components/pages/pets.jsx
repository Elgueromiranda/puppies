import React from 'react'
import Bucky from '../../images/puppies/bucky.jpg'
import Mj from '../../images/puppies/mj.jpg'

import Pepper from '../../images/puppies/pepper.jpg'
import Stark from '../../images/puppies/stark.jpg'
import Thor from '../../images/puppies/thor.jpg'
import Loki from '../../images/puppies/loki.jpg'

export default function Pets() {
  return (
  <div className="place-content-center" style={{paddingTop: "50px",
                  paddingRight: "20px",
                  paddingLeft: "30px",
                  paddingBottom: "500px",
                  backgroundColor: "#FFFFE0"}}>

<div style={{width: "full",
            marginTop: "50px"}}className=" p-3 container carousel carousel-center space-x-4 bg-[#fca5a5] rounded-lg">
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure>    <img src={Bucky} />
</figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Bucky</p>
    <div className="card-actions justify-end">
      <button className="btn rounded-sm text-white bg-green-500 font-serif Times New Roman">Buy Now</button>
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item">
<div className="card w-96 bg-[#fed7aa] shadow-xl">
  <figure>    <img src={Pepper}/>
</figure>
  <div className="card-body">
    <p className="text-fuchsia-300" style={{fontSize:"60px"}}>Pepper</p>
    <div className="card-actions justify-end">
      <button className="btn rounded-sm text-white bg-green-500 font-serif Times New Roman">Buy Now</button>
    </div>
  </div>
</div>
  </div> 

  
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure> <img src={Stark} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Stark</p>
    <div className="card-actions justify-end">
      <button className="btn rounded-sm text-white bg-green-500 font-serif Times New Roman">Buy Now</button>
    </div>
  </div>
</div>
  </div> 
 
</div>



<div style={{width: "full",
            marginTop: "100px"
            }}className="p-3 container carousel carousel-center space-x-4 bg-[#fca5a5] rounded-lg">
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure>    <img src={Loki} />
</figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Loki</p>
    <div className="card-actions justify-end">
      <button className="btn rounded-sm text-white bg-green-500 font-serif Times New Roman">Buy Now</button>
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item">
<div className="card w-96 bg-[#fed7aa] shadow-xl">
  <figure>    <img src={Mj}/>
</figure>
  <div className="card-body">
    <p className="text-fuchsia-300" style={{fontSize:"60px"}}>Maryjane</p>
    <div className="card-actions justify-end">
      <button className="btn rounded-sm text-white bg-green-500 font-serif Times New Roman">Buy Now</button>
    </div>
  </div>
</div>
  </div> 

  
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure> <img src={Thor} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Thor</p>
    <div className="card-actions justify-end">
      <button className="btn rounded-sm text-white bg-green-500 font-serif Times New Roman">Buy Now</button>
    </div>
  </div>
</div>
  </div> 
 
</div>





    </div>

  )
}