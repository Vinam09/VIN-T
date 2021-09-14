import React from 'react'
import About from './About'
import Hero from './Hero'
import Contact from './Contact'
import Projects from './Projects'
import BottomSocials from './BottomSocials'

function Center() {
    return (
            <div className="scroll-behavior">
                <Hero />
                <About />    
                <Projects />
                <Contact />
                <BottomSocials />
            </div>
        
    )
}

export default Center;
