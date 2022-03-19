import React,{useState} from 'react'
import link from '../images/link.png'
import github from '../images/github.png';


function ProjectComponent({picture,name,hyperlink,skills,description}) {

    return (
        <div className="flex md:flex-row sm:flex-col xm:mb-32 sm:mb-20 shadow-2xl">

            <div className="xl:w-7/12 md:w-1/2 sm:w-full 2xl:mr-10 lg:mr-4 sm:mr-0 p-4">
                <a href={hyperlink} target="_blank">
                    <img src ={picture} alt={name}/>
                </a>
            </div>

            <div className = "xl:w-5/12 md:w-1/2 sm:w-full p-4 flex flex-col justify-between ">
                <div>
                    <a href={hyperlink} rel="noreferrer" target="_blank"><h2 className="text-primary 2xl:text-2xl md:text-xl text-left hover:text-hovercolor">{name}</h2></a>
                    <p className ="text-primary text-left text-sm font-body xl:my-6 sm:my-3">{description}
                    </p>

                    <p className ="text-left text-hovercolor lg:text-base md:text-sm">{skills}</p>
                </div>
                <div>
                    <a href={hyperlink} rel="noreferrer" target="_blank"><img src ={link}  className="mt-4 w-6 pb-2 hover:animate-bounce"/></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent; 
