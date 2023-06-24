import React from 'react'
import Bucky from '../../images/puppies/bucky.jpg'
import Mj from '../../images/puppies/mj.jpg'

import Pepper from '../../images/puppies/pepper.jpg'
import Stark from '../../images/puppies/stark.jpg'
import Thor from '../../images/puppies/thor.jpg'
import Loki from '../../images/puppies/loki.jpg'

import Puppy1 from '../../images/puppies/puppy1.png'
import Puppy2 from '../../images/puppies/puppy2.png'
import Puppy3 from '../../images/puppies/puppy3.png'
import Puppy4 from '../../images/puppies/puppy4.png'
import Puppy5 from '../../images/puppies/puppy5.png'
import Puppy6 from '../../images/puppies/puppy6.png'
import Puppy7 from '../../images/puppies/puppy7.png'
import Puppy8 from '../../images/puppies/puppy8.png'
import Puppy9 from '../../images/puppies/puppy9.png'




export default function Pets() {
  return (
  <div className="place-content-center" style={{paddingTop: "50px",
                  paddingRight: "20px",
                  paddingLeft: "30px",
                  paddingBottom: "500px",
                  backgroundColor: "#FFFFE0"}}>
     <h1 className="border-4 border-white container text-white bg-rose-200 p-4" style={{fontSize: "5vw", marginBottom: "50px"}}>Our Current Litter</h1>

     <h1 className="border-2 border-white text-white bg-fuchsia-300 rounded-md visible sm:invisible text-center">&#8592; Swipe &#8594;</h1>

<div style={{width: "full",
            marginTop: "50px"}}className=" p-5 container carousel carousel-center space-x-4 bg-black/80 rounded-lg">
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure>    <img src={Puppy1} />
</figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Iroh</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure>    <img src={Puppy2}/>
</figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Aang</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 

  
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure> <img src={Puppy3} /></figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Appa</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
     <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure> <img src={Puppy8} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Katara</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 

     <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure> <img src={Puppy9} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Momo</p>
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
  <figure>    <img src={Puppy4} />
</figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Sakka</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure>    <img src={Puppy5}/>
</figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Azula</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 

  
  <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure> <img src={Puppy6} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Toph</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 

    <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure> <img src={Puppy7} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Zuki</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
  
 
</div>





    </div>

  )
}