import React from 'react'

function Contact() {
    return (
        <section className="pt-20 xm:mb-44 sm:mb-24 lg2:mx-80 md:mx-48 xm:mx-36 sm:mx-8 2xl:pl-36 md:pl-2 sm:pl-0 max-w-5xl" id="contact">
            <h1 className="underline font-sans text-hovercolor text-3xl text-left mb-4">Contact</h1>
            <h2 className="text-left font-body text-base mb-10 text-primary">
            If you have any questions or have any project/job opportunity for me or just want to chat, leave me a message and I will get back to you.</h2>
            <form className="flex flex-col items-start" method='POST' action="https://formspree.io/f/mrgrjzql" >
                <input name="Name" className="my-1 p-3 bg-transparent text-primary w-full border-b-2 border-primary placeholder-primary focus:outline-none focus:border-hovercolor" type="text" placeholder="Name" />
                <input name="Email" className="my-1 p-3 bg-transparent text-primary w-full border-b-2 border-primary placeholder-primary focus:outline-none focus:border-hovercolor" type="email" placeholder="Email" />
                <textarea name="Message" className="my-8 p-3 bg-transparent text-primary w-full border-b-2 border-primary placeholder-primary focus:outline-none focus:border-hovercolor resize-y"
                 placeholder="Message" ></textarea>
                
                <input className="cursor-pointer rounded border-dashed border-2 border-hovercolor
                text-secondary bg-hovercolor px-6 py-2 mr-6  hover:text-hovercolor
                hover:bg-secondary transition ease-in " type="submit" name="Submit" />
            </form>
        </section>
    )
}

export default Contact;
