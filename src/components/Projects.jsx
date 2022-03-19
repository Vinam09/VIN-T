import React, {useState, useEffect} from 'react'
import ProjectComponent from './ProjectComponent'
import ProjectCompPersonal from './ProjectCompPersonal';
import clientProjects from './clientProjects'
import personalProjects from './personalProjects';

// function clientProjectRender(project){

//     return(
//         <ProjectComponent 
//             key={project.id}
//             picture={project.picture}
//             name={project.name}
//             hyperlink={project.hyperlink}
//             skills={project.skills}
//             description={project.description}
//         />
//     );

// }

function personalProjectRender(project){

    return(
        <ProjectCompPersonal
        key={project.id}
        picture={project.picture}
        name={project.name}
        hyperlink={project.hyperlink}
        target={project.target}
        gitlink={project.gitlink}
        skills={project.skills}
        description={project.description}
    />
    );
}

function Projects() {

    const [state, setState] = useState(false);

    const renderState = () => {

        return personalProjects.map(personalProjectRender)
        // if(state){
        //     return personalProjects.map(personalProjectRender)
        // }else{
        //     return clientProjects.map(clientProjectRender)
        // }
    }

    
    // useEffect(() => {
        
    //     const clients = document.getElementById("clients")
    //     const personal = document.getElementById("personal")

    //     if(!state){
    //         clients.classList.add('border-hovercolor','text-hovercolor')
    //         personal.classList.remove('border-hovercolor','text-hovercolor')
    //         personal.classList.add('border-secondary','text-primary')
    //     }else if(state){
    //         clients.classList.remove('border-hovercolor','text-hovercolor')
    //         clients.classList.add('border-secondary','text-primary')
    //         personal.classList.add('border-hovercolor','text-hovercolor')
    //     }
    // })



    return (
        <section id="projects">
            <div className="pt-36 lg2:mx-80 md:mx-48 xm:mx-36 sm:mx-8 2xl:pl-36 md:pl-2 xm:pl-0 max-w-5xl">
               <h1 className="underline font-sans text-hovercolor text-3xl text-left xm:mb-24 sm:mb-12">Projects</h1>
               {/* <div className="mb-16">

                    <button id="clients" type="button" onClick={() =>
                    setState(false)} 
                    className=" mr-4 xm:text-xl sm:text-lg py-2 px-4 border-b-2 hover:text-hovercolor">
                    Client</button>

                    <button id="personal" type="button" onClick={() =>
                    setState(true)} 
                    className="xm:text-xl sm:text-lg py-2 px-4 border-b-2  hover:text-hovercolor">
                    Personal</button>

                </div> */}

                <div>
                    {renderState()}
                </div>

            </div>
        </section>
    )
}

export default Projects;
