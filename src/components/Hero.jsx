import React from 'react';
import Button from './Button';

function Hero() {
    return (
        <section id="hero">
                    <div className="xm:pt-16 sm:pt-12 lg2:mx-80 md:mx-48 xm:mx-36 mb-32 sm:mx-8 2xl:pl-36 md:pl-2 sm:pl-0 max-w-5xl">
                        <h1 className="font-sans text-primary 2xl:text-5xl lg2:text-4xl sm:text-3xl text-left mb-6">Hi, my name is <span className="underline">Vinam</span>.</h1>
                        <h2 className="font-sans text-hovercolor 2xl:text-6xl lg2:text-5xl sm:text-4xl  text-left mb-12">
                        I am a frontend developer, designer and a perpetual learner.
                        </h2>

                        {/* <h3 className="font-body text-primary text-base  text-left mb-12">I am a frontend developer who's been building stuff for the web since my second
                        year of university. I have done remote work with agencies, consulted for local web development projects and collaborated with some amazing people
                        to create digital products for both business and consumer use.
                        </h3> */}

                        <div className="flex flex-row">
                        <Button link="#projects" name="Projects"/>    
                        <Button link="#contact"name="Contact"/>   
                        </div>  
                    </div>
                </section>
    )
}

export default Hero;
