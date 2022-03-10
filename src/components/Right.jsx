import React from 'react'
import up from '../images/up.png';
import down from '../images/down.png';

function Right() {
    return (
    
        <div className="fixed bottom-16 md:right-16 xm:right-12 sm:right-6 flex flex-row">
            <a id="back-top" className="hover:animate-bounce hidden" href="#"><img className="w-8" src ={up} alt="up"/></a>
        </div>
    )
}

export default Right;
