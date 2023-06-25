import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Application() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1eych5t', 'template_qmkz6xp', form.current, 'ESgxdTzcUGzLl_wKs')
      .then((result) => {
           alert("Your application has been submitted!")
            location.reload()  
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div style={{paddingBottom: "200px"}} className="bg-black">
      <section className="bg-gray-200" style={{paddingTop:"25px", paddingBottom: "150px"}}>

  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 style={{fontSize: "6vw", marginBottom: "80px" }} className="text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Application</h2>
      <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>

    <div class="flex-grow border-t border-gray-400"></div>
</div>
      <form action="#" className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">Name</label>
              <input type="text" id="name" name="name" className="focus:bg-white font-serif Times New Roman block p-3 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg border border-gray-300 shadow-sm focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required/>
          </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">Which puppy/puppies are you interested in buying?
              </label>
              <input type="text" id="puppy" name="puppy" className="focus:bg-white font-serif Times New Roman block p-3 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg border border-gray-300 shadow-sm focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Peanut" required/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">Email</label>
              <input name="email" type="email" id="email" className="focus:bg-white font-serif Times New Roman shadow-sm bg-[#cbd5e1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@mail.com" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="questionOne" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">
              Who will be the primary caretaker?</label>
              <textarea name="questionOne" id="questionOne" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>
           <div className="sm:col-span-2">
              <label htmlFor="questionTwo" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">
              Do you have any experience taking care of a dog? </label>
              <textarea name="questionTwo" id="questionTwo" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>
           <div className="sm:col-span-2">
              <label htmlFor="questionThree" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">
              Do you have any other pets?</label>
              <textarea name="questionThree" id="questionThree" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>
           <div className="sm:col-span-2">
              <label htmlFor="questionFour" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">
              How much time will the dog spend alone thoughout the day? </label>
              <textarea name="questionFour" id="questionFour" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>

            <div className="sm:col-span-2">
              <label htmlFor="questionSix" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">
              Will you be breeding?</label>
              <textarea name="questionSix" id="questionSix" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>
           <div className="sm:col-span-2">
              <label htmlFor="questionFive" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">
              What is your occupation? </label>
              <textarea name="questionFive" id="questionFive" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>
           <div className="sm:col-span-2">
              <label htmlFor="questionSeven" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">
              Are you okay with signing a strict neuter/spay contract?</label>
              <textarea name="questionSeven" id="questionSeven" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder=" "></textarea>
          </div>
           <div className="sm:col-span-2">
              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 font-serif Times New Roman">Address</label>
              <textarea name="address" id="address" rows="6" className="focus:bg-white font-serif Times New Roman block p-2.5 w-full text-sm text-gray-900 bg-[#cbd5e1] rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:border-primary-500" placeholder="123 W Maple Chicago, IL 60601"></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 bg-blue-500 hover:bg-blue-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}