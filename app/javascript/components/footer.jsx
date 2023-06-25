import React from 'react'
import Facebook from '../images/logos/facebook.png'
import Instagram from '../images/logos/instagram.png'


export default function Footer() {
    const current  = new Date();
    const year = `${current.getFullYear()}`
    return (
        
        <div>
           <div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-400"></div>
         <footer className="text-center p-4"> <small className="text-white">&copy; Copyright {year}, Lake in the Hills Pomskies </small> </footer>

    <div className="flex-grow border-t border-gray-400"></div>
</div>
        <div className="absolute bottom-0 right-0 mb-4 sm:mb-2 mr-2 sm:mr-8" style={{position:"fixed", zIndex: 1}}>
    <div>
              <a title="Follow me on Instagram" href="https://www.instagram.com/lakeinthehillspomskies" target="_blank" className="block w-12 md:w-16 h-12 sm:h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full border-4 border-slate-600" src={Instagram}/>
        </a>
        <br/>
              <a title="Follow me on Facebook" href="https://www.facebook.com/lakeinthehillspomskies" target="_blank" className="block w-12 md:w-16 h-12 sm:h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full border-4 border-slate-600" src={Facebook}/>
        </a>
    </div>
</div>
        </div>
    )
}




