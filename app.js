
// Data for traits
const traitsParent = document.querySelector('.my-traits');
const traits = [
	{trait: 'Resourceful', icon: 'fas fa-search', description: 'Determined to use all possible resources to deliver'}, 
	{trait: 'Flexible', icon: 'fas fa-hands-helping', description: 'An individual who is capable of working in a team and also independently' },
	{trait: 'PASSIONATE', icon: 'fas fa-book', description: 'An individual who enjoys learning and applying them to bring inanimate things to life'},
	{trait: 'OPEN MINDED', icon: 'fas fa-comment', description: 'A person who appreciates constructive criticism'}];

//loop starts here for traits
traits.forEach((item)=> {
	// create div element with class trait-wrapper
	let traitWrapper = document.createElement('div');
		traitWrapper.classList.add('trait-wrapper');

	// create an i element with class fas fa-search
	let i = document.createElement('i');
		i.className += item.icon;

	// create an h1 element that contains a span with class green that includes a text node of trait
	let h1 = document.createElement('h1');
	let span = document.createElement('span');
		span.classList.add('green');
		span.appendChild(document.createTextNode(item.trait));
		h1.appendChild(span);

	// create a p element that contains description
	let p = document.createElement('p');
		p.appendChild(document.createTextNode(item.description));

	// append i, h1 and p into traitWrapper
		traitWrapper.appendChild(i);
		traitWrapper.appendChild(h1);
		traitWrapper.appendChild(p);

	// append traitWrapper to traitsParent
		traitsParent.appendChild(traitWrapper);
});


// Data for skills
const skillsParent = document.querySelector('.my-skills-wrapper');
const mySkills = [
	{skill: 'Javascript', level: '75%'},
	{skill: 'HTML5', level: '70%'},
	{skill: 'CSS3', level: '65%'},
	{skill: 'nodeJs', level: '70%'},
	{skill: 'Express', level: '75%'},
	{skill: 'Restful API', level: '60%'},
	{skill: 'ReactJs', level: '65%'},
	{skill: 'JQuery', level: '55%'},
	{skill: 'Bootstrap', level: '65%'},
	{skill: 'MongoDB', level: '75%'},
	{skill: 'PostgreSQL', level: '55%'},
	{skill: 'MySQL', level: '65%'},
	{skill: 'Git', level: '70%'}];

//loop starts here
mySkills.forEach(mySkill=>{
	// create a div element with class bar-wrapper
	let barWrapper = document.createElement('div');
		barWrapper.classList.add('bar-wrapper');

	// create a div element with class bar-header with a textnode that contains myskill.skill
	let barHeader = document.createElement('div');
		barHeader.classList.add('bar-header');

	// create a div element with class bar
	let bar = document.createElement('div');
		bar.classList.add('bar');
		bar.appendChild(document.createTextNode(mySkill.level));

	// create a div element with class meter
	let meter = document.createElement('div');
		meter.classList.add('meter');

	// set meter's width to myskill.level
		meter.style.width = mySkill.level;
		bar.appendChild(meter);

	// append barHeader to barWrapper
		barWrapper.appendChild(barHeader);

	// append bar to barWrapper
		barWrapper.appendChild(bar);

	// append barWrapper to skillsParent
		skillsParent.appendChild(barWrapper);
});


// retrieve parent ul element
const otherSkillsParent = document.querySelector('.other-skills ul');
// create an array that contains other skills list
const otherSkills = [
	'C++',
	'PHP',
	'AS/400',
	'Java',
	'MS Visual Studio',
	'Sublime Text 3',
	'SQL Developer',
	'Shell Script',
	'MS Office',
	'Oracle SQL Developer',
	'Star UML',
	'Github',
];

// loop starts here
otherSkills.forEach((skill)=>{
	// create an li element
	let li = document.createElement('li');
	// create a text node which contains other skill
		li.appendChild(document.createTextNode(skill));
	// append li to parent ul
		otherSkillsParent.appendChild(li);
});






// EVENTS
// Copy emails into clipboard
const emailButton = document.querySelector('#emailCopy');
emailButton.addEventListener('click', ()=>{
	const emails = document.querySelector('#emailContainer');
	emails.select();
	document.execCommand("copy");	
	alert("Email addresses successfully copied to clipboard!");
});


// show sections with animations
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y > 100){

  }
};

document.addEventListener("scroll", myScrollFunc);

