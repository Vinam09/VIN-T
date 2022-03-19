import linkedinClone from '../images/linkedin-clone.png';
import mynotes from '../images/mynotes.png';
import jsnotes from '../images/jsnotes.png';
import vintbusiness from '../images/vin-t.png';
import dazzle from '../images/dazzle.png';
import cjl from '../images/cjl.png';

const personalProjects = [
  {
    id: 1,
    picture: cjl,
    name: 'CanadaJobLeads',
    hyperlink: 'https://canadajobleads.ca',
    target: '_blank',
    gitlink: 'https://github.com/Vinam09',
    skills:
      'React, Netlify, HTML, JavaScript, Tailwind CSS, SanityJS, Serverless Functions',
    description:
      'Job Board application: newjobleads.ca , ablejobleads.ca , and more. ',
  },
  {
    id: 6,
    picture: jsnotes,
    name: 'Portfolio Website',
    hyperlink:
      'https://github.com/Vinam09/javascriptnotebook/blob/main/jsnotebook.gif',
    target: '_blank',
    gitlink: 'https://github.com/Vinam09/javascriptnotebook',
    skills: 'React, Redux, TypeScript',
    description:
      'A Javascript Notebook for code snippets, with in browser build support, npm support and more.',
  },
  {
    id: 2,
    picture: dazzle,
    name: 'Dazzle',
    hyperlink: 'https://dazzleapp.netlify.app',
    target: '_blank',
    gitlink: 'https://github.com/Vinam09/Dazzle',
    skills: 'React, Netlify, HTML, JavaScript, CSS, Tailwind CSS, SanityJS',
    description:
      'Photo sharing app that allows users to post, save and download. Please keep it clean!',
  },
  {
    id: 3,
    picture: mynotes,
    name: 'MyNotes',
    hyperlink: 'https://mynotes-106d7.web.app/',
    target: '_blank',
    gitlink: 'https://github.com/Vinam09/my-notes',
    skills: 'React, Redux, Firebase, HTML, JavaScript, CSS, Tailwind CSS',
    description:
      'Chrome extension app for taking quick notes while browsing the web linked with firebase making it easy to store notes and revisit them later',
  },
  {
    id: 4,
    picture: linkedinClone,
    name: 'LinkedIn Clone',
    hyperlink: 'https://linkedin-clone-8958e.web.app/',
    target: '_blank',
    gitlink: 'https://github.com/Vinam09/linkedin-clone',
    skills: 'React, Redux, Firebase, HTML, JavaScript, CSS, Material UI',
    description:
      'Linkedin UI clone app built with React and Redux. App is currently deployed on firebase and uses firebase Auth and firestore. *App is not optimized for smaller screens.',
  },
  {
    id: 5,
    picture: vintbusiness,
    name: 'VIN-T',
    hyperlink: 'https://vin-t.ca',
    target: '_blank',
    gitlink: 'https://github.com/Vinam09/linkedin-clone',
    skills: 'React, HTML, JavaScript, CSS, HeadlessUI, Tailwind CSS',
    description:
      'My Freelance local business website VIN-T, built with React, TailwindCSS.',
  },
];

export default personalProjects;
