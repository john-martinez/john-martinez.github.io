
import { populateTraits, 
	     populateSkills, 
	     populateOtherSkills,
	     populateProjects, 
	     populateTestimonials } from './src/dataPopulation'

 import { showForm,
 		  hideForm,
 		  sendEmail,
 		  myScrollFunc,
 		  heroShow,
 		  submitForm } from './src/events.js'
 		  
/* GLOBAL VARIABLES */
const author = document.getElementById('author');
const position = document.getElementById('position');
const company = document.getElementById('company');
const img = document.getElementById('img');
const headline = document.getElementById('headline');
const message = document.getElementById('message');
const formInputs = [author,position,company,img,headline,message];
const close = document.querySelector('.closeForm');
const open = document.querySelector('.add-testi');
const blanket = document.querySelector('.blanket');
const testiForm = document.querySelector('.test-form-wrapper');
const emailButton = document.querySelector('#emailCopy');
let timeoutId;


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
document.addEventListener("scroll", myScrollFunc);
document.addEventListener("DOMContentLoaded", heroShow);
document.querySelector('.to-submit').addEventListener('submit', submitForm);






