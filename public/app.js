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
	
}




// PROJECTS to be done
const populateProjects = ()=>{}

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
				position.appendChild(document.createTextNode(`${testimonial.position} at ${testimonial.company}`))
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
			let body = document.createElement('p');
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
		
}
	


// functions
const hideDelay = ()=>{
	window.setTimeout(()=>{
  		nav.classList.add('hide');
  		nav.classList.remove('show');
  	}, 10000);
}

// EVENTS
// Copy emails into clipboard
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

const resetPosition = (elem)=>{
	elem.style.transform = "translateX(0px)";
	elem.style.opacity ="1";
}

const close = document.querySelector('.closeForm');
const open = document.querySelector('.add-testi');
const blanket = document.querySelector('.blanket');
const testiForm = document.querySelector('.test-form-wrapper');
const showForm = ()=>{
	blanket.style.opacity = 1;
	blanket.style.zIndex = 98;
}
const hideForm = ()=>{
	blanket.style.opacity = 0;
	blanket.style.zIndex = -99;	
}

// main data population
populateTraits();
populateSkills();
populateTestimonials();


// events
open.addEventListener("click", showForm);
close.addEventListener("click", hideForm);
document.addEventListener("scroll", myScrollFunc);
document.addEventListener("DOMContentLoaded", (e)=>{
	const jumbo = document.querySelector('.jumbotron-header');
	const jumbo2 = document.querySelector('.jumbotron-overlay2');
	const first = document.querySelector('.first');
	const second = document.querySelector('.second');
	const third = document.querySelector('.third');
    const finish = document.querySelector('.jumbotron-header h2');

	setTimeout(()=>{
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
})


// send testimonials for review
const submitForm = (e)=>{
	e.preventDefault();
	const email = document.getElementById('email').value;
	const author = document.getElementById('author').value;
	const position = document.getElementById('position').value;
	const company = document.getElementById('company').value;
	const img = document.getElementById('img').value;
	const headline = document.getElementById('headline').value;
	const message = document.getElementById('message').value;

	fetch('http://localhost:3000/api/testimonials', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: email,
			author: author,
			company: company,
			position: position,
			img: img,
			headline: headline,
			message: message
		})
	})
	.then(res=>res.json())
	.then(data=>console.log(data))
}
document.querySelector('.to-submit').addEventListener('submit', submitForm);

// email send
const emailButton = document.querySelector('#emailCopy');
emailButton.addEventListener('click', sendEmail);