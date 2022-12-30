import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_94b3qyb', 'template_ydwws58', form.current, 'WkUVFTEG6i4JERgKe')
      .then((result) => {
           alert("We will be in touch! We will reply promptly.")
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
      <h1 style={{ fontSize: "6vw", marginBottom: "80px" }} className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact</h1>
      <form action="#" className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-serif Times New Roman">Name</label>
              <input type="text" id="name" name="name" className="font-serif Times New Roman block p-3 w-full text-sm text-gray-900 bg-[#cbd5e1] focus:bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-serif Times New Roman">Email</label>
              <input name="email" type="email" id="email" className="font-serif Times New Roman shadow-sm bg-[#cbd5e1] focus:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@mail.com" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-serif Times New Roman">What puppy/puppies are you interested in?</label>
              <textarea name="subject" id="subject" rows="6" className="font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] focus:bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>
           <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-serif Times New Roman">Do you have any general questions or concerns?</label>
              <textarea name="question" id="question" rows="6" className="font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] focus:bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 bg-blue-500 hover:bg-blue-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}