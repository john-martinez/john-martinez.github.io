// EVENTS
// Copy emails into clipboard
const emailButton = document.querySelector('#emailCopy');
emailButton.addEventListener('click', ()=>{
	const emails = document.querySelector('#emailContainer');
	emails.select();
	document.execCommand("copy");	
	alert("Email addresses successfully copied to clipboard!");
});