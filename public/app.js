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


/* FUNCTIONS */
// Data for traits
const populateTraits = () =>{
	fetch('/api/traits')
	.then(res=>res.json())
	.then(traits=>{
		const traitsParent = document.querySelector('.my-traits');
			//loop starts here for traits
		traits.forEach((item)=> {
			// create div element with class trait-wrapper
			let traitWrapper = document.createElement('div');
				traitWrapper.classList.add('trait-wrapper');
			// create an i element with class fas fa-search
			let i = document.createElement('i');
				i.className += item.traitIcon;
			// create an h1 element that contains a span with class green that includes a text node of trait
			let h1 = document.createElement('h1');
			let span = document.createElement('span');
				span.classList.add('green');
				span.appendChild(document.createTextNode(item.traitName));
				h1.appendChild(span);
			// create a p element that contains description
			let p = document.createElement('p');
				p.appendChild(document.createTextNode(item.traitDesc));
			// append i, h1 and p into traitWrapper
				traitWrapper.appendChild(i);
				traitWrapper.appendChild(h1);
				traitWrapper.appendChild(p);
			// append traitWrapper to traitsParent
				traitsParent.appendChild(traitWrapper);
		});
	})
	.catch(err=>console.log(err))
}

// Data for skills
const populateSkills = () =>{
	fetch('/api/skills')
	.then(res=>res.json())
	.then(skills=>{
		const skillsParent = document.querySelector('.my-skills-wrapper');
		//loop starts here
		skills.forEach(skill=>{
			// create a div element with class bar-wrapper
			let barWrapper = document.createElement('div');
				barWrapper.classList.add('bar-wrapper');
			// create a div element with class bar-header with a textnode that contains myskill.skill
			let barHeader = document.createElement('div');
				barHeader.classList.add('bar-header');
				barHeader.appendChild(document.createTextNode(skill.skillName));
			// create a div element with class bar
			let bar = document.createElement('div');
				bar.classList.add('bar');
			// create a div element with class text-node which contains skill percentage
			let textNode = document.createElement('div');
				textNode.classList.add('text-node');
				textNode.appendChild(document.createTextNode(skill.skillLevel));
				bar.appendChild(textNode);
			// create a div element with class meter
			let meter = document.createElement('div');
				meter.classList.add('meter');
			// set meter's width to myskill.level
				meter.style.width = skill.skillLevel;
				bar.appendChild(meter);
			// append barHeader to barWrapper
				barWrapper.appendChild(barHeader);
			// append bar to barWrapper
				barWrapper.appendChild(bar);
			// append barWrapper to skillsParent
				skillsParent.appendChild(barWrapper);
		});

	})
	.catch(err=>console.log(err))

    // other skills
	fetch('/api/other-skills')
	.then(res=>res.json())
	.then(skills=>{
		// retrieve parent ul element
		const otherSkillsParent = document.querySelector('.other-skills ul');
		// create an array that contains other skills list
		// loop starts here
		skills.forEach((skill)=>{
			// create an li element
			let li = document.createElement('li');
			// create a text node which contains other skill
				li.appendChild(document.createTextNode(skill.skillName));
			// append li to parent ul
				otherSkillsParent.appendChild(li);
		});
	})
	.catch(err=>console.log(err))
}

// PROJECTS to be done
const populateProjects = ()=>{
	fetch('/api/projects')
	.then(res=>res.json())
	.then(projects=>{
		// select parent div .projects-wrapper
		const parent = document.querySelector('.projects-wrapper');
		// loop starts here
		projects.forEach(project=>{
			// create a blank div as a wrapper
			const div = document.createElement('div');
				// create a div element with class .project which contains img
			const projectDiv = document.createElement('div');
				  projectDiv.classList.add('project');
				  projectDiv.style.backgroundImage = `url(${project.img})`
				// create a div element with class .overlay
			const overlay = document.createElement('div');
				  overlay.classList.add('overlay');
					// create an h1 tag with a textnode of name
			const h1 = document.createElement('h1');
				  h1.appendChild(document.createTextNode(project.name));
					// create an h2 tag with a textnode of technology
			const h2 = document.createElement('h2');
					// loop starts here to loop through projects.technology
					h2.appendChild(document.createTextNode(project.technology.join().replace(/,/g, ' + ')));
					// create a p tag with a textnode of description
			const p = document.createElement('p');
				  p.appendChild(document.createTextNode(project.description));
				  	// append h1,h2 and p to .overlay
				  	overlay.appendChild(h1);
				  	overlay.appendChild(h2);
				  	overlay.appendChild(p);
					// create an a tag with class="fab fa-github" if github is not == ""
			if (project.github){
				const github = document.createElement('a');
					  github.classList.add('fab'); 
					  github.classList.add('fa-github'); 
					  github.href = project.github;
					  overlay.appendChild(github);
			}
			// append .project and .overlay to div
				div.appendChild(projectDiv);
				div.appendChild(overlay);

			// append div to parent
			parent.appendChild(div);
		})
	})
	.catch(err=>console.log(err))
}

// Data for Testimonials
const populateTestimonials = ()=>{
	fetch('/api/testimonials')
	.then(res=>res.json())
	.then(testimonials=>{
		// select the div element with class testimonials
		const parentTestimonials = document.querySelector('.testimonials');
		// loop starts here
		testimonials.forEach(testimonial=>{
		// create a div element with class testimonials-wrapper
			let testimonialsWrapper = document.createElement('div');
				testimonialsWrapper.classList.add('testimonials-wrapper');
			// create a div element with class author-info
			let authorInfo = document.createElement('div');
				authorInfo.classList.add('author-info');
				// create an img element with class author-pic which will have a default value of media/Unknown-person.gif
			let img = document.createElement('img');
				img.classList.add('author-pic');
				testimonial.img ? img.src = testimonial.img : img.src = 'Unknown-person.gif';
				// create a p element which contains the name of the author
			let name = document.createElement('p');
				name.appendChild(document.createTextNode(testimonial.author));
				// create a p element which contains the author's position and the company.
			let position = document.createElement('p');
			const at = testimonial.position ? "at" : "";
				position.appendChild(document.createTextNode(`${testimonial.position} ${at} ${testimonial.company}`))
			//create a div element with class bubble
			let bubble = document.createElement('div');
				bubble.classList.add('bubble');
				// create a div element with class testimonial-block
			let testimonialBlock = document.createElement('div');
				testimonialBlock.classList.add('testimonial-block');
					// create an h1 element which contains the headline
			let headline = document.createElement('h1');
				headline.appendChild(document.createTextNode(testimonial.headline));
					// create a p element which contains the message
			let body = document.createElement('pre');
				body.appendChild(document.createTextNode(testimonial.message));
				// create a div element with class arrow-head
			let arrowHead = document.createElement('div');
				arrowHead.classList.add('arrow-head');

				// append img, name and position to authorInfo
				authorInfo.appendChild(img);
				authorInfo.appendChild(name);
				authorInfo.appendChild(position);
				// append headline and body to testimonial-block
				testimonialBlock.appendChild(headline);
				testimonialBlock.appendChild(body);
				// append testimonialBlock and arrowHead to bubble
				bubble.appendChild(testimonialBlock);
				bubble.appendChild(arrowHead);
				// append authorInfo and bubble to testimonialsWrapper
				testimonialsWrapper.appendChild(authorInfo);
				testimonialsWrapper.appendChild(bubble);
				// append testimonialsWrapper to parentTestimonials
				parentTestimonials.appendChild(testimonialsWrapper);
		});
	})
	.catch(err=>console.log(err))
}

const alertMessage = (res, msg) => {
	const alert = document.querySelector('.alert p');
		  alert.classList.add(res);
		  alert.textContent = msg;
		  showAlert();
		  setTimeout(hideAlert,5000);
}

// send testimonials for review
const submitForm = (e)=>{
	e.preventDefault();
	if (author.value && headline.value && message.value){
		fetch('/api/testimonials', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				author: author.value,
				company: company.value,
				position: position.value,
				img: img.value,
				headline: headline.value,
				message: message.value
			})
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			formInputs.forEach(input=>input.readOnly = "true");
			alertMessage("success", "Thank you! Your testimonial have been submitted for review!");
		}).catch(err=>console.log(err));
	} else {
		alertMessage("fail", "Please make sure that fields with * have values.");
	}
	
}

// Copy emails into clipboard
const emailButton = document.querySelector('#emailCopy');
const sendEmail = ()=>{
	window.location.href = 'mailto:jrvmartinz@gmail.com;jrmartinez2@myseneca.ca;jrvmartinez@icloud.com';
}

// show sections with animations
var myScrollFunc = function() {
  let y = window.scrollY;	
  let a=200,
  	  b=500,
  	  c=1300,
      d=1600;

  if (window.innerWidth < 675){
  	a - 300;
  	b = 600;
  	c = 2000;
  	d = 2500;
  }
  if (y > a){
  	resetPosition(document.querySelector('.me'));
  } 
  if (y > b){
  	resetPosition(document.querySelector('.my-traits'));
  } 
  if (y > c){
  	resetPosition(document.querySelector('.my-skills-wrapper'));
  } 
    if (y > d){
  	resetPosition(document.querySelector('.other-skills'));
  } 

};

// resets position to origin
const resetPosition = (elem)=>{
	elem.style.transform = "translateX(0px)";
	elem.style.opacity ="1";
}



const showAlert = ()=>{
	document.querySelector('.alert').style.opacity = "1";
}

const hideAlert = ()=>{
	document.querySelector('.alert').style.opacity = "0";
	document.querySelector('.alert').classList.remove('sucess');
	document.querySelector('.alert').classList.remove('fail');
	setTimeout(()=>document.querySelector('.alert').textContent = "",1000);
	
}


const showForm = ()=>{
	blanket.style.opacity = 1;
	blanket.style.zIndex = 198;
}
const hideForm = ()=>{
	blanket.style.opacity = 0;
	blanket.style.zIndex = -99;
	// clear form
	formInputs.forEach(item=>{
		item.value = "";
		item.readOnly = false;
	})
	hideAlert();


}

const slideShow = (e)=>{
	const jumbo = document.querySelector('.jumbotron-header');
	const jumbo2 = document.querySelector('.jumbotron-overlay2');
	const first = document.querySelector('.first');
	const second = document.querySelector('.second');
	const third = document.querySelector('.third');
    const finish = document.querySelector('.jumbotron-header h2');
	setTimeout(()=>{
		window.scrollTo(0,0); //force scroll to top when page loads
		document.querySelector('.jumbotron-overlay').style.filter = "blur(15px)";
		first.style.opacity = "1";
		first.style.transform = "scale(1.2)"
			setTimeout(()=>{
			first.style.opacity="0";
			setTimeout(()=>{
				second.style.opacity = "1";
				second.style.transform = "scale(1.2)"
				setTimeout(()=>{
					second.style.opacity ="0";
					setTimeout(()=>{
						third.style.opacity ="1";
						third.style.transform = "scale(1.2)"
						setTimeout(()=>{
							third.style.opacity ="0";
							setTimeout(()=>{
								jumbo2.style.opacity = "0";
								jumbo2.style.zIndex = "-99";
								jumbo.style.opacity = "1";
								setTimeout(()=>{
									finish.style.opacity = "1";
								},1000)
							},1000)		
						},3000)
					},1000)
				},3000)
			}, 1000)
		}, 3000);
	}, 2000)
}


// main data population
populateTraits();
populateSkills();
populateTestimonials();
populateProjects();

// events
open.addEventListener("click", showForm);
close.addEventListener("click", hideForm);
emailButton.addEventListener('click', sendEmail);
document.addEventListener("scroll", myScrollFunc);
document.addEventListener("DOMContentLoaded", slideShow);
document.querySelector('.to-submit').addEventListener('submit', submitForm);

