import React, { useState } from 'react'

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
  const [toggle, setPopUpToggle] = useState(false);
  const [url, setUrl] = useState("")

  function popup(puppy){
    setPopUpToggle(!toggle)
    setUrl(puppy)
  }
  

  return (
    <div>
  <div className="place-content-center" style={{paddingTop: "50px",
                  paddingRight: "20px",
                  paddingLeft: "30px",
                  paddingBottom: "250px",
                  backgroundColor: "#FFFFE0"}}>
     <h1 className="border-4 border-white container text-white bg-rose-200 p-4" style={{fontSize: "5vw", marginBottom: "50px"}}>Available Puppies</h1>
      {toggle && (
          <dialog
            className="dialog"
            open
            onClick={popup}
            style={{ width: "95%" }}

          >
          
           <img id="pic" className="dialog-image" style={{ width: "full" }} onClick={popup} src={url === "Puppy1" ? Puppy1 : url === "Puppy2" ? Puppy2 : url === "Puppy3" ? Puppy3 : url === "Puppy4" ? Puppy4 : url === "Puppy5" ? Puppy5 : url === "Puppy6" ? Puppy6 : url === "Puppy7" ? Puppy7 : url === "Puppy8" ? Puppy8 :  Puppy9  } />
          
          </dialog>
        )}
     <h1 className="border-2 border-white text-white bg-fuchsia-300 rounded-md visible sm:invisible text-center">&#8592; Swipe &#8594;</h1>

<div style={{width: "full",
            marginTop: "50px"}}className=" p-5 container carousel carousel-center space-x-4 bg-black/80 rounded-lg">
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure>    <img className="puppy" src={Puppy1} onClick={() => popup("Puppy1")} />
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
  <figure>    <img className="puppy" src={Puppy2} onClick={() => popup("Puppy2")}/>
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
  <figure> <img className="puppy" src={Puppy3} onClick={() => popup("Puppy3")} /></figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Appa</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
     <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure> <img className="puppy" src={Puppy8} onClick={() => popup("Puppy8")} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Katara</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 

     <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure> <img className="puppy" src={Puppy9} onClick={() => popup("Puppy9")} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Momo</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
</div>


{/*{toggle && (
          <dialog
            className="dialog"
            open
            onClick={popup}

          >
           <img style={{height: "1000px", width: "1000px" }} onClick={popup} className="puppy" src={url === "Puppy1" ? Puppy1 : url === "Puppy2" ? Puppy2 : url === "Puppy3" ? Puppy3 : url === "Puppy4" ? Puppy4 : url === "Puppy5" ? Puppy5 : url === "Puppy6" ? Puppy6 : url === "Puppy7" ? Puppy7 : url === "Puppy8" ? Puppy8 :  Puppy9  } />
          </dialog>
        )}
*/}


<div style={{width: "full",
            marginTop: "200px"
            }}className="p-5 container carousel carousel-center space-x-4 bg-black/80 rounded-lg">
  <div className="carousel-item">
<div className="card w-96 bg-[#60a5fa] shadow-xl">
  <figure>    <img className="puppy" src={Puppy4} onClick={() => popup("Puppy4")} />
</figure>
  <div className="card-body">
    <p className="text-black" style={{fontSize:"60px"}}>Sakka</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item ">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure>    <img className="puppy" src={Puppy5} onClick={() => popup("Puppy5")}/>
</figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Azula</p>
    <p className="text-white" style={{fontSize:"60px"}}>(HOLD)</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 

  
  <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure> <img className="puppy" src={Puppy6} onClick={() => popup("Puppy6")} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Toph</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div> 


    <div className="carousel-item">
<div className="card w-96 bg-fuchsia-300 shadow-xl">
  <figure> <img className="puppy" src={Puppy7} onClick={() => popup("Puppy7")} /></figure>
  <div className="card-body">
    <p className="text-white" style={{fontSize:"60px"}}>Zuki</p>
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