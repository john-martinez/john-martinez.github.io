
import { populateTraits, 
	     populateSkills, 
	     populateOtherSkills,
	     populateProjects, 
	     populateTestimonials } from './src/dataPopulation'

 import { showForm,
 		  hideForm,
 		  sendEmail,
 		  removeOffset,
 		  heroShow,
 		  submitForm } from './src/events.js'
 		  
/* GLOBAL VARIABLES */
const close = document.querySelector('.closeForm');
const open = document.querySelector('.add-testi');
const emailButton = document.querySelector('#emailCopy');


/* FUNCTIONS */

// Data population
populateTraits();
populateTestimonials();
populateProjects();
populateSkills();
populateOtherSkills();

// events
open.addEventListener("click", showForm);
close.addEventListener("click", hideForm);
emailButton.addEventListener('click', sendEmail);
document.addEventListener("scroll", removeOffset);
document.addEventListener("DOMContentLoaded", heroShow);
document.querySelector('.to-submit').addEventListener('submit', submitForm);






