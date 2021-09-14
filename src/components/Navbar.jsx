import React from "react";
import logo from '../images/logo.png';



function Navbar(){
    return (
        <div className = "fixed top-0 left-0 right-0 z-50 py-8 2xl:px-40 md:px-16 xm:px-12 sm:px-8 bg-primary flex flex-row justify-between items-center">
            
            <div>
                <a href="#"><img className="w-32" src={logo} alt = "Logo"/></a>
                
            </div>

            <div>
                

                <nav className = "flex flex-row justify-between items-center">
                    <div className ="sm:hidden xm:flex">
                        <a href="#" className = "text-secondary text-base cursor-pointer ml-7 hover:text-hovercolor">Home</a>
                        <a href="#about" className = "text-secondary text-base cursor-pointer ml-7 hover:text-hovercolor">About</a>
                        <a href="#projects" className = "text-secondary text-base cursor-pointer ml-7 hover:text-hovercolor">Projects</a>
                        <a href="#contact" className = "text-secondary text-base cursor-pointer ml-7 hover:text-hovercolor">Contact</a>
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