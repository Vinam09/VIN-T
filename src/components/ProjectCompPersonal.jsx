import React from 'react'
import link from '../images/link.png'
import github from '../images/github.png';

function projectCompPersonal({picture,name,hyperlink,target,gitlink,skills,description}) {
    return (
        <div className="flex md:flex-row-reverse sm:flex-col xm:mb-32 sm:mb-20 shadow-2xl ">
        <div className="xl:w-7/12 md:w-1/2 sm:w-full 2xl:ml-10 lg:ml-4 sm:ml-0 p-4">
            <a href={hyperlink} target={target}>
                <img src ={picture} alt={name}/>
            </a>
        </div>

        <div className = "xl:w-5/12 md:w-1/2 sm:w-full p-4 flex flex-col justify-between">
            <div>
                <a href={hyperlink} target={target}><h2 className="text-primary 2xl:text-2xl md:text-xl text-left hover:text-hovercolor">{name}</h2></a>
                <p className ="text-primary text-left text-sm font-body xl:my-6 sm:my-3">{description}
                </p>

                <p className ="text-left text-hovercolor lg:text-base md:text-sm">{skills}</p>
            </div>
            <div className="flex flex-row">
                <a href={hyperlink} target={target}><img src ={link} className="mt-4 w-6 pb-2 mr-4 hover:animate-bounce"/></a>
                <a href={gitlink} target="_blank"><img src ={github} className="mt-4 w-6 pb-2 hover:animate-bounce"/></a>
            </div>
        </div>
    </div>
    )
}

export default projectCompPersonal
