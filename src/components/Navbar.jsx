import React from "react";
import logo from '../images/logo.png';



function Navbar(){
    return (
        <div className = "py-0 sm:pl-6 sm:pr-8 xm:pr-24 bg-none flex flex-row justify-between items-center">
            
            <div>
                <a href="#"><img className="sm:w-40 xm:w-64" src={logo} alt = "Logo"/></a>
                
            </div>

            <div>
                

                <nav className = "flex flex-row justify-between items-center">
                    <div className ="sm:hidden xm:flex">
                        <a href="#" className = "text-primary text-base cursor-pointer ml-7 hover:text-hovercolor">Home</a>
                        <a href="#about" className = "text-primary text-base cursor-pointer ml-7 hover:text-hovercolor">About</a>
                        <a href="#projects" className = "text-primary text-base cursor-pointer ml-7 hover:text-hovercolor">Projects</a>
                        <a href="#contact" className = "text-primary text-base cursor-pointer ml-7 hover:text-hovercolor">Contact</a>
                    </div>

                    <div id="nav-icon1" className="xm:hidden">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </nav>
                
            </div>
        </div>
    )
    
    
}

export default Navbar;