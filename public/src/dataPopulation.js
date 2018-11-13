export const populateTraits = () =>{
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


export const populateSkills = () =>{
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
}

export const populateOtherSkills = () =>{
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

export const populateProjects = ()=>{
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
					// h2.appendChild(document.createTextNode(project.technology.join().replace(/,/g, ' + ')));
			const icons = project.technology.map(tech=>{
						let i = document.createElement('i');
							i.classList.add(`devicon-${tech}-plain`);
							i.title = tech;
							return i;
					})
				  icons.forEach(icon=>h2.appendChild(icon));
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
					  github.target = "_blank";
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

export const populateTestimonials = ()=>{
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
			const at = testimonial.position && testimonial.company ? "at" : "";
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