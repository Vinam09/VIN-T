import linkedinClone from '../images/linkedin-clone.png'
import vint from '../images/vint.png'
import mynotes from '../images/mynotes.png'


const personalProjects = [
    {
      id: 1,
      picture: linkedinClone,
      name: "LinkedIn Clone",
      hyperlink: "https://linkedin-clone-8958e.web.app/",
      target:"_blank",
      gitlink:"https://github.com/Vinam09/linkedin-clone",
      skills: "React, Redux, Firebase, HTML, JavaScript, CSS, Material UI",
      description:
        "Linkedin UI clone app built with React and Redux. App is currently deployed on firebase and uses firebase Auth and firestore. *App is not optimized for smaller screens.",
    },
    {
      id: 2,
      picture: vint,
      name: "Portfolio Website",
      hyperlink: "#",
      target:"",
      gitlink:"https://github.com/Vinam09/VIN-T",
      skills: "React, HTML, JavaScript, CSS, Tailwind CSS",
      description:
        "My portfolio website built with React.",
    },
    {
      id: 2,
      picture: mynotes,
      name: "MyNotes",
      hyperlink: "https://mynotes-106d7.web.app/",
      target:"_blank",
      gitlink:"https://github.com/Vinam09/my-notes",
      skills: "React, Redux, Firebase, HTML, JavaScript, CSS, Tailwind CSS",
      description:
        "Chrome extension app for taking quick notes while browsing the web linked with firebase making it easy to store notes and revisit them later",
    },

  ];
  
  export default personalProjects;
