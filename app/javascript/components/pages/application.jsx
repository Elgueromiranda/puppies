import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Application() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_94b3qyb', 'template_ypmjq62', form.current, 'WkUVFTEG6i4JERgKe')
      .then((result) => {
           alert("Your application has been submitted!")
            location.reload()  
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div style={{paddingBottom: "400px"}} className="bg-black">
      <section className="bg-zinc-600" style={{paddingTop:"25px"}}>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 style={{fontSize: "6vw", marginBottom: "80px" }} className="text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Application</h2>
      <form action="#" className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-serif Times New Roman">Name</label>
              <input type="text" id="name" name="name" className="focus:bg-white font-serif Times New Roman block p-3 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg border border-gray-300 shadow-sm focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required/>
          </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-serif Times New Roman">Which puppy/puppies are you interested in buying?
              </label>
              <input type="text" id="puppy" name="puppy" className="focus:bg-white font-serif Times New Roman block p-3 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg border border-gray-300 shadow-sm focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Peanut" required/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-serif Times New Roman">Email</label>
              <input name="email" type="email" id="email" className="focus:bg-white font-serif Times New Roman shadow-sm bg-[#cbd5e1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@mail.com" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-serif Times New Roman">
              Who will be the primary caretaker? <br/> Do you have any experience taking care of a dog? <br/>  Do you have any other pets? <br/>  How much time will the dog spend alone thoughout the day? <br/>  What is your occupation? </label>
              <textarea name="message" id="message" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>
           <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-serif Times New Roman">Address</label>
              <textarea name="address" id="message" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder="123 W Maple Chicago, IL 60601"></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 bg-blue-500 hover:bg-blue-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}