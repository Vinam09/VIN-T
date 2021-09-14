import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// FORM
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

//Back to Top
const mybutton = document.getElementById("back-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//SIDEBAR FUNCTIONALITY
const sideBar = document.getElementById('sidebar');
const icon = document.getElementById('nav-icon1');

const navLink = document.getElementsByClassName('sidenav-link');
const sections = document.getElementsByTagName('section')

function toggleSection(){
  Array.prototype.forEach.call(sections, function(el){
    el.classList.toggle('hidden');
  })
}

icon.addEventListener("click", function(){
  icon.classList.toggle('open');
  sideBar.classList.toggle('sm:translate-x-0');
  toggleSection();
})

Array.prototype.forEach.call(navLink, function(el) {
  el.addEventListener("click", function(){
    icon.classList.toggle('open');
    sideBar.classList.toggle('sm:translate-x-0');
    toggleSection();
  })
})
