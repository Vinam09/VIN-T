import React from 'react'

import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import mail from '../images/mail.png';
import call from '../images/call.png';


function Left() {
    return (
        <div className="xm:fixed bottom-16 sm:hidden  md:left-16 xm:left-12 xm:flex xm:flex-col">
            <a className=" hover:animate-bounce" target="_blank" href="https://github.com/Vinam09"><img className="w-8 mr-3 mb-3" src ={github} alt="Github"/></a>
            <a className=" hover:animate-bounce" target="_blank" href="https://www.linkedin.com/in/vinamtuteja/"><img className="w-8 mr-3 mb-3"src ={linkedin} alt="LinkedIn"/></a>
            <a className=" hover:animate-bounce" target="_blank" href="mailto:info@vin-t.ca"><img className="w-8 mr-3 mb-3"src ={mail} alt="Email"/></a>
            <a className=" hover:animate-bounce" target="_blank" href="tel:+16043698586"><img className="w-8 mr-3 mb-3" src ={call} alt="Phone"/></a>
        </div>
    )
}

export default Left 
