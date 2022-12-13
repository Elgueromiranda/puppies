import React from 'react'
import Facebook from '../images/logos/facebook.png'
import Instagram from '../images/logos/instagram.png'

export default function Footer() {
    return (
        <div>
        <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10" style={{position:"fixed"}}>
    <div>
              <a title="Follow me on Instagram" href="https://www.instagram.com/lakeinthehillspomskies" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src={Instagram}/>
        </a>
        <br/>
              <a title="Follow me on Facebook" href="https://www.facebook.com/lakeinthehillspomskies" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src={Facebook}/>
        </a>
    </div>
</div>
        </div>
    )
}




