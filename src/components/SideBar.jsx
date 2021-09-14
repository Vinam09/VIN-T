import React from 'react'
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import mail from '../images/mail.png';
import call from '../images/call.png';

function SideBar() {
    return (
        <div id="sidebar" className="sm:flex flex-col justify-between bg-primary absolute top-24 bottom-0 border-t-8 border-secondary
         right-0 py-8 px-8 w-full xm:hidden -translate-x-full transform transition duration-200 ease-in-out">
            <nav className = "flex flex-col justify-between">
                <a href="#" className = "sidenav-link mt-20 text-secondary text-2xl cursor-pointer mb-7 hover:text-hovercolor">Home</a>
                <a href="#about" className = "sidenav-link text-secondary text-2xl cursor-pointer mb-7 hover:text-hovercolor">About</a>
                <a href="#projects" className = "sidenav-link text-secondary text-2xl cursor-pointer mb-7 hover:text-hovercolor">Projects</a>
                <a href="#contact" className = "sidenav-link text-secondary text-2xl cursor-pointer mb-7 hover:text-hovercolor">Contact</a>
            </nav>

            <div className="flex flex-row justify-center pb-10">
                <a className=" hover:animate-bounce" target="_blank" href="https://github.com/Vinam09"><img className="w-8 mr-3" src ={github} alt="Github"/></a>
                <a className=" hover:animate-bounce" target="_blank" href="https://www.linkedin.com/in/vinamtuteja/"><img className="w-8 mr-3"src ={linkedin} alt="LinkedIn"/></a>
                <a className=" hover:animate-bounce" target="_blank" href="mailto:info@vin-t.ca"><img className="w-8 mr-3"src ={mail} alt="Email"/></a>
                <a className=" hover:animate-bounce" target="_blank" href="tel:+16043698586"><img className="w-8 mr-3" src ={call} alt="Phone"/></a>
            </div>
        </div>
    
    )
}

export default SideBar
