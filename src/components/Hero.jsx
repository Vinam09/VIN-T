import React from 'react';
import Button from './Button';

function Hero() {
    return (
        <section id="hero">
                    <div className="xm:pt-80 sm:pt-52 lg2:mx-80 md:mx-48 xm:mx-36 sm:mx-8 2xl:pl-24 md:pl-2 sm:pl-0 max-w-5xl">
                        <h1 className="font-sans text-primary 2xl:text-5xl lg2:text-4xl sm:text-3xl text-left mb-6">Hi, my name is <span className="underline">Vinam</span>.</h1>
                        <h2 className="font-sans text-hovercolor 2xl:text-6xl lg2:text-5xl sm:text-4xl  text-left mb-4">
                        I am a frontend developer and a web designer.
                        </h2>

                        <h3 className="font-body text-primary text-base  text-left mb-12">I enjoy crafting clean, memorable design solutions that make sense,
                        please the eye and leave an impression. I work with local businesses to help them get online, establish a digital presence
                        and give their businesses the competitive edge they deserve.
                        </h3>

                        <div className="flex flex-row">
                        <Button link="#projects" name="Projects"/>    
                        <Button link="#contact"name="Contact"/>   
                        </div>  
                    </div>
                </section>
    )
}

export default Hero;
