import React from 'react'
import profile from '../images/profile.png';

function About() {
    return (
        <section id ="about">
        <div className="xm:pt-64 sm:pt-40 lg2:mx-80 md:mx-48 xm:mx-36 sm:mx-8 2xl:pl-36 md:pl-2 sm:pl-0 max-w-5xl">
            <h1 className="underline font-sans text-hovercolor text-3xl text-left sm:mb-10 xm:mb-6">About Me</h1>

            <div className="">

                <div>
                    <img className=" sm2:float-right  shadow-2xl border-solid border-2 border-hovercolor 2xl:h-80 sm2:h-56 rounded sm2:ml-4 mb-8 justify-center " src={profile} alt="Profile"/>

                    <p className="text-left text-base font-body text-primary tracking-wide">Hello! My name is Vinam and I build things for the web. For as long as I can remember
                    I have always enjoyed building things and with web development I always thought of myself as an artist with a blank canvas. Okay maybe not quite an artist but you get the idea.
                    </p>
                    
                    <p className="text-left text-base font-body text-primary mt-4 tracking-wide">Currently, I work independently with local businesses to help them adapt to ever changing
                    technological trends, establish an online presence and rebuild their brands in these unprecedented times. My main focus is building digital experiences that are
                    accessible, intuitive and easy to use.</p>

                    <p className="text-left text-base  font-body text-primary mt-4 mb-4 tracking-wide"> I am currently learning Node.js, Express.js and Redux to add to my tech stack.
                    Here are some of the technologies I've been working with recently:</p>

                    <div className = "pl-5 flex flex-row">
                        <ul className="text-left text-base   text-hovercolor font-body list-disc mr-16">
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>jQuery</li>
                            
                        </ul>

                        <ul className="text-left text-base  text-hovercolor font-body list-disc">
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
    )
}

export default About
